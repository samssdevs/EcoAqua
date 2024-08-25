// Add this JavaScript code to your JS file or inside a <script> tag
document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        { name: "Song 1", artist: "Artist 1", file: "All I Wanna Do (Feat. Hoody & 로꼬 Loco) (Korean Version).mp3" },
        { name: "Song 2", artist: "Artist 2", file: "song2.mp3" },
        { name: "Song 3", artist: "Artist 3", file: "song3.mp3" },
        { name: "Song 4", artist: "Artist 4", file: "song4.mp3" },
        { name: "Song 5", artist: "Artist 5", file: "song5.mp3" }
    ];

    const playButton = document.getElementById('play-button');
    const songInfo = document.getElementById('song-info');
    const audioElement = document.getElementById('audio-element');

    playButton.addEventListener('click', () => {
        // Select a random song from the list
        const randomIndex = Math.floor(Math.random() * songs.length);
        const selectedSong = songs[randomIndex];

        // Set the audio source and play the song
        audioElement.src = selectedSong.file;
        audioElement.play();

        // Display the song name and artist
        songInfo.textContent = `${selectedSong.name} by ${selectedSong.artist}`;
    });

    // Loop the audio when it ends
    audioElement.addEventListener('ended', () => {
        audioElement.play();
    });
});
