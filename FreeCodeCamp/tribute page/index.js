$(".notification-close").click(function() {
  $(".alert").fadeOut("normal", function() {
    $(this).remove();
    
  });
});