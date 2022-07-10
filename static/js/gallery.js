const images = document.querySelectorAll(".popup");
let imgSrc;
// Get image src on click
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.getAttribute("full");
    imgTitle = e.target.parentElement.querySelector("h6").innerText;
    imgDesc = e.target.parentElement.querySelector(".description").innerText;
    imgLocation = e.target.parentElement
      .querySelector(".location")
      .getAttribute("href");
    imgAlt = e.target.alt;
    imgNo = e.target.parentElement.getAttribute("data-item");
    imgTotal = e.target.parentElement.getAttribute("data-total");
    // Display the modal
    imgModal(imgSrc, imgTitle, imgDesc, imgLocation, imgAlt, imgNo, imgTotal);
  });
});

// Display the modal
let imgModal = (src, title, desc, location, alt, imgNo, imgTotal) => {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";

  popupImage = document.querySelector(".to-popup");
  popupImage.setAttribute("src", src);

  popupImage = document.querySelector(".to-popup");
  popupImage.setAttribute("alt", alt);

  downloadIcon = document.querySelector(".modal-download");
  downloadIcon.setAttribute("href", src);

  modalTitle = document.querySelector(".modal-title");
  modalTitle.textContent = title;

  modalDesc = document.querySelector(".modal-description");
  modalDesc.textContent = desc;

  modalLocation = document.querySelector(".modal-location");
  modalLocation.setAttribute("href", location);

  modalNumber = document.querySelector(".modal-no");
  modalNumber.textContent = imgNo;

  modalCounter = document.querySelector(".modal-counter");
  modalCounter.textContent = imgTotal;

  if (location !== null) {
    modalLocation.style.display = "inline";
  } else {
    modalLocation.style.display = "none";
  }

  modalClose = document.querySelector(".modal-close");

  // // modalNext = document.querySelector(".modal-next");
  // // modalNext.setAttribute("href", next);

  // // modalPrev = document.querySelector(".modal-prev");
  // // modalPrev.setAttribute("href", "test");

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
