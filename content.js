setTimeout(() => {
    const trackName = window.location.pathname.split('/').pop();
    chrome.runtime.sendMessage({ action: "openSpotify", trackName });
}, 500);