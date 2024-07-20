document.addEventListener('DOMContentLoaded', async () => {
  const cover = document.getElementById('cover');
  const playPauseBtn = document.getElementById('playPause');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const currentSongDisplay = document.getElementById('currentSong');

  let currentSongIndex = 0;
  let audio = new Audio();

  const songs = await fetch('http://localhost:3000/api/music/list')
    .then((res) => {
      if (!res.ok) {
        throw new Error('failed to fetch song list');
      }
      return res.json();
    })
    .catch((err) => {
      console.error('Error fetching song list:', err);
      return [];
    });

  if (songs.length === 0) {
    currentSongDisplay.textContent = 'no songs available';
    return;
  }

  const covers = [
    'music-1.jpg',
    'music-2.jpg',
    'music-3.jpg',
    'music-4.jpg',
    'music-5.jpg',
    'music-6.jpg',
  ];

  const loadSong = (index) => {
    const songSrc = `http://localhost:3000/api/music/song/${songs[index]}`;
    audio.src = songSrc;

    cover.src = `http://localhost:3000/api/music/image/${covers[index]}`;
    currentSongDisplay.textContent = `playing: ${songs[index]}`;

    console.log('loading song:', songSrc);
  };

  const playPause = () => {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          playPauseBtn.textContent = 'Pause';
        })
        .catch((err) => {
          console.error('error playing audio:', err);
        });
    } else {
      audio.pause();
      playPauseBtn.textContent = 'play';
    }
  };

  const nextSong = () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio
      .play()
      .then(() => {
        playPauseBtn.textContent = 'Pause';
      })
      .catch((err) => {
        console.error('Error playing audio', err);
      });
  };

  const prevSong = () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio
      .play()
      .then(() => {
        playPauseBtn.textContent = 'Pause';
      })
      .catch((err) => {
        console.error('Error playing audio:', err);
      });
  };

  playPauseBtn.addEventListener('click', playPause);
  nextBtn.addEventListener('click', nextSong);
  prevBtn.addEventListener('click', prevSong);

  loadSong(currentSongIndex);
});
