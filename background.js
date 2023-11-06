chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "openSpotify") {
        const trackName = encodeURIComponent(request.trackName);
        const spotifyDeepLink = `spotify:search:${trackName}`;
        chrome.tabs.create({ url: spotifyDeepLink }, function (spotifyTab) {
            chrome.tabs.remove(sender.tab.id);
        });
    }
});
