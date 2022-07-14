const imagesPreload = document.querySelectorAll(".preload");

imagesPreload.forEach((img) => {
  preloadImage(img.src);
  let imgFull = img.getAttribute("full");
  if (imgFull !== null) {
    preloadImage(img.getAttribute("full"));
  }
});

function preloadImage(url) {
  new Image().src = url;
  console.log(url);
}
