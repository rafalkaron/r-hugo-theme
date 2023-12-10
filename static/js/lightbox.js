const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxButtonDownload = document.getElementById(
  "lightbox-button-download"
);
const body = document.querySelector("body");

let lightboxImageSrc = null;

function openModal(src) {
  body.setAttribute("class", "modal-on");
  lightbox.style.display = "flex";
  lightboxImg.setAttribute("src", src);
  lightboxImageSrc = src;
}

function closeModal() {
  body.removeAttribute("class", "modal-on");
  document.getElementById("lightbox").style.display = "none";
}

function downloadFile() {
  lightboxButtonDownload.setAttribute("href", lightboxImageSrc);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});