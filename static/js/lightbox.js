const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxButtonDownload = document.getElementById(
  "lightbox-button-download"
);
const pageBody = document.querySelector("body");

let lightboxImageSrc = null;

function openModal(src) {
  pageBody.setAttribute("class", "modal-on");
  lightbox.style.display = "flex";
  lightboxImg.setAttribute("src", src);
  lightboxImageSrc = src;
}

function closeModal() {
  pageBody.removeAttribute("class", "modal-on");
  lightbox.style.display = "none";
}

function downloadFile() {
  lightboxButtonDownload.setAttribute("href", lightboxImageSrc);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
