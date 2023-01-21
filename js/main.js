// 스크롤 이벤트
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

let scr1 = document.querySelector(".main_sns");
observer.observe(scr1);

let scr2 = document.querySelectorAll(".scr2");
observer.observe(scr2[0]);
observer.observe(scr2[1]);
observer.observe(scr2[2]);

let scr3 = document.querySelector(".btn_guide");
observer.observe(scr3);

let scr4 = document.querySelector("#songdo_banner");
observer.observe(scr4);

let scr5 = document.querySelectorAll(".gallery, .academy");
observer.observe(scr5[0]);
observer.observe(scr5[1]);

let scr6 = document.querySelector(".menu_list");
observer.observe(scr6);

let scr7 = document.querySelector(".times_list");
observer.observe(scr7);

let scr8 = document.querySelector("#main_news");
observer.observe(scr8);

let scr9 = document.querySelectorAll("#event_banner");
observer.observe(scr9[0]);
observer.observe(scr9[1]);

//브랜드 페이지 스크롤 이벤트

let scr10 = document.querySelector(".service_brand");
observer.observe(scr10);



