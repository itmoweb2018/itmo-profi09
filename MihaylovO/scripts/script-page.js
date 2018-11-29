$(function(){
  $("#close").on("click", function() {
    $(".modal-menu").css('display', 'none');
    $("body").css('overflow', 'auto');
  });
  $("#open").on("click", function() {
    $(".modal-menu").css('display', 'flex');
    $("body").css('overflow', 'hidden');
    // blur(3)
  });
});