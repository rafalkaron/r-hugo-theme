const galleryImages = document.querySelectorAll(".popup");

// Img details
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

// UI elements
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
let modalClose = document.querySelector(".modal-close");
let modalPrevButton = document.querySelector(".modal-prev");
let modalNextButton = document.querySelector(".modal-next");

const modalExif = document.querySelector(".modal-exif");
let modalExifMetadata = document.querySelector(".modal-exif-metadata");
let modalExifClose = document.querySelector(".modal-exif-close");
let exifIcons = document.querySelectorAll(".icon.info");
let modalExifIcon = document.querySelector(".icon.modal-info");

function formatExif(json) {
  obj = JSON.parse(json);
  str = "";
  Object.entries(obj).forEach(([key, value]) => {
    str = `${str} \n ${key}: ${value}`; // key - value
  });
  return str;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

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
    this.exif = galleryImage.parentElement.getAttribute("data-exif");
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
    modalCounter.textContent = totalGalleryImages;

    if (this.location !== null) {
      modalLocation.style.display = "inline";
    } else {
      modalLocation.style.display = "none";
    }

    currentGalleryImage = document.querySelector(`#item-${this.no} img`);
    this.popupImage.onclick = () => {
      modal.style.display = "none";
      body.removeAttribute("class", "modal-on");
    };
    nextGalleryImage = document.querySelector(
      `#item-${parseInt(this.no) + 1} img`
    );
    prevGalleryImage = document.querySelector(
      `#item-${parseInt(this.no) - 1} img`
    );

    modalExifIcon.onclick = () => {
      body.setAttribute("class", "modal-on");
      modalExif.style.display = "flex";

      let exifData = JSON.parse(this.exif);
      removeAllChildNodes(modalExifMetadata);

      Object.entries(exifData).forEach(([key, value]) => {
        let text = `${key}: ${value}`;
        let liElem = document.createElement("li");
        liElem.textContent = text;
        modalExifMetadata.appendChild(liElem);
      });
    };
  }
}

// Iterate over every image in the gallery
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
      modalExif.style.display = "none";
      body.removeAttribute("class", "modal-on");
    }
  }
});

// Add mouse events
modalClose.onclick = () => {
  modal.style.display = "none";
  body.removeAttribute("class", "modal-on");
};
modalPrevButton.onclick = () => {
  if (prevGalleryImage !== null) {
    let prevGalleryItem = new galleryItem(prevGalleryImage);
    prevGalleryItem.initModal();
  }
};
modalNextButton.onclick = () => {
  if (nextGalleryImage !== null) {
    let nextGalleryItem = new galleryItem(nextGalleryImage);
    nextGalleryItem.initModal();
  }
};

// EXIF
exifIcons.forEach((exifIcon) => {
  exifIcon.addEventListener("click", () => {
    body.setAttribute("class", "modal-on");
    modalExif.style.display = "flex";

    exifData = JSON.parse(exifIcon.getAttribute("data-exif"));
    removeAllChildNodes(modalExifMetadata);
    Object.entries(exifData).forEach(([key, value]) => {
      let text = `${key}: ${value}`;
      let liElem = document.createElement("li");
      liElem.textContent = text;
      modalExifMetadata.appendChild(liElem);
    });
  });
});

modalExifClose.onclick = () => {
  modalExif.style.display = "none";
  body.removeAttribute("class", "modal-on");
};
