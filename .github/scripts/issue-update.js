const fs = require("fs");
const path = require("path");
const cp = require("child_process");

function run(cmd) {
  cp.execSync(cmd, { stdio: "inherit" });
}

function normalizeNewlines(text) {
  return (text || "").replace(/\r\n/g, "\n");
}

function parseFields(body) {
  const text = normalizeNewlines(body);
  const fields = {};
  const re = /###\s+([^\n]+)\n([\s\S]*?)(?=\n###\s+|$)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const key = m[1].trim().toLowerCase();
    const value = m[2].trim();
    fields[key] = value;
  }
  return fields;
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

function buildPostContent({ title, date, tags, body }) {
  const tagList = tags ? tags.split(",").map(t => t.trim()).filter(Boolean) : [];
  const tagText = tagList.length ? `[${tagList.join(", ")}]` : "[]";
  const fm = [
    "---",
    "layout: post",
    `title: ${title}`,
    `date: ${date}`,
    "Author: Right",
    `tags: ${tagText}`,
    "comments: true",
    "toc: true",
    "pinned: false",
    "",
    "---",
    "",
  ].join("\n");
  return fm + (body || "").trimStart() + "\n";
}

function main() {
  const eventPath = process.env.GITHUB_EVENT_PATH;
  if (!eventPath) {
    console.error("GITHUB_EVENT_PATH not set");
    process.exit(1);
  }

  const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
  const issue = event.issue;
  if (!issue) {
    console.log("No issue in event");
    return;
  }

  const labels = (issue.labels || []).map(l => l.name);
  if (!labels.includes("content-update")) {
    console.log("Label content-update not present, skipping");
    return;
  }

  const allowed = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);
  if (!allowed.has(issue.author_association)) {
    console.log(`Not authorized: ${issue.author_association}`);
    return;
  }

  const fields = parseFields(issue.body || "");
  const action = (fields["action"] || "").toLowerCase();
  const type = (fields["type"] || "").toLowerCase();
  let filePath = safePath(fields["path"] || "");
  const title = fields["title"] || "";
  const date = fields["date"] || "";
  const tags = fields["tags"] || "";
  const content = fields["content"] || "";

  if (!action || !["create", "update", "delete"].includes(action)) {
    throw new Error("Invalid action");
  }

  if (!type || !["post", "page", "file"].includes(type)) {
    throw new Error("Invalid type");
  }

  if (type === "post" && !filePath) {
    if (!title || !date) {
      throw new Error("Post requires Title and Date when Path is empty");
    }
    const slug = slugifyTitle(title);
    filePath = path.join("_posts", `${date}-${slug}-${issue.number}.md`);
  }

  if (!filePath) {
    throw new Error("Path is required for this action/type");
  }

  if (action === "delete") {
    if (fs.existsSync(filePath)) {
      fs.rmSync(filePath);
      console.log(`Deleted ${filePath}`);
    } else {
      console.log(`File not found: ${filePath}`);
    }
  } else {
    let fileContent = content || "";
    if (type === "post") {
      if (!title || !date) {
        throw new Error("Post create/update requires Title and Date");
      }
      fileContent = buildPostContent({ title, date, tags, body: content || "" });
    }

    const dir = path.dirname(filePath);
    if (dir && dir !== ".") fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, fileContent, "utf8");
    console.log(`${action}d ${filePath}`);
  }

  run("git status --porcelain");
  run("git config user.name \"github-actions[bot]\"");
  run("git config user.email \"41898282+github-actions[bot]@users.noreply.github.com\"");
  run(`git add ${JSON.stringify(filePath)}`);
  run(`git commit -m "Issue #${issue.number}: ${action} ${filePath}"`);
}

main();
