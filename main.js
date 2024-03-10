window.addEventListener("scroll", function () {
  let scrollPosition = window.pageYOffset;
  document.querySelector(".parallax").style.backgroundPosition = `50% ${
    scrollPosition * 0.4
  }px`;
});
