const headerJs = () => {
  let menuBtn = document.querySelector("#open");
  let closeBtn = document.querySelector("#close");
  let navBar = document.querySelector(".navLinks");
  let dropDown = document.querySelector(".dropDownDiv");
  let dropDownSelect = document.querySelector(".dropDownSelect");
  let openModal = document.querySelector(".openModal");
  let closeModal = document.querySelector(".closeModal");
  let modalDiv = document.querySelector(".modalDiv");
  menuBtn.addEventListener("click", () => {
    navBar.style.top = "50%";
  });
  closeBtn.addEventListener("click", () => {
    navBar.style.top = "-200%";
  });

  dropDown.addEventListener("mouseover", () => {
    dropDownSelect.classList.remove("hidden");
  });
  dropDownSelect.addEventListener("mouseout", () => {
    dropDownSelect.classList.add("hidden");
  });
  openModal.addEventListener("click", () => {
    modalDiv.style.top = "2vh";
  });
  closeModal.addEventListener("click", () => {
    modalDiv.style.top = "-200%";
  });
};
headerJs();
