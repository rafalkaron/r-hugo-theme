function openModal(src) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").setAttribute("src", src);
}

function closeModal() {
  document.getElementById("lightbox").style.display = "none";
}
