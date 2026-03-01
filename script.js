// Dark Mode Toggle
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});