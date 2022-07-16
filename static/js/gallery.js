const galleryImages = document.querySelectorAll(".popup");

class galleryItem {
  constructor(galleryImage) {
    this.popupImage = document.querySelector(".to-popup");
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
    this.modal = document.querySelector(".modal");
    this.body = document.querySelector("body");
  }

  initModal() {
    this.body.setAttribute("class", "modal-on");
    this.modal.style.display = "flex";
    this.popupImage.setAttribute("src", this.src);
    this.popupImage.setAttribute("alt", this.alt);

    let downloadIcon = document.querySelector(".modal-download");
    downloadIcon.setAttribute("href", this.src);

    let modalTitle = document.querySelector(".modal-title");
    modalTitle.textContent = this.title;

    let modalDesc = document.querySelector(".modal-description");
    modalDesc.textContent = this.title;

    let modalLocation = document.querySelector(".modal-location");
    modalLocation.setAttribute("href", this.location);

    let modalNumber = document.querySelector(".modal-no");
    modalNumber.textContent = this.no;

    let modalCounter = document.querySelector(".modal-counter");
    modalCounter.textContent = this.total;

    if (this.location !== null) {
      modalLocation.style.display = "inline";
    } else {
      modalLocation.style.display = "none";
    }

    this.closeModal();
    this.nextModal();
    this.prevModal();
  }

  nextModal() {
    let nextModalNo = parseInt(this.no) + 1;
    let nextGalleryImage = document.querySelector(`#item-${nextModalNo} img`);
    let modalNextButton = document.querySelector(".modal-next");

    modalNextButton.onclick = () => {
      if (nextGalleryImage !== null) {
        let nextGalleryItem = new galleryItem(nextGalleryImage);
        nextGalleryItem.initModal();
      }
    };
  }

  prevModal() {
    let prevModalNo = parseInt(this.no) - 1;
    let prevGalleryImage = document.querySelector(`#item-${prevModalNo} img`);
    let modalPrevButton = document.querySelector(".modal-prev");

    modalPrevButton.onclick = () => {
      if (prevGalleryImage !== null) {
        let prevGalleryItem = new galleryItem(prevGalleryImage);
        prevGalleryItem.initModal();
      }
    };
  }

  closeModal() {
    let body = this.body;
    let modal = this.modal;
    // Close on close button click
    let modalClose = document.querySelector(".modal-close");
    modalClose.onclick = () => {
      modal.style.display = "none";
      body.removeAttribute("class", "modal-on");
    };
    // Close on image click
    this.popupImage.onclick = () => {
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
  }
}

function initFirstModal() {
  let firstGalleryImage = document.querySelector(`#item-1 img`);
  document.addEventListener("keydown", (e) => {
    e = e || window.event;
    if (e.key === "ArrowDown" && firstGalleryImage !== null) {
      {
        let firstGalleryItem = new galleryItem(firstGalleryImage);
        firstGalleryItem.initModal();
      }
    }
  });
}

function initLastModal() {
  let total = document
    .querySelector(".popup")
    .parentElement.getAttribute("data-total");
  let lastGalleryImage = document.querySelector(`#item-${total} img`);
  document.addEventListener("keydown", (e) => {
    e = e || window.event;
    if (e.key === "ArrowUp" && lastGalleryImage !== null) {
      {
        let lastGalleryItem = new galleryItem(lastGalleryImage);
        lastGalleryItem.initModal();
      }
    }
  });
}

galleryImages.forEach((galleryImage) => {
  galleryImage.addEventListener("click", () => {
    galleryItemInstance = new galleryItem(galleryImage);
    galleryItemInstance.initModal();
  });
});

initFirstModal();
initLastModal();
