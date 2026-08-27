let image = document.querySelector("#album-image");
let firstImage = true;

image.addEventListener("mouseenter", function () {
  image.style.opacity = "0";

  setTimeout(function () {
    if (firstImage) {
      image.src = "images/pexels.jpg";
      firstImage = false;
    } else {
      image.src = "images/Body-Esfahan Iran.jpeg";
      firstImage = true;
    }

    image.style.opacity = "1";
  }, 1200);
});