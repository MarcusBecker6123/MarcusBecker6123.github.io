
const playButton = document.getElementById("start-button");
const music = document.getElementById("bg-music");
playButton.addEventListener("click", () => {
    music.volume = 0.01
    music.play();
    playButton.style.display = "none";
});

function setupDelegation() {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.image')) {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      if (lightbox && lightboxImg) {
        lightboxImg.src = e.target.src;
        lightbox.classList.remove('hidden');
      }
    }
    if (e.target.id === 'lightbox') {
      e.target.classList.add('hidden');
      const lightboxImg = document.getElementById('lightbox-img');
      if (lightboxImg) {
        lightboxImg.src = '';
      }
    }
  });
}

async function loadPage(page) {
    const content = document.getElementById("content");
    try {
        const res = await fetch(`src/pages/${page}.html`);
        if (!res.ok) throw new Error("Not found");
        const html = await res.text();
        content.innerHTML = html;

        if (page === "fotos") {
            initGallery();
        }
    } catch (err) {
        content.innerHTML = "<p>Seite nicht gefunden</p>";
    }
}

function initGallery() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Event Delegation für Bilder in der Galerie
    document.getElementById('content').addEventListener('click', (e) => {
        if (e.target.classList.contains('image')) {
            lightboxImg.src = e.target.src;
            lightbox.classList.remove('hidden');
        }
        if (e.target.id === 'lightbox') {
            lightbox.classList.add('hidden');
            lightboxImg.src = '';
        }
    });
}

window.onload = () => {
    setupDelegation();
    loadPage('start');
};

   

