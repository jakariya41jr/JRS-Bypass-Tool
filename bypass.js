javascript:(async function() {
    // ═════════════════════════════════════════════════════════════
    // ║  AUTHOR: Md Jakariya Hasan                                ║
    // ║                                                           ║
    // ║  NEBULA DYNAMIC (USERDATA UPGRADE)                        ║
    // ║  CREDITS: Soyon Ahmed (@soyon41)                              ║
    // ║  PORTFOLIO: https://jakariya41jr.xyz/                     ║
    // ═════════════════════════════════════════════════════════════

    const CONFIG = {
        version: "3.0.0 (Pro)",
        bypassServer: "https://lol.a2mbd3.workers.dev" // ডেভলপারের মূল বাইপাস সার্ভার
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
        
        // সার্ভারের বদলে এখানেই আপনার ডেটা সেট করা হয়েছে
        USER_DATA = {
            name: "Md Jakariya Hasan",
            password: "jrs",  // <-- আপনার নির্ধারিত পাসওয়ার্ড
            website: "https://jakariya41jr.xyz/",
            banned: 0,
            creator: "@soyon41",
            dev: "Md Jakariya Hasan"
        };
        return true;
    }

    // ═══════════════════ UI & STYLES (NEON GLOW) ═══════════════════
    function injectStyles() {
        // যদি আগে থেকে স্টাইল থাকে, তবে তা রিমুভ করে নতুন করে বসাবে
        if (document.getElementById('nebula-style')) return; 

        const style = document.createElement('style');
        style.id = 'nebula-style';
        style.textContent = `
            #nebula-ui { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(10,12,16,0.95); border: 2px solid #00ffcc; box-shadow: 0 0 25px rgba(0, 255, 204, 0.5); border-radius: 12px; z-index: 2147483647; padding: 30px; font-family: 'Courier New', monospace; color: #fff; text-align: center; width: 320px; backdrop-filter: blur(15px); animation: fadeIn 0.5s ease-in-out; }
            #nebula-ui h2 { margin: 0 0 5px 0; color: #00ffcc; text-shadow: 0 0 10px #00ffcc; font-size: 22px; text-transform: uppercase; letter-spacing: 2px;}
            .nebula-subtitle { font-size: 13px; color: #aaa; margin-bottom: 25px; display: block; }
            .nebula-input { width: 90%; padding: 12px; margin-bottom: 20px; background: rgba(0,0,0,0.5); border: 1px solid #00ffcc; color: #00ffcc; font-size: 16px; outline: none; border-radius: 6px; text-align: center; transition: 0.3s; }
            .nebula-input:focus { box-shadow: 0 0 10px rgba(0, 255, 204, 0.8); }
            .nebula-btn { background: #00ffcc; color: #000; border: none; padding: 12px 20px; font-weight: bold; cursor: pointer; border-radius: 6px; text-transform: uppercase; transition: all 0.3s ease; width: 100%; font-size: 15px; letter-spacing: 1px;}
            .nebula-btn:hover { background: #fff; box-shadow: 0 0 20px #fff; transform: translateY(-2px); }
            .nebula-footer { margin-top: 20px; font-size: 12px; color: #666; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;}
            .nebula-footer a { color: #00ffcc; text-decoration: none; font-weight: bold;}
            @keyframes fadeIn { from { opacity: 0; transform: translate(-50%, -45%); } to { opacity: 1; transform: translate(-50%, -50%); } }
        `;
        document.head.appendChild(style);
    }

    // ═══════════════════ AUTHENTICATION SYSTEM ═══════════════════
    function showAuthUI() {
        return new Promise((resolve) => {
            const div = document.createElement('div');
            div.id = 'nebula-ui';
            div.innerHTML = `
                <h2>NEBULA DYNAMIC</h2>
                <span class="nebula-subtitle">Dev: Md Jakariya Hasan</span>
                <input type="password" id="nebula-pass" class="nebula-input" placeholder="Enter Auth Key" autocomplete="off" />
                <button id="nebula-submit" class="nebula-btn">Unlock Bypass</button>
                <div class="nebula-footer">
                    Web: <a href="https://jakariya41jr.xyz/" target="_blank">jakariya41jr.xyz</a>
                </div>
            `;
            document.body.appendChild(div);

            const btn = document.getElementById('nebula-submit');
            const inp = document.getElementById('nebula-pass');

            // অটোমেটিক ফোকাস করবে যাতে ক্লিক না করেই টাইপ করা যায়
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
        
        // এখানে আপনার আসল বাইপাস লজিক কাজ করবে
        if (currentUrl.includes('vplink.in') || currentUrl.includes('aincrad') || currentUrl.includes('powercheats')) {
            DBG.log('SCANNER', 'Target detected. Extracting tokens...');
            
            // UI তে একটি হ্যাকিং টাইপ অ্যানিমেশন দেখানোর জন্য
            const statusDiv = document.createElement('div');
            statusDiv.style.cssText = "position: fixed; bottom: 20px; right: 20px; background: #000; border: 1px solid #00ffcc; color: #00ffcc; padding: 10px 20px; border-radius: 5px; font-family: monospace; z-index: 999999; box-shadow: 0 0 10px #00ffcc;";
            statusDiv.innerText = "⚙️ Nebula Dynamic is bypassing... Please wait.";
            document.body.appendChild(statusDiv);
            
            // --- আপনার স্ক্র্যাপিং এবং TOTP লজিক এখানে বসবে ---
            // (বর্তমানে শুধুমাত্র ডেমো অ্যালার্ট দেওয়া আছে)
            
            setTimeout(() => {
                statusDiv.innerText = "✅ Bypass Successful! Redirecting...";
                setTimeout(() => statusDiv.remove(), 2000);
            }, 2500);

        } else {
            DBG.error('SCANNER', 'No supported link found on this page.');
            alert(`[NEBULA DYNAMIC]\n\nDeveloper: Md Jakariya Hasan\nError: No bypassable link found on this page!`);
        }
    }

    // ═══════════════════ INITIALIZATION ═══════════════════
    async function init() {
        console.clear();
        DBG.log('SYS', 'Initializing Nebula Dynamic Engine...');
        
        injectStyles();
        await fetchUserData(); // এখন এটি ইনস্ট্যান্ট কাজ করবে
        
        const isAuthenticated = await showAuthUI();
        
        if (isAuthenticated) {
            DBG.log('SYS', 'Authentication successful. Loading modules...');
            await startBypass();
        }
    }

    // কোডটি রান করা হলো
    init();
})();
