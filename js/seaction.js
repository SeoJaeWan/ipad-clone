const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add("show");
  });
});

(function () {
  const infoEls = document.querySelectorAll(".info");

  infoEls.forEach((el) => {
    io.observe(el);
  });
})();
