const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const body = document.querySelector("body");

function openModal(src) {
  body.setAttribute("class", "modal-on");
  lightbox.style.display = "flex";
  lightboxImg.setAttribute("src", src);
}

function closeModal() {
  body.removeAttribute("class", "modal-on");
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
