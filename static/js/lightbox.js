const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxButtonDownload = document.getElementById(
  "lightbox-button-download"
);
const lightboxFigcaption = document.getElementById("lightbox-figcaption");
const pageBody = document.querySelector("body");

let lightboxImageSrc = null;

function openModal(src, alt, title) {
  pageBody.setAttribute("class", "modal-on");
  lightbox.style.display = "flex";
  lightboxImg.setAttribute("src", src);
  if (alt != null) {
    lightboxImg.setAttribute("alt", alt);
  } else {
    lightboxImg.removeAttribute("alt");
  }
  if (title != null && title != "") {
    lightboxImg.setAttribute("title", title);
    lightboxFigcaption.textContent = title;
  } else {
    lightboxImg.removeAttribute("title");
    lightboxFigcaption.textContent = "";
  }

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
