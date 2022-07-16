class galleryItem {
  constructor(galleryImage) {
    this.elem = galleryImage;
    this.src = galleryImage.getAttribute("full");
    this.title = galleryImage.parentElement.querySelector("h6").innerText;
    this.desc =
      galleryImage.parentElement.querySelector(".description").innerText;
    this.location = galleryImage.parentElement
      .querySelector(".location")
      .getAttribute("href");
    this.alt = galleryImage.alt;
    this.no = galleryImage.parentElement.getAttribute("data-item");
    this.total = galleryImage.parentElement.getAttribute("data-total");
  }
}

const galleryImages = document.querySelectorAll(".popup");
galleryImages.forEach((galleryImage) => {
  galleryItemInstance = new galleryItem(galleryImage);
  galleryImage.addEventListener("click", () => {
    displayImgModal(galleryItemInstance);
  });
});

let displayImgModal = (galleryItem) => {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";

  popupImage = document.querySelector(".to-popup");
  popupImage.setAttribute("src", galleryItem.src);

  popupImage = document.querySelector(".to-popup");
  popupImage.setAttribute("alt", galleryItem.alt);

  downloadIcon = document.querySelector(".modal-download");
  downloadIcon.setAttribute("href", galleryItem.src);

  modalTitle = document.querySelector(".modal-title");
  modalTitle.textContent = galleryItem.title;

  modalDesc = document.querySelector(".modal-description");
  modalDesc.textContent = galleryItem.title;

  modalLocation = document.querySelector(".modal-location");
  modalLocation.setAttribute("href", galleryItem.location);

  modalNumber = document.querySelector(".modal-no");
  modalNumber.textContent = galleryItem.no;

  modalCounter = document.querySelector(".modal-counter");
  modalCounter.textContent = galleryItem.total;

  if (galleryItem.location !== null) {
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
  nextModalNo = parseInt(galleryItem.no) + 1;
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

  // Next on left arrow
  document.addEventListener("keydown", (e) => {
    e = e || window.event;
    if (e.key === "ArrowRight") {
      {
        if (modalNext !== null) {
          modalNextObj = {
            src: modalNext.getAttribute("full"),
            title: modalNext.parentElement.querySelector("h6").innerText,
            desc: modalNext.parentElement.querySelector(".description")
              .innerText,
            location: modalNext.parentElement
              .querySelector(".location")
              .getAttribute("href"),
            alt: modalNext.alt,
            no: modalNext.parentElement.getAttribute("data-item"),
            total: modalNext.parentElement.getAttribute("data-total"),
          };
          displayImgModal(modalNextObj);
        }
      }
    }
  });

  prevModalNo = parseInt(galleryItem.no) - 1;
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

  // Prev on left arrow
  document.addEventListener("keydown", (e) => {
    e = e || window.event;
    if (e.key === "ArrowLeft") {
      {
        if (modalprev !== null) {
          modalPrevObj = {
            src: modalprev.getAttribute("full"),
            title: modalprev.parentElement.querySelector("h6").innerText,
            desc: modalprev.parentElement.querySelector(".description")
              .innerText,
            location: modalprev.parentElement
              .querySelector(".location")
              .getAttribute("href"),
            alt: modalprev.alt,
            no: modalprev.parentElement.getAttribute("data-item"),
            total: modalprev.parentElement.getAttribute("data-total"),
          };
          displayImgModal(modalPrevObj);
        }
      }
    }
  });

  // Close on ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
      body.removeAttribute("class", "modal-on");
    }
  });
};
