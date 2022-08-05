/* autocomplete */
$(function () {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $("#tags").autocomplete({
    source: availableTags
  });
});



let date = () => {
  //alert("deneme")

  document.getElementById("date_id").innerHTML = new Date();
  //$('#date_id').html( `tarih: ${new Date()}`);

  //document.getElementById("date_id").innerText=new Date();
  //$('#date_id').text(new Date());

  //document.getElementById("date_id").style.backgroundColor="blue";
  //document.getElementById("date_id").style.color="white";
  // $("#date_id").css("background-color","blue").css("color","white")

  const cssObject = {
    "color": "red",
    "background-color": "black",
    "box-shadow": "1px 1px 3px 1px rgba(255,255,255,.8)",
    "margin-bottom": "3rem"
  }
  $("#date_id").css(cssObject);
  //autocomplete 
  //backtotop
}


/* login value and validation*/
$(function () {
  $("#btnSubmit").click(function () {
    let email, password;
    email = jQuery.trim($("#user_email").val());
    password = jQuery.trim($("#user_password").val());


    //validation  email
    if (email == "") {
      $("#validation_email").html("Email boş geçilemez...")
    } else if (regexEmail(email) == false) {
      $("#validation_email").html("Uygun formatta email girilmedi exam: deneme@gmail.com")
    }

    //regex email
    function regexEmail(email) {
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }

    //validation  password
    if (password == "") {
      $("#validation_password").html("password boş geçilemez...")
    } else if (regexPassword(password) == false) {
      $("#validation_password").html("Uygun formatta  şifre girilmedi exam: en az 8 karakter")
    }

    //regex email
    function regexPassword(password) {
      let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
      return regex.test(password);
    }
  })//onclick close
}); //document ready close
/////////////////////////////////////////////////////////////////


/* register value and validation*/
$(function () {
  $("#btnSubmit2").click(function () {
      let registerName, registerEmail, registerPassword;
      registerName = jQuery.trim($("#register_name").val());
      registerEmail = jQuery.trim($("#register_email").val());
      registerPassword = jQuery.trim($("#register_password").val());

      //validation registerName
      if (registerName == "") {
          $("#validation_registerName").html("Kullanıcı adı boş geçilemez...")
      }
      else if (regexName(registerName) == false) {
          $("#validation_registerName").html("Kullanıcı adı uygun formatta değil, örnek: türkçe karakter içermemeli")
      }

      //regex registerName
      function regexName(registerName) {
          let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(registerName);
      }

      //validation registerEmail
      if (registerEmail == "") {
          $("#validation_registerEmail").html("Email boş geçilemez...")
      }
      else if (regexEmail(registerEmail) == false) {
          $("#validation_email").html("Uygun formatta email girilmedi, örnek: deneme@gmail.com")
      }

      //regex email
      function regexEmail(registerEmail) {
          let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(registerEmail);
      }

      //validation registerPassword
      if (registerPassword == "") {
          $("#validation_registerPassword").html("şifre boş geçilemez...")
      }
      else if (regexPassword(registerPassword) == false) {
          $("#validation_registerPassword").html("Uygun formatta  şifre girilmedi, örnek: en az 8 karakter")
      }

      //regex registerPassword
      function regexPassword(registerPassword) {
          let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
          return regex.test(registerPassword);
      }

  }) // onclick close
}); // document ready close


///////////////////////////////////////////////////////////////

// jQuery counterUp (used in Whu Us section)
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 1000
});


///////////////////////////////////////////////////////////////
// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
      $('#back_top').fadeIn('slow');
  } else {
      $('#back_top').fadeOut('slow');
  }
});
$('#back_top').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 100, 'easeInOutExpo');
  return false;
});