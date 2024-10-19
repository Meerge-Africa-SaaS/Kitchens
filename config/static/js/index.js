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
    0: "Got questions? We’ve got answers! Check out some of the most frequently asked questions from our enthusiastic users on the timeline. For additional inquiries, don’t hesitate to email us at info@kittchens.com.",
    
    1: "Our state-of-the-art kitchen facilities are located in strategic city spots, equipped with modern cooking gadgets and utensils. Seasoned chefs use these bespoke spaces to prepare delicious meals in a great ambiance, utilizing the best tools available. Chefs are on standby to serve customers who request meals at their convenience.",
    
    2: "With Kittchen’s app, you can order pastries or request food delivery from our cloud kitchens or your favorite restaurant, no matter where you are. Explore options for customizing your orders and making tailored reservations right from your smartphone.",
    
    3: "Kittchen’s Pastries outlets are coming to every major street in your neighborhood! From mouthwatering burgers to delicious pies, we’ll be right around the corner whenever you want to snack and relax. It’s less junk food when it’s healthy.",
    
    4: "Food outlets and enthusiasts can use Kittchen’s logistics service to transport food items and fulfill delivery orders within your city and across the country. Cyclists and truck drivers can join our team of savvy drivers to earn some extra cash. Download the mobile app now to get started.",
    
    5: "Absolutely! You can enlist your restaurant or food outlet on Meerge, our management system for food businesses. Manage all orders, monitor your inventory, source ingredients, and organize your business operations—all in one place."
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