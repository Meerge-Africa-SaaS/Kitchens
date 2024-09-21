const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle mobile menu visibility when the hamburger menu is clicked
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const navbar = document.getElementById("navbar");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "text-black");
    navbar.classList.remove("bg-transparent", "text-white");
  } else {
    navbar.classList.add("bg-transparent", "text-white");
    navbar.classList.remove("bg-white", "text-black");
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const menuBtn = document.getElementById("menu-btn");
//   const mobileMenu = document.getElementById("mobile-menu");

//   menuBtn.addEventListener("click", () => {
//     mobileMenu.classList.toggle("hidden");
//   });
// });

function showFAQ(faqId) {
  const faqAnswers = {
    1: "This is our state of the art kitchen facility, equipped with modern cooking gadgets and utensils, where seasoned chefs are on standby to prepare tasty meals in a great ambience and with the best tools at their disposal to serve their customers who request in their convenience.",
    2: "Art kitchen facility, equipped with modern cooking gadgets and utensils, where seasoned chefs are on standby to prepare tasty meals in a great ambience and with the best tools at their disposal to serve their customers who request in their convenience.",
    3: "Our state of the art kitchen facility, equipped with modern cooking gadgets and utensils, where seasoned chefs are on standby to prepare tasty meals in a great ambience and with the best tools at their disposal to serve their customers who request in their convenience.",
    4: "State of the art kitchen facility, equipped with modern cooking gadgets and utensils, where seasoned chefs are on standby to prepare tasty meals in a great ambience and with the best tools at their disposal to serve their customers who request in their convenience.",
    5: "An state of the art kitchen facility, equipped with modern cooking gadgets and utensils, where seasoned chefs are on standby to prepare tasty meals in a great ambience and with the best tools at their disposal to serve their customers who request in their convenience.",
  };

  const responseContainer = document.querySelector(".faq-response-content");

  if (faqAnswers[faqId]) {
    responseContainer.innerHTML = `
        <h2 class="text-5xl font-bold mb-4" style="color:#fd0000">We replied:</h2>
        <p class="text-gray-700 mt-10">${faqAnswers[faqId]}</p>
      `;
  } else {
    responseContainer.innerHTML = `
        <h2 class="text-5xl font-bold mb-4" style="color:#fd0000">We replied:</h2>
        <p class="text-gray-700">Sorry, no information available for this question.</p>
      `;
  }

  document
    .querySelectorAll(".faq-item")
    .forEach((item) => item.classList.remove("active"));

  const clickedItem = document.querySelector(
    `.faq-item[data-faq-id="${faqId}"]`
  );
  if (clickedItem) {
    clickedItem.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed-output", {
    strings: ["How", "When", "Where"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: false,
  });
});
