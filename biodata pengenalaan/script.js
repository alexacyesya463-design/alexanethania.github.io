const toggle=document.getElementById("menu-toggle");
const navLinks=document.querySelector(".nav-links");

toggle.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});

function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

    // Inisialisasi elemen
    const audio = document.getElementById("myAudio");
    const playBtn = document.getElementById("playBtn");
    const progressBar = document.getElementById("progressBar");
    <button onclick="togglePlay()">Play</button>
    
    // Fungsi Play dan Pause
    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = "⏸️ Pause";
        } else {
            audio.pause();
            playBtn.innerHTML = "▶️ Play";
        }
    }

    // Fungsi Mundur 10 detik
    function rewind() {
        audio.currentTime -= 10;
    }

    // Fungsi Maju 10 detik
    function forward() {
        audio.currentTime += 10;
    }

    // Update Progress Bar mengikuti jalannya musik
    audio.ontimeupdate = function() {
        if (audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
        }
    };

    // Fungsi geser progress bar secara manual
    function changeProgress() {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    }