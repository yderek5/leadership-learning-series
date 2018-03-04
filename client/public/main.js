$(document).ready(function() {
    // This handles clearing the contact form
    $('#contact-form').on('submit', function(e) {
        $('.form-control').val('');

        $('#formArea').append("<br><div class='alert alert-success'>Thank You! We have recieved your message.</div>");
    });
// ===========================================================================
    
})