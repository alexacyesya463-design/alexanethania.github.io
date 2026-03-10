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
const progressBar = document.getElementById("progressBar");

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "⏸️ Pause";
    } else {
        audio.pause();
        playBtn.innerHTML = "▶️ Play";
    }
}

function rewind() { audio.currentTime -= 10; }
function forward() { audio.currentTime += 10; }

audio.ontimeupdate = function() {
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    }
};

function changeProgress() {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
}