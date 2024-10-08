// To Adjust the Offset in the scroll feature

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 120, // Adjusting the offset
      behavior: "smooth",
    });
  });
});
