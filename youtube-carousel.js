const track = document.getElementById("carousel-track");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let position = 0;
const cardWidth = 340; // Card width + margin (320px + 24px)
const totalCards = track.children.length;

function updateButtons() {
  prevButton.disabled = position >= 0;
  nextButton.disabled =
    position <=
    -(cardWidth * (totalCards - Math.floor(track.offsetWidth / cardWidth)));
}

prevButton.addEventListener("click", () => {
  position += cardWidth;
  if (position > 0) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
  updateButtons();
});

nextButton.addEventListener("click", () => {
  position -= cardWidth;
  const maxPosition = -(
    cardWidth *
    (totalCards - Math.floor(track.offsetWidth / cardWidth))
  );
  if (position < maxPosition) {
    position = maxPosition;
  }
  track.style.transform = `translateX(${position}px)`;
  updateButtons();
});

// Initial button state
window.addEventListener("load", updateButtons);
window.addEventListener("resize", () => {
  // Reset position on resize to avoid overflow issues
  position = 0;
  track.style.transform = `translateX(${position}px)`;
  updateButtons();
});
