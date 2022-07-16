const galleryImages = document.querySelectorAll(".popup");
let currentGalleryImage;
let nextGalleryImage;
let prevGalleryImage;
const totalGalleryImages = document
  .querySelector(".popup")
  .parentElement.getAttribute("data-total");
const firstGalleryImage = document.querySelector(`#item-1 img`);
const lastGalleryImage = document.querySelector(
  `#item-${totalGalleryImages} img`
);

const modal = document.querySelector(".modal");
const body = document.querySelector("body");

class galleryItem {
  constructor(galleryImage) {
    this.popupImage = document.querySelector(".to-popup");
    this.src = galleryImage.getAttribute("data-full");
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

  initModal() {
    body.setAttribute("class", "modal-on");
    modal.style.display = "flex";
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

    currentGalleryImage = document.querySelector(
      `#item-${parseInt(this.no)} img`
    );
    nextGalleryImage = document.querySelector(
      `#item-${parseInt(this.no) + 1} img`
    );
    prevGalleryImage = document.querySelector(
      `#item-${parseInt(this.no) - 1} img`
    );
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
  }
}

function initFirstModal() {
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

// Add keybindings
document.addEventListener("keydown", (e) => {
  e = e || window.event;
  if (e.key === "ArrowRight" && nextGalleryImage !== null) {
    {
      let nextGalleryItem = new galleryItem(nextGalleryImage);
      nextGalleryItem.initModal();
    }
  } else if (e.key === "ArrowLeft" && prevGalleryImage !== null) {
    {
      let prevGalleryItem = new galleryItem(prevGalleryImage);
      prevGalleryItem.initModal();
    }
  } else if (e.key === "ArrowDown") {
    {
      let firstGalleryItem = new galleryItem(firstGalleryImage);
      firstGalleryItem.initModal();
    }
  } else if (e.key === "ArrowUp") {
    {
      let lastGalleryItem = new galleryItem(lastGalleryImage);
      lastGalleryItem.initModal();
    }
  } else if (e.key === "Escape") {
    {
      modal.style.display = "none";
      body.removeAttribute("class", "modal-on");
    }
  }
});
