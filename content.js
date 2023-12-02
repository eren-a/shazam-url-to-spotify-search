setTimeout(() => {
    const trackName = window.location.pathname.split('/').pop();
    chrome.runtime.sendMessage({ action: "openSpotify", trackName });
}, 1000);

// 1000ms: url might be incorrect, due to redirection
// longer timeout prevents that