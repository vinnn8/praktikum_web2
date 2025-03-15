const videoList = [
    "lFJA9muTUDM",
    "2kZVEUGLgy4",
    "flHZVieWtc8",
    "xduquXZuxo"
];

const backgroundList = [
    "background1.jpg",
    "background2.jpg",
    "background3.jpg",
    "background4.jpg",
    "background5.jpg"
];

function changeVideo() {
    let randomVideo = videoList[Math.floor(Math.random() * videoList.length)];
    let randomBackground = backgroundList[Math.floor(Math.random() * backgroundList.length)];

    document.getElementById("youtubeVideo").src = `https://www.youtube.com/embed/${randomVideo}`;
    document.body.style.background = `url('${randomBackground}') no-repeat center center/cover`;
}
