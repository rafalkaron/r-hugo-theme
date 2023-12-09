let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

function openModal(src) {
  lightbox.style.display = "flex";
  lightboxImg.setAttribute("src", src);
}

function closeModal() {
  document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("keydown", (e) => {
  e = e || window.event;
  if (e.key === "Escape") {
    {
      if (lightbox.style.display !== "none") {
        lightbox.style.display = "none";
      } else {
        lightbox.style.display = "none";
      }
    }
  }
});
