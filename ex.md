import React, { useState, useEffect } from 'react';



// --- 自定义 CSS 注入 (CRT 特效和动画) ---

const CustomStyles = () => (

  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=VT323&family=Fira+Code:wght@400;500&family=Noto+Sans+SC:wght@400;500;700&display=swap');

    :root {
      --crt-cyan: #00afff;
      --crt-magenta: #ff0050;
      --crt-yellow: #f1fa8c;
      --crt-dim: #1e3f5a;
      --bg-color: #0e0e0e;
      --text-main: #d0d0d0;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      font-family: 'Fira Code', 'Noto Sans SC', monospace;
      margin: 0;
      overflow-x: hidden;
    }

    /* 扫描线与亚像素网格效果 */
    .scanlines {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
      background-size: 100% 2px, 3px 100%;
      pointer-events: none;
      z-index: 50;
    }

    /* 轻微的全屏泛光效果 */
    .vignette {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%);
      pointer-events: none;
      z-index: 49;
    }

    /* 屏幕闪烁效果 (模拟刷新率) */
    @keyframes flicker {
      0% { opacity: 0.98; }
      5% { opacity: 0.94; }
      10% { opacity: 0.98; }
      15% { opacity: 1; }
      100% { opacity: 1; }
    }
    .crt-screen {
      animation: flicker 0.15s infinite;
    }

    /* 磷光动态色差效果 */
    @keyframes phosphor {
      0% { text-shadow: 1px 0 2px rgba(0,30,255,.5), -1px 0 2px rgba(255,0,80,.3), 0 0 3px; }
      25% { text-shadow: 0px 0 2px rgba(0,30,255,.5), 1px 0 2px rgba(255,0,80,.3), 0 0 3px; }
      50% { text-shadow: -1px 0 2px rgba(0,30,255,.5), 0px 0 2px rgba(255,0,80,.3), 0 0 3px; }
      75% { text-shadow: 0px 0 2px rgba(0,30,255,.5), -1px 0 2px rgba(255,0,80,.3), 0 0 3px; }
      100% { text-shadow: 1px 0 2px rgba(0,30,255,.5), -1px 0 2px rgba(255,0,80,.3), 0 0 3px; }
    }

    /* 专门为标题等高亮文字设置的辉光 */
    .glow-text {
      color: var(--crt-cyan);
      animation: phosphor 1.6s infinite;
    }
    .glow-box {
      box-shadow: 0 0 8px rgba(0, 175, 255, 0.2) inset, 0 0 8px rgba(0, 175, 255, 0.2);
    }

    /* 光标闪烁 */
    @keyframes blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .cursor-blink {
      animation: blink 1s step-end infinite;
    }

    /* 自定义滚动条 */
    ::-webkit-scrollbar {
      width: 12px;
      background: var(--bg-color);
      border-left: 1px solid var(--crt-dim);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--crt-cyan);
    }
  `}} />

);



// --- 模拟数据 ---

const NOTES_DATA = [

  { id: 1, date: '2026-03-22', title: 'CRT 显示器的复兴：反过度设计的反击', tags: ['DESIGN', 'RETRO'], content: '在充满毛玻璃和高斯模糊的 Web3.0 时代，回归纯粹的实色、清晰的边界和终端命令行界面，反而带来了一种极客特有的宁静感...' },

  { id: 2, date: '2026-03-18', title: 'React 性能优化：如何避免不必要的渲染', tags: ['TECH', 'REACT'], content: '使用 React.memo 和 useMemo 并不总是带来正向收益。我们需要更深入地理解 VDOM 的 Diff 算法，以及状态下放的重要性。' },

  { id: 3, date: '2026-03-10', title: '赛博朋克美学与极简主义的结合', tags: ['AESTHETICS'], content: '剥离掉霓虹灯的繁杂，只保留单色荧光、终端字体和深邃的黑，这就是新一代的数字废土极简风格。没有阴影，只有发光体与虚空。' },

  { id: 4, date: '2026-02-28', title: 'Vim 快捷键肌肉记忆指南', tags: ['TOOLING', 'VIM'], content: 'HJKL 不仅仅是方向键，它们是大脑与代码之间建立的直接神经链路。一旦习惯，鼠标就成了效率的累赘。' },

];



// --- 组件 ---

const Navbar = ({ currentTab, setCurrentTab }) => {

  const tabs = ['HOME', 'NOTES', 'SYSTEM', 'ABOUT'];

  

  return (

    <nav className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-[#00afff] pb-4 mb-8 glow-box p-4">

      <div className="text-2xl font-bold font-['VT323'] tracking-widest mb-4 md:mb-0 text-[#00afff]">

        root@vereis-clone:~# <span className="cursor-blink text-[#ff0050]">_</span>

      </div>

      <div className="flex flex-wrap gap-4 text-sm md:text-base">

        {tabs.map(tab => (

          <button

            key={tab}

            onClick={() => setCurrentTab(tab)}

            className={`px-3 py-1 uppercase transition-colors duration-0 ${

              currentTab === tab 

                ? 'bg-[#ff0050] text-[#0e0e0e] font-bold' 

                : 'bg-transparent text-[#00afff] hover:bg-[#1e3f5a] hover:text-[#00afff] border border-transparent hover:border-[#00afff]'

            }`}

          >

            [{tab}]

          </button>

        ))}

      </div>

    </nav>

  );

};



const NoteCard = ({ note }) => (

  <article className="border border-[#00afff] p-4 group hover:bg-[#ff0050] hover:text-[#0e0e0e] transition-none cursor-pointer flex flex-col h-full bg-[#0e0e0e] relative">

    {/* 边角装饰 */}

    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#d0d0d0] opacity-50 group-hover:border-[#0e0e0e]"></div>

    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#d0d0d0] opacity-50 group-hover:border-[#0e0e0e]"></div>

    

    <div className="flex justify-between items-center mb-3 text-xs border-b border-[#1e3f5a] group-hover:border-[#0e0e0e] pb-2">

      <span className="opacity-80">SYS.DATE: {note.date}</span>

      <div className="flex gap-2">

        {note.tags.map(tag => (

          <span key={tag} className="px-1 border border-[#f1fa8c] text-[#f1fa8c] group-hover:border-[#0e0e0e] group-hover:bg-[#0e0e0e] group-hover:text-[#ff0050]">

            #{tag}

          </span>

        ))}

      </div>

    </div>

    <h2 className="text-xl font-bold mb-3 glow-text group-hover:text-shadow-none leading-tight group-hover:text-[#0e0e0e] group-hover:animate-none">

      {note.title}

    </h2>

    <p className="text-sm opacity-80 mb-6 flex-grow">

      {note.content}

    </p>

    <div className="mt-auto text-sm font-bold flex items-center gap-2">

      <span className="group-hover:animate-pulse">{'>'} READ_FILE</span>

    </div>

  </article>

);



const HomeView = () => (

  <div className="space-y-8">

    <section className="border border-[#00afff] p-6 bg-[#0e0e0e]">

      <h1 className="text-3xl font-bold mb-4 glow-text font-['VT323'] uppercase tracking-widest !text-[#ff0050]">

        {'// SYSTEM_INITIALIZATION_COMPLETE'}

      </h1>

      <div className="space-y-2 text-sm md:text-base opacity-90 text-[#d0d0d0]">

        <p className="text-[#f1fa8c]">{'>'} LOADING KERNEL... OK</p>

        <p className="text-[#f1fa8c]">{'>'} MOUNTING FILE SYSTEMS... OK</p>

        <p className="text-[#f1fa8c]">{'>'} ESTABLISHING SECURE CONNECTION... OK</p>

        <br />

        <p>欢迎来到我的个人网络终端。这里没有多余的视觉噪音，没有毛玻璃，没有圆角。</p>

        <p>只有纯粹的信息，代码，以及对复古计算美学的致敬。</p>

      </div>

    </section>



    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="border border-[#00afff] p-4 bg-[#0e0e0e]">

        <h3 className="border-b border-[#00afff] pb-2 mb-4 font-bold text-[#f1fa8c]">LATEST_LOGS</h3>

        <ul className="space-y-2 text-sm">

          {NOTES_DATA.slice(0, 3).map(note => (

            <li key={note.id} className="flex justify-between hover:bg-[#1e3f5a] hover:text-[#00afff] p-1 cursor-pointer transition-colors">

              <span className="truncate pr-4">{'>'} {note.title}</span>

              <span className="opacity-70 flex-shrink-0">{note.date}</span>

            </li>

          ))}

        </ul>

      </div>

      <div className="border border-[#00afff] p-4 bg-[#0e0e0e] flex flex-col items-center justify-center text-center text-[#ff0050]">

        <pre className="text-xs md:text-sm leading-none mb-4 opacity-80">

          {`

  ___ 

 / _ \\ 

