$(".tab a").click(function () {
  $("a").removeClass("active");
  $(this).toggleClass("active");
});