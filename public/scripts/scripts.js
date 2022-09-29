const handleThumbnails = () => {
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove("selected");
        thumbnail.parentNode.classList.remove("selected");
      });

      thumbnail.classList.add("selected");
      thumbnail.parentNode.classList.add("selected");
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

window.onload = () => {
  handleThumbnails();
  handleNavigationTheme();
};
