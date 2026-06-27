document.querySelectorAll(".carousel").forEach((carousel) => {
  const track = carousel.querySelector(".carousel__track");
  const slides = Array.from(track.children);
  const nextButton = carousel.querySelector(".carousel__button--right");
  const prevButton = carousel.querySelector(".carousel__button--left");
  const dotsNav = carousel.nextElementSibling;
  const dots = Array.from(dotsNav.children);

  const slideWidth = slides[0].getBoundingClientRect().width;

  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
  });

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  };

  const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
      prevButton.classList.add("is-hidden");
      nextButton.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.add("is-hidden");
    } else {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.remove("is-hidden");
    }
  };

  // click left
  prevButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
  });

  // click right
  nextButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
  });

  // click dot
  dotsNav.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");
    if (!targetDot) return;
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
  });

  // Drag / swipe
  const THRESHOLD = 50;
  let dragStartX = 0;
  let isDragging = false;

  const getX = (e) => {
    if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0].clientX;
    if (e.touches && e.touches.length) return e.touches[0].clientX;
    return e.clientX;
  };

  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    dragStartX = getX(e);
    carousel.style.cursor = "grabbing";
  });

  carousel.addEventListener("touchstart", (e) => {
    dragStartX = getX(e);
  }, { passive: true });

  const endDrag = (e) => {
    if (!isDragging) return;
    isDragging = false;
    carousel.style.cursor = "";

    const diff = dragStartX - getX(e);
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const currentIndex = slides.indexOf(currentSlide);

    if (diff > THRESHOLD && currentIndex < slides.length - 1) {
      const nextSlide = slides[currentIndex + 1];
      const nextDot = dots[currentIndex + 1];
      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
      hideShowArrows(slides, prevButton, nextButton, currentIndex + 1);
    } else if (diff < -THRESHOLD && currentIndex > 0) {
      const prevSlide = slides[currentIndex - 1];
      const prevDot = dots[currentIndex - 1];
      moveToSlide(track, currentSlide, prevSlide);
      updateDots(currentDot, prevDot);
      hideShowArrows(slides, prevButton, nextButton, currentIndex - 1);
    }
  };

  carousel.addEventListener("mouseup", endDrag);
  carousel.addEventListener("mouseleave", (e) => { if (isDragging) endDrag(e); });
  carousel.addEventListener("touchend", endDrag);
});
