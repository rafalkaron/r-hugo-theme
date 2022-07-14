const images = document.querySelectorAll(".popup");

// Create img modals on click
images.forEach((img) => {
  let imgObj = {
    src: img.getAttribute("full"),
    title: img.parentElement.querySelector("h6").innerText,
    desc: img.parentElement.querySelector(".description").innerText,
    location: img.parentElement.querySelector(".location").getAttribute("href"),
    alt: img.alt,
    no: img.parentElement.getAttribute("data-item"),
    total: img.parentElement.getAttribute("data-total"),
  };

  img.addEventListener("click", (img) => {
    displayImgModal(imgObj);
  });
});

let displayImgModal = (imgObj) => {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";

  popupImage = document.querySelector(".to-popup");
  popupImage.setAttribute("src", imgObj.src);

  popupImage = document.querySelector(".to-popup");
  popupImage.setAttribute("alt", imgObj.alt);

  downloadIcon = document.querySelector(".modal-download");
  downloadIcon.setAttribute("href", imgObj.src);

  modalTitle = document.querySelector(".modal-title");
  modalTitle.textContent = imgObj.title;

  modalDesc = document.querySelector(".modal-description");
  modalDesc.textContent = imgObj.title;

  modalLocation = document.querySelector(".modal-location");
  modalLocation.setAttribute("href", imgObj.location);

  modalNumber = document.querySelector(".modal-no");
  modalNumber.textContent = imgObj.no;

  modalCounter = document.querySelector(".modal-counter");
  modalCounter.textContent = imgObj.total;

  if (imgObj.location !== null) {
    modalLocation.style.display = "inline";
  } else {
    modalLocation.style.display = "none";
  }

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
  // NEXT PREV buttons
  nextModalNo = parseInt(imgObj.no) + 1;
  modalNext = document.querySelector(`#item-${nextModalNo} img`);
  //refactor
  modalNextButton = document.querySelector(".modal-next");
  modalNextButton.onclick = () => {
    if (modalNext !== null) {
      modalNextObj = {
        src: modalNext.getAttribute("full"),
        title: modalNext.parentElement.querySelector("h6").innerText,
        desc: modalNext.parentElement.querySelector(".description").innerText,
        location: modalNext.parentElement
          .querySelector(".location")
          .getAttribute("href"),
        alt: modalNext.alt,
        no: modalNext.parentElement.getAttribute("data-item"),
        total: modalNext.parentElement.getAttribute("data-total"),
      };
      displayImgModal(modalNextObj);
    }
  };

  prevModalNo = parseInt(imgObj.no) - 1;
  modalprev = document.querySelector(`#item-${prevModalNo} img`);
  //refactor
  modalprevButton = document.querySelector(".modal-prev");
  modalprevButton.onclick = () => {
    if (modalprev !== null) {
      modalPrevObj = {
        src: modalprev.getAttribute("full"),
        title: modalprev.parentElement.querySelector("h6").innerText,
        desc: modalprev.parentElement.querySelector(".description").innerText,
        location: modalprev.parentElement
          .querySelector(".location")
          .getAttribute("href"),
        alt: modalprev.alt,
        no: modalprev.parentElement.getAttribute("data-item"),
        total: modalprev.parentElement.getAttribute("data-total"),
      };
      displayImgModal(modalPrevObj);
    }
  };

  // Close on ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
      body.removeAttribute("class", "modal-on");
    }
  });
};
