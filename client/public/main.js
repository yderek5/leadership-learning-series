$(document).ready(function() {
    // This handles clearing the contact form
    $('#contact-form').on('submit', function(e) {
        $('.form-control').val('');

        $('#formArea').append("<br><div class='alert alert-success'>Thank You! We have recieved your message.</div>");
    });
// ===========================================================================
$(window).scroll(function() {
    if ($(document).scrollTop() > 1) {
      $('nav').addClass('shrink');
      $('#navbarSupportedContent').addClass('shrink');
      $('.nav-link').addClass('shrink');
      $('.logo').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
      $('#navbarSupportedContent').removeClass('shrink');
      $('.nav-link').removeClass('shrink');
      $('.logo').removeClass('shrink');
    }
  });
});