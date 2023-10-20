const List = [
    "*://*.googlesyndication.com/*",
    "*://*.carbonads.net/*",
    "*://*.googletagservices.com/*",
    "*://*.cdn.zedo.com/*",
    "*://*.zedo.com/*",
    "*://*.cdn.doubleclick.net/*",
    "*://*.adbrite.com/*",
    "*://*.googleadservices.com/*",
    "*://*.googleadservices.com/*",
    "*://*.adbureau.net/*",
    "*://*.cdn.carbonads.com/*",
    "*://*.google-analytics.com/*",
    "*://*.cdn.carbonads.net/*",
    "*://*.cdn.googletagservices.com/*",
    "*://*.cdn.googleadservices.com/*",
    "*://*.doubleclick.net/*",
];
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true}
    },
    {urls: List},
    ["blocking"]
)