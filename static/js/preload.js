const imagesPreload = document.querySelectorAll(".preload");
const arrayPreloaded = [];

imagesPreload.forEach((img) => {
  // Preload img scr
  let imgSrc = img.src;
  if (!arrayPreloaded.includes(imgSrc) && imgSrc !== "") {
    preloadImage(imgSrc);
    arrayPreloaded.push(imgSrc);
  }

  // Preload full image if needed
  /*let imgFull = img.getAttribute("data-full");
  if (imgFull !== null && imgFull !== "" && !arrayPreloaded.includes(imgFull)) {
    preloadImage(imgFull);
    arrayPreloaded.push(imgFull);
  }*/

  let imgPreview = img.getAttribute("data-preview");
  if (imgPreview !== null && imgPreview !== "" && !arrayPreloaded.includes(imgPreview)) {
    preloadImage(imgPreview);
    arrayPreloaded.push(imgPreview);
  }
});

function preloadImage(url) {
  new Image().src = url;
  console.log(`[i] Preloaded: ${url}`);
}
