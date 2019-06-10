// header color change
let mainHeader = document.querySelector("header");
mainHeader.style.backgroundColor = "seashell";
mainHeader.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("home nav item was clicked!");
});

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

//wheel event
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  img1.style.transform = `scale(${scale})`;
}
let scale = 1;
const img1 = document.querySelector(".intro img");
img1.onwheel = zoom;

///double click
document.querySelector(".btn").addEventListener("dblclick", myFunction);

function myFunction() {
  document.querySelector(".btn").innerHTML = "Enjoy Your Stay!";
}

//click
function myFunction() {
  let content;
  if (confirm("Press a button!")) {
    content = "You pressed OK!";
  } else {
    content = "You pressed Cancel!";
  }
  document.getElementsByClassName(".btn").innerHTML = content;
}

//resize
window.addEventListener("resize", function() {
  document.getElementsByTagName("p").innerHTML = Math.random();
});

//keydown
window.addEventListener("keydown", event => {
  if (event.key == " " && event.ctrlKey) {
    console.log("Continuing!");
  }
});

//scroll
/*document.body.appendChild(
  document.createTextNode("This is the scroll ".repeat(1))
);*/

let bar = document.querySelector("");
window.addEventListener("scroll", () => {
  let max = document.body.scrollHeight - innerHeight;
  bar.style.width = `${(pageYOffset / max) * 100}%`;
});

// focus
for (let field of Array.from(fields)) {
  field.addEventListener("focus", event => {
    let text = event.target.getAttribute("data-help");
    help.textContent = text;
  });
  field.addEventListener("blur", event => {
    help.textContent = "";
  });
}

///touch event
