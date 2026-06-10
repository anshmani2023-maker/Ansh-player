let songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3"
];

let songNames = [
    "Kesariya",
    "Tum Hi Ho",
    "Galliyan Returns"
];

let currentSong = 0;

let song = document.getElementById("song");
let progress = document.getElementById("progress");
let title = document.getElementById("songTitle");
let currentTimeText = document.getElementById("currentTime");
let durationText = document.getElementById("duration");
let volume = document.getElementById("volume");
let bottomTitle = document.getElementById("bottomTitle");

song.src = songs[currentSong];
title.innerText = songNames[currentSong];
bottomTitle.innerText = songNames[currentSong];

function playSong() {
    song.play();
}

function pauseSong() {
    song.pause();
}

function updateSong() {
    song.src = songs[currentSong];
    title.innerText = songNames[currentSong];
    bottomTitle.innerText = songNames[currentSong];
    song.play();
}

function nextSong() {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    updateSong();
}

function prevSong() {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    updateSong();
}

function playSpecificSong(index) {
    currentSong = index;
    updateSong();
}

song.addEventListener("ended", () => {
    nextSong();
});

song.addEventListener("timeupdate", () => {

    progress.max = song.duration || 0;
    progress.value = song.currentTime;

    let currentMin = Math.floor(song.currentTime / 60);
    let currentSec = Math.floor(song.currentTime % 60);

    let totalMin = Math.floor((song.duration || 0) / 60);
    let totalSec = Math.floor((song.duration || 0) % 60);

    if (currentSec < 10) currentSec = "0" + currentSec;
    if (totalSec < 10) totalSec = "0" + totalSec;

    currentTimeText.innerText = currentMin + ":" + currentSec;
    durationText.innerText = totalMin + ":" + totalSec;
});

progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});

volume.addEventListener("input", () => {
    song.volume = volume.value / 100;
});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then(() => {
        console.log("Service Worker Registered");
    });
}