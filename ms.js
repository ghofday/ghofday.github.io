const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.getElementById('prevv');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('nextt');  


const songs = [
  {
    path: 'i.mp3',
    displayName: 'I',
    artist: 'VINXEN',
  },
  {
    path: 'bike.mp3',
    displayName: 'If I Could Ride A Bike',
    artist: 'chevy , park bird',
  },
  {
    path: 'frad.mp3',
    displayName: 'First Date',
    artist: 'frad',
  },
  {
    path: 'adore.mp3',
    displayName: 'Adore You',
    artist: 'iKON',
  },
  {
    path: 'sports.mp3',
    displayName: 'Sports',
    artist: 'Beach Bunny',
  },
  {
    path: 'her.mp3',
    displayName: 'Outro: Her',
    artist: 'BTS',
  },  
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}
                                                                                                                                     /* background: #2C303B;color: white;border: 3px solid #191B21;font-family: 'Montserrat', sans-serif;padding: 5px;margin: 5px;font-size: 27px;min-width: 70px;min-height: 50px;cursor: pointer;float: left;border-radius: 5px;outline: none;border-radius: 10px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;}.input-container {overflow: hidden;padding: 20px;padding-top: 0;border: 15px solid #242632;border-top: 0;border-bottom: 0;padding-bottom: 50px;}*/
// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = song.path;                                                                                                                                     /* background: #2C303B;color: white;border: 3px solid #191B21;font-family: 'Montserrat', sans-serif;padding: 5px;margin: 5px;font-size: 27px;min-width: 70px;min-height: 50px;cursor: pointer;float: left;border-radius: 5px;outline: none;border-radius: 10px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;}.input-container {overflow: hidden;padding: 20px;padding-top: 0;border: 15px solid #242632;border-top: 0;border-bottom: 0;padding-bottom: 50px;}*/
}

function changeCover(cover) {
  image.classList.remove('active');
  setTimeout(() => {
    image.src = cover;
    image.classList.add('active');
  }, 100)
  background.src = cover;
} 

// Current Song
let songIndex = 0;

// Previous Song                                                                                                                                     /* background: #2C303B;color: white;border: 3px solid #191B21;font-family: 'Montserrat', sans-serif;padding: 5px;margin: 5px;font-size: 27px;min-width: 70px;min-height: 50px;cursor: pointer;float: left;border-radius: 5px;outline: none;border-radius: 10px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;}.input-container {overflow: hidden;padding: 20px;padding-top: 0;border: 15px solid #242632;border-top: 0;border-bottom: 0;padding-bottom: 50px;}*/
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }                                                                                                                                     /* background: #2C303B;color: white;border: 3px solid #191B21;font-family: 'Montserrat', sans-serif;padding: 5px;margin: 5px;font-size: 27px;min-width: 70px;min-height: 50px;cursor: pointer;float: left;border-radius: 5px;outline: none;border-radius: 10px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;}.input-container {overflow: hidden;padding: 20px;padding-top: 0;border: 15px solid #242632;border-top: 0;border-bottom: 0;padding-bottom: 50px;}*/
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);                                                                                                                                     /* background: #2C303B;color: white;border: 3px solid #191B21;font-family: 'Montserrat', sans-serif;padding: 5px;margin: 5px;font-size: 27px;min-width: 70px;min-height: 50px;cursor: pointer;float: left;border-radius: 5px;outline: none;border-radius: 10px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;}.input-container {overflow: hidden;padding: 20px;padding-top: 0;border: 15px solid #242632;border-top: 0;border-bottom: 0;padding-bottom: 50px;}*/
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }                                                                                                                                     /* background: #2C303B;color: white;border: 3px solid #191B21;font-family: 'Montserrat', sans-serif;padding: 5px;margin: 5px;font-size: 27px;min-width: 70px;min-height: 50px;cursor: pointer;float: left;border-radius: 5px;outline: none;border-radius: 10px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;}.input-container {overflow: hidden;padding: 20px;padding-top: 0;border: 15px solid #242632;border-top: 0;border-bottom: 0;padding-bottom: 50px;}*/
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);
