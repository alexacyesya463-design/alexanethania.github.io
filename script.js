function tampilSalam(){
    alert("Halo! Selamat datang di website saya 😊");
}

const daftarMoto = [
  "Kesuksesan datang dari konsistensi dan kerja keras.",
  "Kegagalan bukanlah akhir, tapi awal untuk belajar lebih kuat.",
  "Jangan takut gagal, takutlah berhenti mencoba.",
  "Proses hari ini menentukan hasil esok hari."
];

let indexMoto = 0;

function ubahMoto() {
  document.getElementById("motto").innerText = daftarMoto[indexMoto];
  indexMoto++;

  if (indexMoto >= daftarMoto.length) {
    indexMoto = 0; // balik ke awal
  }
}

function toggleDark(){
    document.body.classList.toggle("dark");
}

function tampilWaktu(){
    document.getElementById("time").innerText =
    "Waktu saat ini: " + new Date().toLocaleString("id-ID");
}


/* PLAY / PAUSE */
const music = document.getElementById("music");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const player = document.getElementById("musicPlayer");
const title = document.getElementById("musicTitle");

function toggleMusic(){
    if(music.paused){
        music.play();

        // tampilkan player & judul
        player.style.display = "block";
        title.style.display = "block";

        title.innerText = "🎵 Now Playing: " +
            decodeURIComponent(music.src.split('/').pop()).replace(".mp3","");
    } else {
        music.pause();

        // sembunyikan player
        player.style.display = "none";
        title.style.display = "none";
    }
}


/* UPDATE DURASI */
music.addEventListener("loadedmetadata", () => {
    durationEl.innerText = formatTime(music.duration);
    progress.max = Math.floor(music.duration);
});

/* UPDATE WAKTU BERJALAN */
music.addEventListener("timeupdate", () => {
    currentTimeEl.innerText = formatTime(music.currentTime);
    progress.value = music.currentTime;
});

/* GESER MANUAL */
progress.addEventListener("input", () => {
    music.currentTime = progress.value;
});

/* MAJU & MUNDUR */
function forward(){
    music.currentTime += 10;
}
function backward(){
    music.currentTime -= 10;
}

/* FORMAT WAKTU */
function formatTime(sec){
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0"+s : s}`;
}

    


tampilWaktu();
