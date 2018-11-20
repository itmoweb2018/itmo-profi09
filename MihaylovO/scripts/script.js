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
  $(document).scroll(function(){
    if ($(this).scrollTop()>=650) {
      $("body>header").css('position', 'fixed');
      $("body>header").css('background', '#2a2f4a');
    } else {
      $("body>header").css('position', 'absolute');
      $("body>header").css('background', 'none');
    }
  });
});
