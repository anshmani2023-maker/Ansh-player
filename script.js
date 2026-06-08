let songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3"
];
let songNames = [
    "Kesariya",
    "Tum Hi Ho",
    "Galliyan returns"
];

let currentSong = 0;

let song = document.getElementById("song");
let progress = document.getElementById("progress");
let title = document.getElementById("songTitle");

song.src = songs[currentSong];

function playSong(){
    song.play();
}

function pauseSong(){
    song.pause();
}

function nextSong(){

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    song.src = songs[currentSong];
    title.innerText = songNames[currentSong];
    song.play();
}

function prevSong(){

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    song.src = songs[currentSong];
    title.innerText = songNames[currentSong];
    song.play();
}

song.addEventListener("timeupdate", () => {

    progress.max = song.duration;

    progress.value = song.currentTime;

});

progress.addEventListener("input", () => {

    song.currentTime = progress.value;

});