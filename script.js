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

   let audio = document.getElementById("myAudio");

function togglePlay(){
if(audio.paused){
audio.play();
}else{
audio.pause();
}
}

function rewind(){
audio.currentTime -= 10;
}

function forward(){
audio.currentTime += 10;
}

function changeProgress(){
let progress = document.getElementById("progressBar");
audio.currentTime = (progress.value/100) * audio.duration;
}