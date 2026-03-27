const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
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
const time = document.getElementById("time");

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "⏸️ Pause";
    } else {
        audio.pause();
        playBtn.innerHTML = "▶️ Play";
    }
}

function rewind() { 
audio.currentTime -= 10; 
}

function forward() { 
audio.currentTime += 10; 
}

audio.ontimeupdate = function() {

    if (audio.duration) {

        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;

        let current = audio.currentTime;
        let duration = audio.duration;

        let menit = Math.floor(current / 60);
        let detik = Math.floor(current % 60);

        let menitTotal = Math.floor(duration / 60);
        let detikTotal = Math.floor(duration % 60);

        if(detik < 10) detik = "0" + detik;
        if(detikTotal < 10) detikTotal = "0" + detikTotal;

        time.innerHTML = menit + ":" + detik + " / " + menitTotal + ":" + detikTotal;
    }
};
const openBtn = document.getElementById("openPdfBtn");
const pdfPanel = document.getElementById("pdfPanel");
const closeBtn = document.getElementById("closePdf");

openBtn.addEventListener("click", () => {
    pdfPanel.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    pdfPanel.classList.remove("active");
});
openBtn.addEventListener("click", () => {
    pdfPanel.classList.add("active");
    document.body.classList.add("blur");
});

closeBtn.addEventListener("click", () => {
    pdfPanel.classList.remove("active");
    document.body.classList.remove("blur");
});