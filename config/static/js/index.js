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

function showFAQ(faqId, typingSpeed = 50, defaultPosition = false) {
  console.log("faqId:", faqId)
  const faqAnswers = {
    0: " We have answers for you! Explore some of the most asked questions from our eager users on the timeline. Feel free to also send us a mail for further inquiry on info@kittchens.com ",
     1: "This is our ready-to-use state of the art kitchen facility at strategic city spots. It is equipped with modern cooking gadgets and utensils. Seasoned chefs use our bespoke spaces to prepare tasty meals in a great ambience using the best tools at their disposal. Chefs are on standby to serve their customers who request meals at their convenience.",
     2: "You can use Kittchen’s app to order pastries or request food delivery from our cloud kittchen’s, or from your favorite restaurant from wherever you are. Explore options from customizing your orders and making tailored reservations on your smartphone.",
     3: "Our Kittchen’s Pastries outlets is coming to every major street in your neighborhood. From mouthful burgers to tasty pies, we will be right around the corner, whenever you just want to snack and chill. It is less junk, when it is healthy.",
     4: "Food outlets and lovers use our Kittchen’s logistics service to transport food items and fulfil delivery orders in your city and across the country. Cyclist and truck drivers can join our team of savvy drivers to make some cool cash. Download the mobile app now to get started.",
     5: "Absolutely! Enlist your restaurant or food outlet on Meerge, our management system for food businesses. Manage all orders, monitor your inventory, source ingredients and organize your business operations all in one place.",
   };
  const responseContainer = document.querySelector(".faq-response-content");

  // Clear the container before typing starts
  responseContainer.innerHTML = `
    <h2 class="text-5xl font-bold mb-4" style="color:#fd0000">${defaultPosition ? "You've got question for us?" : "We replied:"}</h2>
    <p class="text-gray-700 mt-10" id="typed-answer"></p>
  `;

  const answerText = faqAnswers[faqId];
  const typedAnswer = document.getElementById('typed-answer');
  let i = 0; // Start from first character

  function typeWriter() {
    if (i < answerText.length) {
      typedAnswer.innerHTML += answerText.charAt(i); // Add one character at a time
      i++;
      setTimeout(typeWriter, typingSpeed); // Control the typing speed
    }
  }

  typeWriter(); // Start typing

  // Mark the clicked FAQ item as "active"
  document.querySelectorAll(".faq-item").forEach(item => item.classList.remove("active"));
  const clickedItem = document.querySelector(`.faq-item[data-faq-id="${faqId}"]`);
  if (clickedItem) {
    clickedItem.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  showFAQ(0, 50, true);
})

// document.addEventListener("DOMContentLoaded", function () {
//   var typed = new Typed("#typed-output", {
//     strings: ["&nbsp;How", "When", "Where"],
//     typeSpeed: 100,
//     backSpeed: 50,
//     loop: true,
//     showCursor: false,
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed-output", {
    strings: [
      '<span style="    margin-left: -1px;">How</span>',  
      "When", 
      "Where"
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: false,
  });
});