| | | |

| |_| |

 \\___/ 

          `}

        </pre>

        <p>USER: GUEST</p>

        <p>STATUS: ONLINE</p>

      </div>

    </div>

  </div>

);



const NotesView = () => (

  <div>

    <div className="flex justify-between items-end mb-6 border-b border-[#1e3f5a] pb-2">

      <h1 className="text-2xl font-bold glow-text">DIRECTORY: /NOTES</h1>

      <span className="text-sm opacity-80">TOTAL_FILES: {NOTES_DATA.length}</span>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {NOTES_DATA.map(note => (

        <NoteCard key={note.id} note={note} />

      ))}

    </div>

  </div>

);



// --- 主应用 ---

export default function App() {

  const [currentTab, setCurrentTab] = useState('HOME');



  return (

    <div className="min-h-screen crt-screen relative text-[#d0d0d0] selection:bg-[#ff0050] selection:text-[#0e0e0e]">

      <CustomStyles />

      <div className="scanlines"></div>

      <div className="vignette"></div>



      {/* 主内容区域 */}

      <div className="max-w-6xl mx-auto p-4 md:p-8 relative z-10 min-h-screen flex flex-col">

        <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

        

        <main className="flex-grow">

          {currentTab === 'HOME' && <HomeView />}

          {currentTab === 'NOTES' && <NotesView />}

          {(currentTab === 'SYSTEM' || currentTab === 'ABOUT') && (

            <div className="border border-[#ff0050] p-8 text-center bg-[#0e0e0e]">

              <p className="animate-pulse text-[#ff0050] text-xl" style={{ textShadow: '0 0 5px rgba(255,0,80,0.6)' }}>404 - MODULE_NOT_FOUND</p>

              <p className="mt-4 opacity-70">This sector is currently under construction.</p>

            </div>

          )}

        </main>



        <footer className="mt-12 border-t-2 border-[#00afff] pt-4 text-xs md:text-sm flex flex-col md:flex-row justify-between opacity-80 glow-box p-2 text-[#f1fa8c]">

          <span>{'>'} SYSTEM STATUS: OPTIMAL</span>

          <span>{'>'} MEMORY: 640K OUGHT TO BE ENOUGH FOR ANYBODY</span>

          <span>(C) 2026 CRT_DESIGN_LABS</span>

        </footer>

      </div>

    </div>

  );

}