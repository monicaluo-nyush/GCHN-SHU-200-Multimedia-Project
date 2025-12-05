const music = document.getElementById("bg-music");
const message = document.getElementById("music-message");

// Try autoplay (many browsers will block)
music.play().then(() => {
    message.style.display = "none";
}).catch(() => {
    // Wait for user click to start music
    document.body.addEventListener("click", () => {
        music.play();
        message.style.display = "none";
    }, { once: true });
});
