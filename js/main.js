let tlinks=document.querySelector(".navbar");
let toggleBtn=document.querySelector(".toggle-menu");

toggleBtn.addEventListener("click", () => {
    tlinks.classList.toggle("open");
  });