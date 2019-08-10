// Your code goes here

// load event listener for logo
nav = document.querySelector(".main-navigation");
nav.style.cssText = "transform: translate(0, -100px);z-index: 99999;";
const grayOut = () => {
  nav.style.cssText = "transform:translate(0, 0);transition: all 2s ease-out;z-index: 99999";
};
window.addEventListener("load", grayOut);

nav.addEventListener('transitionend', (event)=>{
  nav.style.cssText = ""
})

// resize event listener for nav to stack.
const stackNav = ({ target }) => {
  if (target.innerWidth > 800) {
    nav.querySelector(".nav-container").style.display = "flex";
    nav.querySelectorAll(".nav-link").forEach(link => {
      link.style.display = "flex";
    });
    nav.querySelector(".nav").style.display = "flex";
    nav.style.paddingBottom = "0";
  } else {
    nav.querySelector(".nav-container").style.display = "block";
    nav.querySelectorAll(".nav-link").forEach(link => {
      link.style.display = "block";
    });
    nav.querySelector(".nav").style.display = "block";
    nav.style.paddingBottom = "200px";
  }
};
window.addEventListener("resize", stackNav);

// preventDefault() for the Home nav link. no more # added to the url path.

nav.querySelector(".nav-link").addEventListener('click', (event)=>{event.preventDefault()})

// scroll event listener

headerImg = document.querySelector(".intro img");
window.addEventListener("scroll", () => {
  headerImg.style.cssText =
    "transform: translate(10000px, 0);transition: all 1s ease-out;";
  setTimeout(() => {
    headerImg.style.cssText = "transition: all 2s ease-out;";
  }, 1000);
});

// mouseenter and mouseleave event listeners for all .nav-link elements.
navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.style.cssText = "padding: 1rem;";
  link.addEventListener("mouseenter", ({ target }) => {
    target.style.cssText =
      "color: white; background: black;padding: 1rem;transition: all 0.5s ease-out;";
  });
  link.addEventListener("mouseleave", ({ target }) => {
    target.style.cssText = "padding: 1rem;transition: all 0.5s ease-out;";
  });
});

// double-click and drag event listener for each .img-content element.
contentSection = document.querySelectorAll(".content-section");
contentSection[0]
  .querySelector(".img-content img")
  .addEventListener("drag", ({ target }) => {
    target.style.cssText =
      "transform: translate(1000px, 0);transition: all 0.5s ease-out;";
    setTimeout(() => {
      target.style.cssText = "transition: all 2s ease-out;";
    }, 1000);
  });
contentSection[1]
  .querySelector(".img-content img")
  .addEventListener("dblclick", ({ target }) => {
    target.style.cssText = "transform:rotate(360deg);transition: all 0.5s;";
    setTimeout(() => {
      target.style.cssText = "transition: all 0.5s;";
    }, 1000);
  });

// keydown and wheel event listener for .content-destination image. demonstrate .stopPropagation()
contentDestination = document.querySelector(".content-destination");
imgDestination = document.querySelector(".content-destination img");
document.body.addEventListener("keydown", () => {
  document.body.style.cssText =
    "background-color: darkgray;transition: all 0.5s ease-out;";

  setTimeout(() => {
    document.body.style.cssText = "transition: all 0.5s ease-out;";
  }, 1000);
});
contentDestination.addEventListener("wheel", event => {
  //
  imgDestination.style.cssText = "opacity: 0.4;transition: all 0.5s ease-out;";
});

// click event listeners for the .destination container and the buttons and .stopPropagation()
destinations = document.querySelectorAll(".destination");
destinations.forEach(destination => {
  destination.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
    });
  });
  destination.addEventListener("click", event => {
    event.currentTarget.querySelector("h4").style.fontWeight = "bold";
  });
});
