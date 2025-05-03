/** @format */

$(".footer__more").click(function () {
  let moreText = $(".footer__text");
  if (moreText.css("max-height") === "max-content") {
    $(this).text("مشاهده بیشتر");
    moreText.css("max-height", "4rem");
  } else {
    $(this).text("بستن");
    moreText.css("max-height", "max-content");
  }
});
