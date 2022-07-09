const images = document.querySelectorAll(".popup");
let imgSrc;
// Get image src on click
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    // Display the modal
    imgModal(imgSrc);
  });
});

// Display the modal
let imgModal = (src) => {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";

  // Add current image src
  popupImage = document.querySelector("img.to-popup");
  popupImage.setAttribute("src", src);

  // Close on click
  modal.onclick = () => {
    modal.style.display = "none";
  };

  // Close on ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });
};
