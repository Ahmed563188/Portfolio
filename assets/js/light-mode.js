const body = document.body;
const light__mode = document.getElementById("light-mode");
const dark__mode = document.getElementById("dark-mode");
const logo = document.getElementById("logo")

function applyMode(isDark) {
    if (isDark) {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        light__mode.classList.add("display-n");
        dark__mode.classList.remove("display-n");
        logo.src = "assets/images/my logo white.webp"
    } else {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        light__mode.classList.remove("display-n");
        dark__mode.classList.add("display-n");
        logo.src = "assets/images/my logo.webp"

    }
}

function toggleMode() {
    const isDark = !body.classList.contains("dark-mode");
    applyMode(isDark);
    localStorage.setItem("darkMode", isDark ? "on" : "off");
}

window.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("darkMode");
    const isDark = savedMode === "on";
    applyMode(isDark);
});

light__mode.addEventListener("click", toggleMode);
dark__mode.addEventListener("click", toggleMode);
