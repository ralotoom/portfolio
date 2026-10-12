const avatar = document.getElementById("avatar");
const photoShell = document.getElementById("photoShell");
const caption = document.getElementById("profileCaption");
const hint = document.getElementById("hint");
const choices = document.querySelectorAll(".choice");
let switchToken = 0;

choices.forEach(button => {
  button.addEventListener("click", () => {
    const token = ++switchToken;
    const nextImage = button.dataset.image;
    const nextAlt = button.dataset.alt;
    const nextCaption = button.dataset.caption;
    if (avatar.getAttribute("src").endsWith(nextImage)) {
      hint.textContent = "This portrait is already selected.";
      return;
    }
    avatar.classList.add("changing");
    choices.forEach(choice => {
      const selected = choice === button;
      choice.classList.toggle("active", selected);
      choice.setAttribute("aria-pressed", String(selected));
    });
    window.setTimeout(() => {
      if (token !== switchToken) return;
      avatar.src = `assets/${nextImage}`;
      avatar.alt = nextAlt;
      caption.textContent = nextCaption;
      avatar.onload = () => {
        avatar.classList.remove("changing");
        hint.textContent = `Showing: ${nextCaption}. The page did not reload.`;
      };
      avatar.onerror = () => {
        avatar.classList.remove("changing");
        hint.textContent = "This image could not be loaded. Check the assets folder.";
      };
    }, 180);
  });
});
