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
  controller1.style.color = "white";
  controller2.style.color = "white";
  controller3.style.color = "white";
  controller4.style.color = "white";
  controller1.addEventListener("click", () => {
    firstCard.style.transform = "translateX(0rem)";
    secondtCard.style.transform = "translateX(0rem)";
    thirdCard.style.transform = "translateX(0rem)";
    fourthCard.style.transform = "translateX(0rem)";
    fiveCard.style.transform = "translateX(0rem)";
    sixCard.style.transform = "translateX(0rem)";
    controller1.style.color = "#cda45e";
    controller2.style.color = "white";
    controller3.style.color = "white";
    controller4.style.color = "white";
  });
  controller2.addEventListener("click", () => {
    firstCard.style.transform = "translateX(-25rem)";
    secondtCard.style.transform = "translateX(-25rem)";
    thirdCard.style.transform = "translateX(-25rem)";
    fourthCard.style.transform = "translateX(-25rem)";
    fiveCard.style.transform = "translateX(-25rem)";
    sixCard.style.transform = "translateX(-25rem)";
    controller2.style.color = "#cda45e";
    controller1.style.color = "white";
    controller3.style.color = "white";
    controller4.style.color = "white";
  });
  controller3.addEventListener("click", () => {
    firstCard.style.transform = "translateX(-53rem)";
    secondtCard.style.transform = "translateX(-53rem)";
    thirdCard.style.transform = "translateX(-53rem)";
    fourthCard.style.transform = "translateX(-53rem)";
    fiveCard.style.transform = "translateX(-53rem)";
    sixCard.style.transform = "translateX(-53rem)";
    controller3.style.color = "#cda45e";
    controller1.style.color = "white";
    controller2.style.color = "white";
    controller4.style.color = "white";
  });
  controller4.addEventListener("click", () => {
    firstCard.style.transform = "translateX(-78rem)";
    secondtCard.style.transform = "translateX(-78rem)";
    thirdCard.style.transform = "translateX(-78rem)";
    fourthCard.style.transform = "translateX(-78rem)";
    fiveCard.style.transform = "translateX(-78rem)";
    sixCard.style.transform = "translateX(-78rem)";
    controller4.style.color = "#cda45e";
    controller1.style.color = "white";
    controller3.style.color = "white";
    controller2.style.color = "white";
  });
};
testimonialsCarousel();
const specialsFilter = () => {
  let filterController = document.querySelectorAll(".filterController");
  document.querySelector("#firstDisplay").classList.add("hidden");
  document.querySelector("#secondDisplay").classList.add("hidden");
  document.querySelector("#thirdDisplay").classList.add("hidden");
  document.querySelector("#fourthDisplay").classList.add("hidden");
  document.querySelector("#fiveDisplay").classList.add("hidden");
  filterController.forEach((e) => {
    e.addEventListener("click", (e) => {
      if (e.target == document.querySelector("#firstFilter")) {
        document.querySelector("#firstDisplay").classList.remove("hidden");
        document.querySelector("#secondDisplay").classList.add("hidden");
        document.querySelector("#thirdDisplay").classList.add("hidden");
        document.querySelector("#fourthDisplay").classList.add("hidden");
        document.querySelector("#fiveDisplay").classList.add("hidden");
      } else if (e.target == document.querySelector("#secondFilter")) {
        document.querySelector("#firstDisplay").classList.add("hidden");
        document.querySelector("#secondDisplay").classList.remove("hidden");
        document.querySelector("#thirdDisplay").classList.add("hidden");
        document.querySelector("#fourthDisplay").classList.add("hidden");
        document.querySelector("#fiveDisplay").classList.add("hidden");
      } else if (e.target == document.querySelector("#thirdFilter")) {
        document.querySelector("#secondDisplay").classList.add("hidden");
        document.querySelector("#firstDisplay").classList.add("hidden");
        document.querySelector("#thirdDisplay").classList.remove("hidden");
        document.querySelector("#fourthDisplay").classList.add("hidden");
        document.querySelector("#fiveDisplay").classList.add("hidden");
      } else if (e.target == document.querySelector("#fourthFilter")) {
        document.querySelector("#secondDisplay").classList.add("hidden");
        document.querySelector("#firstDisplay").classList.add("hidden");
        document.querySelector("#thirdDisplay").classList.add("hidden");
        document.querySelector("#fourthDisplay").classList.remove("hidden");
        document.querySelector("#fiveDisplay").classList.add("hidden");
      } else if (e.target == document.querySelector("#fiveFilter")) {
        document.querySelector("#secondDisplay").classList.add("hidden");
        document.querySelector("#firstDisplay").classList.add("hidden");
        document.querySelector("#thirdDisplay").classList.add("hidden");
        document.querySelector("#fourthDisplay").classList.add("hidden");
        document.querySelector("#fiveDisplay").classList.remove("hidden");
      }
    });
  });
};
specialsFilter();
