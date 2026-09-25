const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const menuPanel = document.getElementById("menuPanel");

menuButton.addEventListener("click", () => {
    menuPanel.classList.add("open");
});

closeButton.addEventListener("click", () => {
    menuPanel.classList.remove("open");
});