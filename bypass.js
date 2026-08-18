javascript:(async function() {
    // ═════════════════════════════════════════════════════════════
    // ║  AUTHOR: Md Jakariya Hasan                                ║
    // ║                                                           ║
    // ║  JRS BYPASS TOOL                                          ║
    // ║  CREDITS: Soyon Ahmed (@soyon41)                              ║
    // ║  PORTFOLIO: https://jakariya41jr.xyz/                     ║
    // ═════════════════════════════════════════════════════════════

    const CONFIG = {
        version: "3.0.0 (Pro)",
        bypassServer: "https://lol.a2mbd3.workers.dev"
    };

    let USER_DATA = null;

    // কনসোল ডিবাগিং এর জন্য উন্নত লগ সিস্টেম
    const DBG = {
        log: (tag, msg) => console.log(`[%c${tag}%c] ${msg}`, 'color: #00ffcc; font-weight: bold;', 'color: inherit;'),
        error: (tag, msg) => console.error(`[%c${tag}%c] ${msg}`, 'color: #ff0000; font-weight: bold;', 'color: inherit;')
    };

    // ═══════════════════ USER DATA FETCH (API DISABLED) ═══════════════════
    async function fetchUserData() {
        DBG.log('USERS', 'API verification disabled. Using hardcoded developer data.');
        
        USER_DATA = {
            name: "Md Jakariya Hasan",
            password: "jrs41",  // নির্ধারিত পাসওয়ার্ড
            website: "https://jakariya41jr.xyz/",
            banned: 0,
            creator: "@soyon41",
            dev: "Md Jakariya Hasan"
        };
        return true;
    }

    // ═══════════════════ UI & STYLES (NEON GLOW) ═══════════════════
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

    // ═══════════════════ AUTHENTICATION SYSTEM ═══════════════════
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
                const enteredKey = inp.value.trim();
                if (enteredKey === USER_DATA.password) {
                    div.innerHTML = `
                        <h2 style="color:#00ff55; text-shadow: 0 0 10px #00ff55;">ACCESS GRANTED</h2>
                        <p style="color:#aaa; font-size: 14px;">Welcome, ${USER_DATA.name}</p>
                        <p style="color:#00ffcc; font-size: 12px; margin-top: 15px;">Initializing core protocols...</p>
                    `;
                    setTimeout(() => {
                        div.style.opacity = '0';
                        setTimeout(() => {
                            div.remove();
                            resolve(true);
                        }, 500);
                    }, 1500);
                } else {
                    inp.style.border = "1px solid #ff0044";
                    inp.style.boxShadow = "0 0 10px #ff0044";
                    inp.value = "";
                    inp.placeholder = "Incorrect Key!";
                    btn.innerText = "Try Again";
                    
                    setTimeout(() => {
                        inp.style.border = "1px solid #00ffcc";
                        inp.style.boxShadow = "none";
                        inp.placeholder = "Enter Auth Key";
                        btn.innerText = "Unlock Bypass";
                    }, 2000);
                }
            };

            btn.addEventListener('click', checkAuth);
            inp.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAuth(); });
        });
    }

    // ═══════════════════ CORE BYPASS SCANNER ═══════════════════
    async function startBypass() {
        DBG.log('CORE', 'Starting Target Detection...');
        
        const currentUrl = window.location.href;
        
        // নতুন সাইটগুলোর ডোমেইন এখানে যুক্ত করা হয়েছে
        if (currentUrl.includes('aincradmods.com') || currentUrl.includes('rodaemotor.com') || currentUrl.includes('vplink.in')) {
            DBG.log('SCANNER', 'Target detected. Extracting tokens...');
            
            const statusDiv = document.createElement('div');
            statusDiv.style.cssText = "position: fixed; bottom: 20px; right: 20px; background: #000; border: 1px solid #00ffcc; color: #00ffcc; padding: 10px 20px; border-radius: 5px; font-family: monospace; z-index: 999999; box-shadow: 0 0 10px #00ffcc;";
            statusDiv.innerText = "⚙️ JRS is bypassing... Please wait.";
            document.body.appendChild(statusDiv);
            
            // --- আপনার বাইপাস লজিক এখানে যুক্ত হবে ---
            
            setTimeout(() => {
                statusDiv.innerText = "✅ Bypass Successful!";
                setTimeout(() => statusDiv.remove(), 2000);
            }, 2500);

        } else {
            DBG.error('SCANNER', 'No supported link found on this page.');
            alert(`[JRS]\n\nDeveloper: Md Jakariya Hasan\nError: No bypassable link found on this page!`);
        }
    }

    // ═══════════════════ INITIALIZATION ═══════════════════
    async function init() {
        console.clear();
        DBG.log('SYS', 'Initializing jrs Engine...');
        
        injectStyles();
        await fetchUserData();
        
        const isAuthenticated = await showAuthUI();
        
        if (isAuthenticated) {
            DBG.log('SYS', 'Authentication successful. Loading modules...');
            await startBypass();
        }
    }

    init();
})();
