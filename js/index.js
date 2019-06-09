// header color change
let mainHeader = document.querySelector("header");
mainHeader.style.backgroundColor = "seashell";

//logo mouseover
let logo = document.querySelector(".logo-heading");
logo.addEventListener(
  "mouseover",
  event => {
    event.target.style.color = "orange";

    setTimeout(function() {
      event.target.style.color = "black";
    }, 500);
  },
  false
);

//nav links mouseover
let mainNav = document.querySelectorAll(" a ");
for (let i = 0; i < mainNav.length; ++i) {
  mainNav[i].addEventListener(
    "mouseover",
    event => {
      event.target.style.color = "orange";

      setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    },
    false
  );
}

let container = document.querySelectorAll(".container .home");
container.addEventListener("scroll", function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    container.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
let containerHome = doucument.querSelector(".intro img");

let letsgo = document.querySelectorAll("");
