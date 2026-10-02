const musicPlayer = {
    init: function(audioSrc) {
        const audio = document.getElementById("bg-music");
        const toggleBtn = document.getElementById("music-toggle-btn");
        const iconPlay = document.getElementById("music-icon-play");
        const iconPause = document.getElementById("music-icon-pause");
        const musicControl = document.getElementById("music-control");

        if (!audio || !audioSrc) return;
        audio.src = audioSrc;

        // Pastikan atribut loop aktif
        audio.loop = true;

        let isPlaying = false;

        function playMusic() {
            audio.play().then(() => {
                isPlaying = true;
                toggleBtn.classList.add("playing");
                iconPlay.classList.add("hidden");
                iconPause.classList.remove("hidden");
                console.log("Musik berhasil diputar!");
            }).catch(e => {
                console.warn("Gagal memutar musik:", e);
            });
        }

        function pauseMusic() {
            audio.pause();
            isPlaying = false;
            toggleBtn.classList.remove("playing");
            iconPlay.classList.remove("hidden");
            iconPause.classList.add("hidden");
        }

        // Pengaman ekstra: Jika lagu habis, paksa play ulang dari awal
        audio.addEventListener("ended", function() {
            audio.currentTime = 0;
            audio.play();
        });

        toggleBtn.addEventListener("click", () => {
            if (isPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
        });

        // Expose trigger globally for opening overlay
        window.startWeddingMusic = function() {
            musicControl.classList.remove("hidden");
            playMusic();
        };
    }
};