// 1. FUNGSI MENU TOGGLE (HP)
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// 2. FUNGSI SCROLL HALUS
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// 3. EFEK KURSOR LOVE (PINK)
document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    heart.className = 'cursor-heart'; 
    
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    heart.innerHTML = '❤';

    let size = Math.random() * 20;
    heart.style.fontSize = 10 + size + 'px';

    body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 800);
});