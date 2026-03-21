const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const KNOWN_FIELDS = new Set([
  "action",
  "type",
  "path",
  "title",
  "date",
  "tags",
  "published",
  "content",
]);

const FIELD_ORDER = [
  "action",
  "type",
  "path",
  "title",
  "date",
  "tags",
  "published",
  "content",
];

function run(cmd, args, options = {}) {
  cp.execFileSync(cmd, args, { stdio: "inherit", ...options });
}

function runQuiet(cmd, args, options = {}) {
  cp.execFileSync(cmd, args, { stdio: "ignore", ...options });
}

function normalizeNewlines(text) {
  return (text || "").replace(/\r\n/g, "\n");
}

function normalizeFieldKey(text) {
  let key = (text || "").trim().toLowerCase();
  const parenIndex = key.indexOf(" (");
  if (parenIndex !== -1) {
    key = key.slice(0, parenIndex);
  }
  return key;
}

function parseFields(body) {
  const text = normalizeNewlines(body);
  const fields = {};
  const lines = text.split("\n");
  let currentKey = null;
  let currentIndex = -1;
  let buffer = [];

  for (const line of lines) {
    if (currentKey === "content") {
      buffer.push(line);
      continue;
    }

    const headingMatch = line.match(/^\s*###\s+(.+?)\s*$/);
    if (headingMatch) {
      const key = normalizeFieldKey(headingMatch[1]);
      const keyIndex = FIELD_ORDER.indexOf(key);
      if (KNOWN_FIELDS.has(key) && keyIndex > currentIndex) {
        if (currentKey) {
          fields[currentKey] = buffer.join("\n");
        }
        currentKey = key;
        currentIndex = keyIndex;
        buffer = [];
        continue;
      }
    }

    if (currentKey) {
      buffer.push(line);
    }
  }

  if (currentKey) {
    fields[currentKey] = buffer.join("\n");
  }

  return fields;
}

function isNoResponse(value) {
  if (!value) return true;
  return value
    .trim()
    .replace(/^_+|_+$/g, "")
    .replace(/^`+|`+$/g, "")
    .trim()
    .toLowerCase() === "no response";
}

function normalizeField(value) {
  if (!value) return "";
  const v = value.trim();
  if (isNoResponse(v)) return "";
  return v;
}

function normalizeChoiceField(value) {
  const normalized = normalizeField(value);
  if (!normalized) return "";
  const firstLine = normalized
    .split("\n")
    .map(line => line.trim())
    .find(Boolean);
  if (!firstLine) return "";
  return firstLine.replace(/^[-*]\s+/, "").replace(/^`+|`+$/g, "").trim().toLowerCase();
}

function isRawNoResponseContent(value) {
  if (!value) return true;
  const normalized = normalizeNewlines(value).trim();
  return normalized === "_No response_" || normalized === "`No response`" || normalized === "No response";
}

function unwrapIssueFormMarkdownBlock(value) {
  const text = normalizeNewlines(value || "");
  const match = text.match(/^\s*```markdown[^\n]*\n([\s\S]*?)\n```\s*$/i);
  if (!match) return text;
  return match[1];
}

function normalizeContentField(value) {
  if (!value) return "";
  if (isRawNoResponseContent(value)) return "";
  const v = unwrapIssueFormMarkdownBlock(value);
  return v;
}

function quoteYamlString(value) {
  return JSON.stringify(String(value ?? ""));
}

function formatYamlList(values) {
  if (!values.length) return "[]";
  return `[${values.map(quoteYamlString).join(", ")}]`;
}

function setOutput(name, value) {
  const outputPath = process.env.GITHUB_OUTPUT;
  if (!outputPath) return;
  fs.appendFileSync(outputPath, `${name}=${value}\n`);
}

function slugifyTitle(title) {
  const ascii = (title || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .trim()
    .replace(/[\s-]+/g, "-");
  return ascii || "post";
}

function safePath(p) {
  if (!p) return null;
  if (p.startsWith("/")) return null;
  const norm = path.normalize(p);
  if (norm.startsWith("..") || norm.includes(".." + path.sep)) return null;
  return norm;
}

function validatePathForType(filePath, type) {
  if (type === "post") {
    return filePath.startsWith(`_posts${path.sep}`) && filePath.endsWith(".md");
  }

  if (type === "page") {
    return filePath.endsWith(".md");
  }

  return true;
}

function buildPostContent({ title, date, tags, published, body }) {
  const tagList = tags ? tags.split(",").map(t => t.trim()).filter(Boolean) : [];
  const tagText = formatYamlList(tagList);
  const isPublished = published !== "false";
  const fm = [
    "---",
    "layout: post",
    `title: ${quoteYamlString(title)}`,
    `date: ${quoteYamlString(date)}`,
    "Author: Right",
    `tags: ${tagText}`,
    "comments: true",
    "toc: true",
    "pinned: false",
    `published: ${isPublished}`,
    "",
    "---",
    "",
  ].join("\n");
  return fm + (body || "");
}

async function fetchIssueFromApi(issueNumber) {
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;
  const apiUrl = process.env.GITHUB_API_URL || "https://api.github.com";

  if (!token) throw new Error("GITHUB_TOKEN is required when ISSUE_NUMBER is set");
  if (!repository) throw new Error("GITHUB_REPOSITORY not set");

  const url = `${apiUrl}/repos/${repository}/issues/${issueNumber}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "issue-update-script",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch issue #${issueNumber}: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

async function loadIssue() {
  const eventPath = process.env.GITHUB_EVENT_PATH;
  if (eventPath && fs.existsSync(eventPath)) {
    const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
    if (event.issue) return event.issue;
  }

  const issueNumber = (process.env.ISSUE_NUMBER || "").trim();
  if (issueNumber) {
    return fetchIssueFromApi(issueNumber);
  }

  throw new Error("No issue found in event payload and ISSUE_NUMBER is not set");
}

async function main() {
  const issue = await loadIssue();

  if (issue.pull_request) {
    throw new Error(`Issue #${issue.number} is a pull request, not a plain issue`);
  }

  const labels = (issue.labels || []).map(l => l.name);
  if (!labels.includes("content-update")) {
    console.log("Label content-update not present, skipping");
    setOutput("committed", "false");
    return;
  }

  const allowed = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);
  if (!allowed.has(issue.author_association)) {
    console.log(`Not authorized: ${issue.author_association}`);
    setOutput("committed", "false");
    return;
  }

  const fields = parseFields(issue.body || "");
  const action = normalizeChoiceField(fields["action"]);
  const type = normalizeChoiceField(fields["type"]);
  let filePath = safePath(normalizeField(fields["path"]));
  const title = normalizeField(fields["title"]);
  const date = normalizeField(fields["date"]);
  const tags = normalizeField(fields["tags"]);
  const published = normalizeChoiceField(fields["published"]);
  const content = normalizeContentField(fields["content"]);

  if (!action || !["create", "update", "delete"].includes(action)) {
    throw new Error(`Invalid action: ${JSON.stringify(fields["action"] || "")}`);
  }

  if (!type || !["post", "page", "file"].includes(type)) {
    throw new Error(`Invalid type: ${JSON.stringify(fields["type"] || "")}`);
  }

  if (action === "create" && type === "post" && !filePath) {
    if (!title || !date) {
      throw new Error("Post requires Title and Date when Path is empty");
    }
    const slug = slugifyTitle(title);
    filePath = path.join("_posts", `${date}-${slug}-${issue.number}.md`);
  }

  if (!filePath) {
    throw new Error("Path is required for this action/type");
  }

  if (!validatePathForType(filePath, type)) {
    throw new Error(`Invalid path for ${type}: ${filePath}`);
  }

  if (action === "delete") {
    if (fs.existsSync(filePath)) {
      fs.rmSync(filePath);
      console.log(`Deleted ${filePath}`);
    } else {
      console.log(`File not found: ${filePath}, skipping`);
      setOutput("committed", "false");
      return;
    }
  } else {
    let fileContent = content || "";
    if (type === "post") {
      if (!title || !date) {
        throw new Error("Post create/update requires Title and Date");
      }
      fileContent = buildPostContent({ title, date, tags, published, body: content || "" });
    } else if (!content) {
      throw new Error(`${type} ${action} requires Content`);
    }

    const dir = path.dirname(filePath);
    if (dir && dir !== ".") fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, fileContent, "utf8");
    console.log(`${action}d ${filePath}`);
  }

  run("git", ["status", "--porcelain"]);
  run("git", ["config", "user.name", "github-actions[bot]"]);
  run("git", ["config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com"]);
  run("git", ["add", "-A", "--", filePath]);
  try {
    runQuiet("git", ["diff", "--cached", "--quiet"]);
    console.log("No staged changes, skipping commit");
    setOutput("committed", "false");
    return;
  } catch (_) {
    // `git diff --cached --quiet` exits non-zero when there are staged changes.
  }
  run("git", ["commit", "-m", `Issue #${issue.number}: ${action} ${filePath}`]);
  setOutput("committed", "true");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
