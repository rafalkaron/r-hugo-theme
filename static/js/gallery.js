const images = document.querySelectorAll(".popup");
console.log(images);
let imgSrc;
// get images src onclick
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    //run modal function
    imgModal(imgSrc);
  });
});

//managing the modal
let imgModal = (src) => {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";

  //add image src to modal
  popupImage = document.querySelector("img.to-popup");
  popupImage.setAttribute("src", src);
  //close function
  modal.onclick = () => {
    modal.style.display = "none";
  };
};
