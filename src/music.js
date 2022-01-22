const cover = document.querySelector('.music-player__cover');
const title = document.querySelector('.music-player__title');
const playBtn = document.querySelector('.music-player__play');
const prevBtn = document.querySelector('.music-player__prev');
const nextBtn = document.querySelector('.music-player__next');

const music1 = new Audio(
  '../music/Severin & Like Lions - I Hear Sleigh Bells [NCS Release].mp3'
);
const music2 = new Audio('../music/Alisky - On [NCS Release].mp3');
const music3 = new Audio(
  '../music/Arc North - Symphony (feat. Donna Tella) [NCS Release].mp3'
);
const music4 = new Audio('../music/OVSKY - Lucky Charm [NCS Release].mp3');

const musicList = [
  {
    sound: music1,
    title: 'Severin & Like Lions - I Hear Sleigh Bells',
    cover:
      'https://linkstorage.linkfire.com/medialinks/images/d0681c42-37c3-44ea-876c-77d9765ec709/artwork-440x440.jpg',
  },
  {
    sound: music2,
    title: 'Alisky - On',
    cover:
      'https://linkstorage.linkfire.com/medialinks/images/77c9404d-384b-4fe9-a18d-23b4100a2625/artwork-440x440.jpg',
  },
  {
    sound: music3,
    title: 'Arc North - Symphony (feat. Donna Tella)',
    cover:
      'https://linkstorage.linkfire.com/medialinks/images/6da8f4d1-115c-44f7-8b14-94bd2e46d0b1/artwork-440x440.jpg',
  },
  {
    sound: music4,
    title: 'OVSKY - Lucky Charm',
    cover:
      'https://linkstorage.linkfire.com/medialinks/images/9246170a-15a7-4007-8b12-85da2301f983/artwork-440x440.jpg',
  },
];

let playOrder = 0;

playBtn.addEventListener('click', () => {
  const icon = playBtn.querySelector('i');
  const music = musicList[playOrder];

  if (icon.classList.contains('fa-play')) {
    icon.classList.add('fa-pause');
    icon.classList.remove('fa-play');
    playSound(music.sound);
  } else {
    icon.classList.add('fa-play');
    icon.classList.remove('fa-pause');
    stopSound(music.sound);
  }
});

prevBtn.addEventListener('click', () => {
  stopSound(musicList[playOrder].sound);
  playOrder === 0 ? (playOrder = 3) : playOrder--;
  const precMusic = musicList[playOrder];
  playSound(precMusic.sound);
  getCover(precMusic);
  getTitle(precMusic);
  console.log(playOrder);
});

nextBtn.addEventListener('click', () => {
  stopSound(musicList[playOrder].sound);
  playOrder === musicList.length - 1 ? (playOrder = 0) : playOrder++;
  const nextMusic = musicList[playOrder];
  playSound(nextMusic.sound);
  getCover(nextMusic);
  getTitle(nextMusic);
  console.log(playOrder);
});

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
  cover.classList.add('play');
  cover.style.animationPlayState = 'running';
}

function stopSound(sound) {
  sound.pause();
  cover.style.animationPlayState = 'paused';
}

function getCover(music) {
  cover.src = music.cover;
}

function getTitle(music) {
  title.innerText = music.title;
}
