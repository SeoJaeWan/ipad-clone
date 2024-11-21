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

(function () {
  const videoEl = document.querySelector(".stage video");
  const playBtnEl = document.querySelector(".stage .controller--play");
  const pauseBtnEl = document.querySelector(".stage .controller--pause");

  playBtnEl.addEventListener("click", () => {
    videoEl.play();

    pauseBtnEl.classList.remove("hide");
    playBtnEl.classList.add("hide");
  });

  pauseBtnEl.addEventListener("click", () => {
    videoEl.pause();

    playBtnEl.classList.remove("hide");
    pauseBtnEl.classList.add("hide");
  });
})();
