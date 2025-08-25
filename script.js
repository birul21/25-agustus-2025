const envelope = document.getElementById("envelope");
const envelopeImg = document.getElementById("envelope-img");
const letter = document.getElementById("letter");
const music = document.getElementById("bg-music");

envelope.addEventListener("click", () => {
  // Ganti gambar amplop jadi terbuka
  envelopeImg.src = "img/open.png";

  // Sembunyikan amplop setelah beberapa saat
  setTimeout(() => {
    envelope.style.display = "none";
    letter.classList.add("show");
    
  // Mainkan musik
    music.play();
    music.loop = true;
  }, 600);
});
