$(document).ready(function(){
    $('#signing').hide();
    $('#signedup').hide();
    $('#errorSigning').hide();
    $('#errorSigningDup').hide();
    var fname, lname, email, role;
    $("#submit").click(function(){
      $('#unsigned').hide();
      $('html, body').animate({
        scrollTop: $("#signupFiller").offset().top
      }, 1000);
      $('#signing').show();
      fname=$("#first").val();
      lname=$("#last").val();
      email=$("#email").val();
      role=$("#occu").val();
      $.post("/api/subscriber/new",{fname: fname,lname: lname, email: email,role: role}, function(data){
            if(data['message'] === "New subscriber created") {
                $('#signing').hide();
                $('#signedup').show();
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 1000);
            }
      }).fail(function(data){
        if(data['responseJSON']['message'] === "Duplicate Key") {
            $('#signing').hide();
            $('#errorSigningDup').show();
            $('html, body').animate({
                scrollTop: $("#contact").top
            }, 1000);
        }
        else {
            $('#signing').hide();
            $('#errorSigning').show();
            $('html, body').animate({
                scrollTop: $("#contact").top
            }, 1000);
        }
      });
    });
  });