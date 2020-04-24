document.addEventListener("DOMContentLoaded", function () {
  // плавная прокрутка
  const links = document.querySelectorAll(".smooth-scroll");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const BlockID = link.getAttribute("href").substr(1);

      document.getElementById(BlockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  const img = document.querySelectorAll(".second-section-item__image")[0];
  let interval;
  let deg = 0;

  img.addEventListener("mouseenter", function () {
    interval = setInterval(function () {
      img.style.transform = `rotate(${deg}deg)`;
      deg++;
    }, 5);
  });

  img.addEventListener("mouseleave", function () {
    clearInterval(interval);
  });
});
