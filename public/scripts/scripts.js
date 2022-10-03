const handleThumbnails = () => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  let id = 1;
  thumbnails.forEach((thumbnail) => {
    thumbnail.id = id.toString();
    id++;

    thumbnail.addEventListener("click", () => {
      //remove selected state from all elements
      thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove("selected");
        thumbnail.parentNode.classList.remove("selected");
      });

      //add selected state to clicked element
      thumbnail.classList.add("selected");
      thumbnail.parentNode.classList.add("selected");
      changeProductImage(thumbnail.id);
    });
  });
};

const handleNavigationTheme = () => {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link) => {
        link.classList.remove("selected");
      });
      link.classList.add("selected");
    });
  });
};

const changeProductImage = (id) => {
  document.querySelector(".product").src = `./images/image-product-${id}.jpg`;
};

window.onload = () => {
  handleThumbnails();
  handleNavigationTheme();
};
