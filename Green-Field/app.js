const appear = document.getElementById("appear");
const container = document.getElementById("container");
const appearAnimationEndTime = 6500;

const hideAppearAnimation = () => {
  appear.style.display = "none";
};

const appearContents = () => {
  container.classList.add("appearObject");
};

setTimeout(hideAppearAnimation, appearAnimationEndTime);
setTimeout(appearContents, appearAnimationEndTime + 100);
