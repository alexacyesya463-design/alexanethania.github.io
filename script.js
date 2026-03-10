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
const audio = document.getElementById("myAudio");
const playBtn = document.getElementById("playBtn");

// Fungsi Play & Pause
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "⏸️ Pause";
    } else {
        audio.pause();
        playBtn.innerHTML = "▶️ Play";
    }
}

// Fungsi Mundur 10 Detik
function rewind() {
    audio.currentTime -= 10;
}

// Fungsi Maju 10 Detik
function forward() {
    audio.currentTime += 10;
}

// Update Progress Bar otomatis saat musik jalan
audio.ontimeupdate = function() {
    const progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById("progressBar").value = progress;
};

// Fungsi klik di progress bar untuk lompat ke detik tertentu
function changeProgress() {
    const progressBar = document.getElementById("progressBar");
    audio.currentTime = (progressBar.value / 100) * audio.duration;
}