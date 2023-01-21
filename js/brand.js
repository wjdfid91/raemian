let observer = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
      box.target.style.transform = "translate(0, -100px)";
    } else {
      box.target.style.opacity = 0;
    }
  });
});

let scr10 = document.querySelector(".service_brand");
observer.observe(scr10);

let scr11 = document.querySelectorAll(".brand_wrap, .photo");
observer.observe(scr11[0]);
observer.observe(scr11[1]);

let scr12 = document.querySelectorAll("#scr12");
observer.observe(scr12[0]);
observer.observe(scr12[1]);
observer.observe(scr12[2]);

let scr13 = document.querySelectorAll(".scr13");
observer.observe(scr13[0]);
observer.observe(scr13[1]);
observer.observe(scr13[2]);
