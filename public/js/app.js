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
const testimonialsCarousel = () => {
  //! testimonials carousel
  let controller1 = document.querySelector("#firstController");
  let controller2 = document.querySelector("#secondController");
  let controller3 = document.querySelector("#thirdController");
  let controller4 = document.querySelector("#fourthController");
  let firstCard = document.querySelector("#firstCard");
  let secondtCard = document.querySelector("#secondCard");
  let thirdCard = document.querySelector("#thirdCard");
  let fourthCard = document.querySelector("#fourthCard");
  let fiveCard = document.querySelector("#fiveCard");
  let sixCard = document.querySelector("#sixCard");
  let carouselController = document.querySelectorAll("#controllerCarousel");
  controller1.addEventListener("click", () => {
    firstCard.style.transform = "translateX(0rem)";
    secondtCard.style.transform = "translateX(0rem)";
    thirdCard.style.transform = "translateX(0rem)";
    fourthCard.style.transform = "translateX(0rem)";
    fiveCard.style.transform = "translateX(0rem)";
    sixCard.style.transform = "translateX(0rem)";
  });
  controller2.addEventListener("click", () => {
    firstCard.style.transform = "translateX(-25rem)";
    secondtCard.style.transform = "translateX(-25rem)";
    thirdCard.style.transform = "translateX(-25rem)";
    fourthCard.style.transform = "translateX(-25rem)";
    fiveCard.style.transform = "translateX(-25rem)";
    sixCard.style.transform = "translateX(-25rem)";
  });
  controller3.addEventListener("click", () => {
    firstCard.style.transform = "translateX(-53rem)";
    secondtCard.style.transform = "translateX(-53rem)";
    thirdCard.style.transform = "translateX(-53rem)";
    fourthCard.style.transform = "translateX(-53rem)";
    fiveCard.style.transform = "translateX(-53rem)";
    sixCard.style.transform = "translateX(-53rem)";
  });
  controller4.addEventListener("click", () => {
    firstCard.style.transform = "translateX(-78rem)";
    secondtCard.style.transform = "translateX(-78rem)";
    thirdCard.style.transform = "translateX(-78rem)";
    fourthCard.style.transform = "translateX(-78rem)";
    fiveCard.style.transform = "translateX(-78rem)";
    sixCard.style.transform = "translateX(-78rem)";
  });
};
testimonialsCarousel()