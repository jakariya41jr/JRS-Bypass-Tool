  // ═══════════════════ POWERCHEATS EXPLOIT PANEL ═══════════════════
  // Credit: Md. Jakaria Hasan
  function renderExploitPanelForPowerCheats(apiType) {
    // Credit: Md. Jakaria Hasan
    DBG.log('UI', 'Rendering POWERCHEATS EXPLOIT panel, apiType=' + apiType);
    document.getElementById("nebula-exploit")?.remove();
    
    fetchCompleted = false;
    fetchResult = null;
    progressCompleted = false;
    logQueue = [];
    fillerLogsScheduled = false;
    
    const ov = document.createElement("div");
    ov.id = "nebula-exploit";
    ov.className = "nb-overlay";

    const { wrapper } = createWrapper(`
      <button id="exploit-music-btn" class="nb-music-btn">♪</button>
      <div class="nb-exploit-header">
        <span class="nb-live-dot" style="background:#ff4757;box-shadow:0 0 6px #ff4757;"></span>
        <span style="width:7px;height:7px;background:#ffa500;border-radius:50%;box-shadow:0 0 6px #ffa500;flex-shrink:0;"></span>
        <span style="width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;"></span>
        <span class="nb-exploit-title">${APP_NAME}://${USER_DATA.name.replace(/\s+/g,'_').toUpperCase()}</span>
        <span id="nb-live-status" style="color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;">● LIVE</span>
      </div>
      
      <div id="log-output" class="nb-log-area"></div>
      
      <div class="nb-progress-label">
        <span>PROGRESS</span>
        <span id="nb-progress-pct" style="font-weight:700;">0%</span>
      </div>
      <div class="nb-progress-bar-bg">
        <div id="nb-progress-exploit" class="nb-progress-bar-fill vipteam-success"></div>
      </div>
      
      <div class="nb-footer"><a href="#" target="_blank">© Md. Jakaria Hasan</a> | ${APP_FULL_NAME} | 📳 Shake to change track 🎵</div>
    `);
    ov.appendChild(wrapper);
    document.body.appendChild(ov);

    setupMusicToggle("exploit-music-btn");
    startLogQueue();

    queueLog('⚡', `${APP_FULL_NAME} — ${selectedTargetName}`, '#ff4757', 'log-highlight');
    queueLog('◆', `PLATFORM: ${navigator.platform.toUpperCase()}`, '#718096');
    queueLog('', '━'.repeat(35), '#cbd5e1', 'log-separator');
    queueLog('⚙', 'SYSTEM CONFIGURATION', '#ffa500', 'log-highlight');
    queueLog('●', `STATUS: ACTIVE`, '#2ecc71', 'log-success');
    queueLog('●', `MODULE: POWERCHEATS`, '#ff4757');
    queueLog('●', `API ENDPOINT: ${CONFIG.apiBaseUrl}`, '#4a5568');
    queueLog('●', `API KEY: ${CONFIG.apiKey}`, '#4a5568');
    queueLog('', '━'.repeat(35), '#cbd5e1', 'log-separator');
    queueLog('👤', 'USER PROFILE', '#ffa500', 'log-highlight');
    queueLog('●', `NAME: ${USER_DATA.name.toUpperCase()}`, '#4a5568');
    queueLog('●', `USER ID: ${USER_DATA.id}`, '#4a5568');
    queueLog('●', `AUTH REQUIRED: ${needPassword() ? 'YES' : 'NO'}`, needPassword() ? '#ffa500' : '#2ecc71');
    queueLog('', '━'.repeat(35), '#cbd5e1', 'log-separator');
    queueLog('📡', 'INITIALIZING POWERCHEATS CONNECTION...', '#ff4757', 'log-highlight');
    queueLog('●', `TARGET TYPE: ${apiType}`, '#4a5568');

    fetchStartTime = Date.now();
    actualProgressTime = CONFIG.minProgressTime;
    
    startProgressBar();
    performLiveFetch(apiType);
  }

  // ═══════════════════ UNIVERSAL VPLINK EXPLOIT PANEL ═══════════════════
  // Credit: Md. Jakaria Hasan
  function renderUniversalVplinkPanel(apiType) {
    // Credit: Md. Jakaria Hasan
    DBG.log('UI', 'Rendering UNIVERSAL VPLINK panel, apiType=' + apiType);
    document.getElementById("nebula-exploit")?.remove();
    
    fetchCompleted = false;
    fetchResult = null;
    progressCompleted = false;
    logQueue = [];
    fillerLogsScheduled = false;
    
    const ov = document.createElement("div");
    ov.id = "nebula-exploit";
    ov.className = "nb-overlay";

    const { wrapper } = createWrapper(`
      <button id="exploit-music-btn" class="nb-music-btn">♪</button>
      <div class="nb-exploit-header">
        <span class="nb-live-dot" style="background:#00b4d8;box-shadow:0 0 6px #00b4d8;"></span>
        <span style="width:7px;height:7px;background:#ffa500;border-radius:50%;box-shadow:0 0 6px #ffa500;flex-shrink:0;"></span>
        <span style="width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;"></span>
        <span class="nb-exploit-title">${APP_NAME}://${USER_DATA.name.replace(/\s+/g,'_').toUpperCase()}</span>
        <span id="nb-live-status" style="color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;">● LIVE</span>
      </div>
      
      <div id="log-output" class="nb-log-area"></div>
      
      <div class="nb-progress-label">
        <span>PROGRESS</span>
        <span id="nb-progress-pct" style="font-weight:700;">0%</span>
      </div>
      <div class="nb-progress-bar-bg">
        <div id="nb-progress-exploit" class="nb-progress-bar-fill vipteam-success"></div>
      </div>
      
      <div class="nb-footer"><a href="#" target="_blank">© Md. Jakaria Hasan</a> | ${APP_FULL_NAME} | 📳 Shake to change track 🎵</div>
    `);
    ov.appendChild(wrapper);
    document.body.appendChild(ov);

    setupMusicToggle("exploit-music-btn");
    startLogQueue();

    queueLog('⚡', `${APP_FULL_NAME} — ${selectedTargetName}`, '#00b4d8', 'log-highlight');
    queueLog('◆', `PLATFORM: ${navigator.platform.toUpperCase()}`, '#718096');
    queueLog('', '━'.repeat(35), '#cbd5e1', 'log-separator');
    queueLog('⚙', 'SYSTEM CONFIGURATION', '#ffa500', 'log-highlight');
    queueLog('●', `STATUS: ACTIVE`, '#2ecc71', 'log-success');
    queueLog('●', `MODULE: UNIVERSAL VPLINK`, '#00b4d8');
    queueLog('●', `API ENDPOINT: ${CONFIG.apiBaseUrl}`, '#4a5568');
    queueLog('●', `API KEY: ${CONFIG.apiKey}`, '#4a5568');
    queueLog('', '━'.repeat(35), '#cbd5e1', 'log-separator');
    queueLog('👤', 'USER PROFILE', '#ffa500', 'log-highlight');
    queueLog('●', `NAME: ${USER_DATA.name.toUpperCase()}`, '#4a5568');
    queueLog('●', `USER ID: ${USER_DATA.id}`, '#4a5568');
    queueLog('●', `AUTH REQUIRED: ${needPassword() ? 'YES' : 'NO'}`, needPassword() ? '#ffa500' : '#2ecc71');
    queueLog('', '━'.repeat(35), '#cbd5e1', 'log-separator');
    queueLog('📡', 'INITIALIZING UNIVERSAL VPLINK CONNECTION...', '#00b4d8', 'log-highlight');
    queueLog('●', `TARGET TYPE: ${apiType}`, '#4a5568');

    fetchStartTime = Date.now();
    actualProgressTime = CONFIG.minProgressTime;
    
    startProgressBar();
    performLiveFetch(apiType);
  }

  // ═══════════════════ MAIN INITIALIZATION ═══════════════════
  // Credit: Md. Jakaria Hasan
  async function initNebula() {
    DBG.log('INIT', 'Starting application initialization...');
    
    await fetchConfig();
    await fetchMusicList();
    
    await fetchUserData();
    
    if (CONFIG.status !== 1 && CONFIG.status !== "1") {
      showMaintenance();
      return;
    }
    
    if (isBannedUser()) {
      showBanPanel();
      return;
    }
    
    if (isSuspendedUser()) {
      showSuspendedPanel();
      return;
    }
    
    renderInitPanel();
  }

  // Bootstrap Application
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNebula);
  } else {
    initNebula();
  }

})();
