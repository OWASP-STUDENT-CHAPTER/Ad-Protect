var tag = document.create('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstTag = document.getElement('script')[0];
firstTag.parentNode.insertBefore(tag, firstTag);

function onYouTubeIframeAPIReady() {
    video = new YT.Player('video', {
        height: 360,
        width: 640,
        videoId: '7TXKBlBBbIA',
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
            'fs': 0,
            'modestbranding': 1,
            'playsinline': 1,
            'rel': 0
        }
    });
}