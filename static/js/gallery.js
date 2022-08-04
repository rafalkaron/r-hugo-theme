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
let modalExifMetadataUnordered = document.querySelector(
  ".modal-exif-metadata-unordered"
);
let modalExifClose = document.querySelector(".modal-exif-close");
let exifIcons = document.querySelectorAll(".icon.info");
let modalExifIcon = document.querySelector(".icon.modal-info");

function formatExif(exifData) {
  // Do not accumulate lis
  removeAllChildNodes(modalExifMetadata);

  Object.entries(exifData).forEach(([key, value]) => {
    let keyNice = "";
    switch (key) {
      case "aperture":
        keyNice = "Aperture";
        break;
      case "datetimeoriginal":
        keyNice = "Time";
        break;
      case "iso":
        keyNice = "ISO";
        break;
      case "focallength":
        keyNice = "Focal length";
        break;
      case "lensmodel":
        keyNice = "Lens";
        break;
      case "model":
        keyNice = "Camera";
        break;
      case "shutterspeed":
        keyNice = "Speed";
        break;
      default:
        break;
    }

    let liElem = document.createElement("li");
    liElem.setAttribute("class", `exif-li`);
    liElem.setAttribute("id", `${key}`);

    let spanKeyElem = document.createElement("span");
    spanKeyElem.setAttribute("class", "exif-key");
    spanKeyElem.textContent = keyNice;

    let spanSepElem = document.createElement("span");
    spanSepElem.setAttribute("class", "exif-sep");
    spanSepElem.textContent = ": ";

    let spanValueElem = document.createElement("span");
    spanValueElem.setAttribute("class", "exif-value");
    spanValueElem.textContent = value;

    // Append elements to hidden unordered container
    liElem.appendChild(spanKeyElem);
    liElem.appendChild(spanSepElem);
    liElem.appendChild(spanValueElem);
    modalExifMetadataUnordered.appendChild(liElem);
  });

  // Order elements
  modelElem = modalExifMetadataUnordered.querySelector("#model");
  if (modelElem !== null) {
    modalExifMetadata.appendChild(modelElem);
  }

  lensElem = modalExifMetadataUnordered.querySelector("#lensmodel");
  if (lensElem !== null) {
    modalExifMetadata.appendChild(lensElem);
  }

  focalElem = modalExifMetadataUnordered.querySelector("#focallength");
  if (focalElem !== null) {
    modalExifMetadata.appendChild(focalElem);
  }

  shutterElem = modalExifMetadataUnordered.querySelector("#shutterspeed");
  if (shutterElem !== null) {
    modalExifMetadata.appendChild(shutterElem);
  }

  apertureElem = modalExifMetadataUnordered.querySelector("#aperture");
  if (apertureElem !== null) {
    modalExifMetadata.appendChild(apertureElem);
  }

  isoElem = modalExifMetadataUnordered.querySelector("#iso");
  if (isoElem !== null) {
    modalExifMetadata.appendChild(isoElem);
  }

  dateElem = modalExifMetadataUnordered.querySelector("#datetimeoriginal");
  if (dateElem !== null) {
    modalExifMetadata.appendChild(dateElem);
  }
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
    this.preview = galleryImage.getAttribute("data-preview");
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

    if (this.preview !== null) {
      this.popupImage.setAttribute("src", this.preview);
    } else {
      this.popupImage.setAttribute("src", this.src);
    }

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
      formatExif(exifData);
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
  if (
    e.key === "ArrowRight" &&
    nextGalleryImage !== null &&
    modalExif.style.display === "none"
  ) {
    {
      if (
        body.getAttribute("class") === "modal-on" &&
        modalExif.style.display === "none"
      ) {
        let nextGalleryItem = new galleryItem(nextGalleryImage);
        nextGalleryItem.initModal();
      }
    }
  } else if (e.key === "ArrowLeft" && prevGalleryImage !== null) {
    {
      if (
        body.getAttribute("class") === "modal-on" &&
        modalExif.style.display === "none"
      ) {
        let prevGalleryItem = new galleryItem(prevGalleryImage);
        prevGalleryItem.initModal();
      }
    }
  } else if (e.key === "ArrowDown") {
    {
      if (
        body.getAttribute("class") === "modal-on" &&
        modalExif.style.display === "none"
      ) {
        let firstGalleryItem = new galleryItem(firstGalleryImage);
        firstGalleryItem.initModal();
      }
    }
  } else if (e.key === "ArrowUp") {
    {
      if (
        body.getAttribute("class") === "modal-on" &&
        modalExif.style.display === "none"
      ) {
        let lastGalleryItem = new galleryItem(lastGalleryImage);
        lastGalleryItem.initModal();
      }
    }
  } else if (e.key === "Escape") {
    {
      if (modalExif.style.display !== "none") {
        modalExif.style.display = "none";
      } else {
        modal.style.display = "none";
      }
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
    formatExif(exifData);
  });
});

modalExifClose.onclick = () => {
  modalExif.style.display = "none";
  body.removeAttribute("class", "modal-on");
};
