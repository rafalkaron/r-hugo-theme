const images = document.querySelectorAll(".popup");

// Create img modals on click
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgModalFromElem(e.target);
  });
});

let imgModalFromElem = (e) => {
  imgSrc = e.getAttribute("full");
  imgTitle = e.parentElement.querySelector("h6").innerText;
  imgDesc = e.parentElement.querySelector(".description").innerText;
  imgLocation = e.parentElement.querySelector(".location").getAttribute("href");
  imgAlt = e.alt;
  imgNo = e.parentElement.getAttribute("data-item");
  imgTotal = e.parentElement.getAttribute("data-total");
  displayImgModal(
    imgSrc,
    imgTitle,
    imgDesc,
    imgLocation,
    imgAlt,
    imgNo,
    imgTotal
  );
};

let displayImgModal = (src, title, desc, location, alt, imgNo, imgTotal) => {
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
  nextModalNo = parseInt(imgNo) + 1;
  modalNext = document.querySelector(`#item-${nextModalNo} img`);
  modalNextButton = document.querySelector(".modal-next");
  modalNextButton.onclick = () => {
    if (modalNext !== null) {
    imgModalFromElem(modalNext);
    }
  };

  prevModalNo = parseInt(imgNo) - 1;
  modalprev = document.querySelector(`#item-${prevModalNo} img`);
  modalprevButton = document.querySelector(".modal-prev");
  modalprevButton.onclick = () => {
    if (modalprev !== null) {
      imgModalFromElem(modalprev);
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
