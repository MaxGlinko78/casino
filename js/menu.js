$(".menu-btn").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("menu-btn_active");
  $(".menu-nav").toggleClass("menu-nav_active");
});

// const menuBtn = document.querySelector(".menu-btn"),
//   mMenu = document.querySelector(".menu-nav");

// menuBtn.addEventListener("click", () => {
//   console.log("menuBtn");
//   //menuBtn.classList.toggle("menu-btn_active");
//   //mMenu.classList.toggle("menu-nav_active");
// });
