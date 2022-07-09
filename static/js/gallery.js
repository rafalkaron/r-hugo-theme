const images = document.querySelectorAll(".popup");
let imgSrc;
// Get image src on click
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    imgTitle = e.target.parentElement.querySelector("h6").innerText;
    imgDesc = e.target.parentElement.querySelector(".description").innerText;
    imgLocation = e.target.parentElement
      .querySelector(".location")
      .getAttribute("href");
    // Display the modal
    imgModal(imgSrc, imgTitle, imgDesc, imgLocation);
  });
});

// Display the modal
let imgModal = (src, title, desc, location) => {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";

  // Add current image src
  popupImage = document.querySelector(".to-popup");
  popupImage.setAttribute("src", src);

  downloadIcon = document.querySelector(".modal-download");
  downloadIcon.setAttribute("href", src);

  modalTitle = document.querySelector(".modal-title");
  modalTitle.textContent = title;

  modalDesc = document.querySelector(".modal-description");
  modalDesc.textContent = desc;

  modalLocation = document.querySelector(".modal-location");
  modalLocation.setAttribute("href", location);

  modalClose = document.querySelector(".modal-close");

  body = document.querySelector("body");
  body.setAttribute("class", "modal-on");

  // Close on close button click
  modalClose.onclick = () => {
    modal.style.display = "none";
    body.removeAttribute("class", "modal-on");
  };

  // Close on image click
  popupImage.onclick = () => {
    modal.style.display = "none";
    body.removeAttribute("class", "modal-on");
  };

  // Close on ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
      body.removeAttribute("class", "modal-on");
    }
  });
};
