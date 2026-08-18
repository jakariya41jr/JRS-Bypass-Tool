javascript:(async function() {
    // ═════════════════════════════════════════════════════════════
    // ║  AUTHOR: Md Jakariya Hasan                                ║
    // ║                                                           ║
    // ║  JRS BYPASS TOOL                                          ║
    // ║  CREDITS: Soyon Ahmed (@soyon41)                              ║
    // ║  PORTFOLIO: https://jakariya41jr.xyz/                     ║
    // ═════════════════════════════════════════════════════════════

    const CONFIG = {
        version: "3.0.2 (Pro)",
        bypassServer: "https://lol.a2mbd3.workers.dev"
    };

    let USER_DATA = null;

    const DBG = {
        log: (tag, msg) => console.log(`[%c${tag}%c] ${msg}`, 'color: #00ffcc; font-weight: bold;', 'color: inherit;'),
        error: (tag, msg) => console.error(`[%c${tag}%c] ${msg}`, 'color: #ff0000; font-weight: bold;', 'color: inherit;')
    };

    async function fetchUserData() {
        USER_DATA = {
            name: "Md Jakariya Hasan",
            password: "jrs41",
            website: "https://jakariya41jr.xyz/"
        };
        return true;
    }

    function injectStyles() {
        if (document.getElementById('jrs-style')) return; 

        const style = document.createElement('style');
        style.id = 'jrs-style';
        style.textContent = `
            #jrs-ui { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(10,12,16,0.95); border: 2px solid #00ffcc; box-shadow: 0 0 25px rgba(0, 255, 204, 0.5); border-radius: 12px; z-index: 2147483647; padding: 30px; font-family: 'Courier New', monospace; color: #fff; text-align: center; width: 320px; backdrop-filter: blur(15px); animation: fadeIn 0.5s ease-in-out; }
            #jrs-ui h2 { margin: 0 0 5px 0; color: #00ffcc; text-shadow: 0 0 10px #00ffcc; font-size: 26px; text-transform: uppercase; letter-spacing: 2px;}
            .jrs-subtitle { font-size: 13px; color: #aaa; margin-bottom: 25px; display: block; }
            .jrs-input { width: 90%; padding: 12px; margin-bottom: 20px; background: rgba(0,0,0,0.5); border: 1px solid #00ffcc; color: #00ffcc; font-size: 16px; outline: none; border-radius: 6px; text-align: center; transition: 0.3s; }
            .jrs-input:focus { box-shadow: 0 0 10px rgba(0, 255, 204, 0.8); }
            .jrs-btn { background: #00ffcc; color: #000; border: none; padding: 12px 20px; font-weight: bold; cursor: pointer; border-radius: 6px; text-transform: uppercase; transition: all 0.3s ease; width: 100%; font-size: 15px; letter-spacing: 1px;}
            .jrs-btn:hover { background: #fff; box-shadow: 0 0 20px #fff; transform: translateY(-2px); }
            .jrs-footer { margin-top: 20px; font-size: 12px; color: #666; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;}
            .jrs-footer a { color: #00ffcc; text-decoration: none; font-weight: bold;}
            @keyframes fadeIn { from { opacity: 0; transform: translate(-50%, -45%); } to { opacity: 1; transform: translate(-50%, -50%); } }
        `;
        document.head.appendChild(style);
    }

    function showAuthUI() {
        return new Promise((resolve) => {
            const div = document.createElement('div');
            div.id = 'jrs-ui';
            div.innerHTML = `
                <h2>JRS</h2>
                <span class="jrs-subtitle">Dev: Md Jakariya Hasan</span>
                <input type="password" id="jrs-pass" class="jrs-input" placeholder="Enter Auth Key" autocomplete="off" />
                <button id="jrs-submit" class="jrs-btn">Unlock Bypass</button>
                <div class="jrs-footer">
                    Web: <a href="https://jakariya41jr.xyz/" target="_blank">jakariya41jr.xyz</a>
                </div>
            `;
            document.body.appendChild(div);

            const btn = document.getElementById('jrs-submit');
            const inp = document.getElementById('jrs-pass');
            inp.focus();

            const checkAuth = () => {
                if (inp.value.trim() === USER_DATA.password) {
                    div.innerHTML = `
                        <h2 style="color:#00ff55; text-shadow: 0 0 10px #00ff55;">ACCESS GRANTED</h2>
                        <p style="color:#aaa; font-size: 14px;">Welcome, ${USER_DATA.name}</p>
                    `;
                    setTimeout(() => {
                        div.style.opacity = '0';
                        setTimeout(() => { div.remove(); resolve(true); }, 500);
                    }, 1000);
                } else {
                    inp.style.border = "1px solid #ff0044";
                    inp.value = "";
                    inp.placeholder = "Incorrect Key!";
                }
            };

            btn.addEventListener('click', checkAuth);
            inp.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAuth(); });
        });
    }

    async function startBypass() {
        const currentUrl = window.location.href;
        
        // tarviral.com এবং অন্যান্য ডোমেইন এখানে যুক্ত করা হলো
        if (currentUrl.includes('tarviral.com') || currentUrl.includes('rodaemotor.com') || currentUrl.includes('aincradmods.com') || currentUrl.includes('vplink.in')) {
            DBG.log('SCANNER', 'Target detected. Running Auto-Clicker...');
            
            const statusDiv = document.createElement('div');
            statusDiv.style.cssText = "position: fixed; bottom: 20px; right: 20px; background: #000; border: 1px solid #00ffcc; color: #00ffcc; padding: 10px 20px; border-radius: 5px; font-family: monospace; z-index: 999999; box-shadow: 0 0 10px #00ffcc;";
            statusDiv.innerText = "⚙️ JRS Auto-Clicker Active";
            document.body.appendChild(statusDiv);

            // অটো-ক্লিক লজিক যা 'CONTINUAR' বাটন খুঁজে ক্লিক করবে
            setInterval(() => {
                const elements = Array.from(document.querySelectorAll('button, a, div, span'));
                const targetBtn = elements.find(el => el.innerText && (el.innerText.trim().toUpperCase() === 'CONTINUAR' || el.innerText.includes('Continue')));
                
                if (targetBtn) {
                    targetBtn.click();
                    DBG.log('ACTION', 'Clicked button automatically!');
                }
            }, 1200);

        } else {
            DBG.error('SCANNER', 'No supported link found on this page.');
            alert(`[JRS]\n\nDeveloper: Md Jakariya Hasan\nError: No bypassable link found on this page!`);
        }
    }

    async function init() {
        console.clear();
        injectStyles();
        await fetchUserData();
        if (await showAuthUI()) {
            await startBypass();
        }
    }

    init();
})();
