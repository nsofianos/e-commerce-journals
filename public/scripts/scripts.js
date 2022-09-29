window.onload = () => {
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

  // add script to html ->
  //for each thumbnail ->
  //addeventlistener click ->
  //toggle off actives ->
  //toggle on current active
};
