
const playButton = document.getElementById("start-button");
const music = document.getElementById("bg-music");
playButton.addEventListener("click", () => {
    music.volume = 0.01
    music.play();
    playButton.style.display = "none";
});
const imagePaths = [
    "src/bilder/1.jpg",
    "src/bilder/2.jpg",
    "src/bilder/3.jpg",
    "src/bilder/4.jpg",
    "src/bilder/5.jpg",
    "src/bilder/6.jpg",
]

let fotosContent = "<h1>Unsere Fotos</h1>";
for (let path of imagePaths) {
    fotosContent += `<img src="${path}" alt="Familienfoto">`;
}

const pages = {
    start: "<h1>Willkommen</h1><p>Schön, dass du da bist</p>",
    fotos: fotosContent,
    über: "<h1>Über uns</h1><p>Wir sind eine wunderbare Familie...</p>"
};

function loadPage(page) {
    const content = document.getElementById("content");
    content.innerHTML = pages[page] || "<p>Seite nicht gefunden</p>";
}

window.onload = () => loadPage('start');