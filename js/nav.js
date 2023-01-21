$(function () {
  let depth1 = $(".menu"),
    header = $("header");

  //depth1에 마우스가 올라가면  header의 길이를 500px로 하여라.
  depth1
    .mouseenter(function () {
      header.stop().animate({ height: "500px" });
    })
    .mouseleave(function () {
      header.stop().animate({ height: "91px" });
    });
  //depth1에 마우스가 떠나면 header 높이(길이) 91px로 하여라.
}); //ready
