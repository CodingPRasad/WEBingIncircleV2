//function styleBox() {
//
//var userInput= document.getElementById('invite-emails').value;
//$(this).text("");
//var splitInput=$(this).text().split(",");    //userInput.split(",");
//    if(.which === 188) {
//userInput.style ="background-color:red";
//    }
//for(var i=0; i< splitInput.length; i++) {
//$(this).append("<span style='background-color:red'>"+splitInput[i]+((i<splitInput.length-1) ? ",":"")+"</span>");
//}
//};
//$("#invite-emails").keyup(function(e){
//if(e.which === 188) { 
//
//styleBox.apply();
//}});

//+++++++++++++++   Jquery for Modal Hide show  ++++++++++++++++++++++


  $body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }    
});
$(document).ready(function() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
   getBrowser();
}
     
    
    $('.login-signup').hide();
    $('.navmenu').click(function() {
        $('.navmenu.active').removeClass('active');
        $(this).addClass('active');
        if($(this).attr('id')=="login") {
            $('.Login-signup').toggle();
        }
        if($(this).attr('id')!=="login") {
            $('.login-signup').hide();
        }
    });
    $('#login').click(function() {
        $('#loginmodal').modal('show');
//         $('#signupmodal').modal('hide');
     });
  $('#signup').click(function(){
       $('#loginmodal').modal('hide');
      $('#signupmodal').modal('show');
  });
    $('#login-window').click(function(){
     $('#signupmodal').modal('hide');
    $('#loginmodal').modal('show');  
 });

    $('.team-btn').click(function() {
  $('.team-intro').replaceWith($(".team-invite").clone(true, true).show());

});
$('#invite-emails').tagsInput({
'height': '0%',
'width':'auto',
'margin-left': '25%',
'padding': '0px 20px 0 30px',
'delimiter': ',',
'defaultText': 'Enter emails here',
    
onAddTag: function(item) {
$($(".tagsinput").get(0)).find(".tag").each(function() {
      if (!ValidateEmail($(this).text().trim().split(/(\s+)/)[0])) {
        $(this).addClass("badtag");
      }
    });
  },
  'onChange': function(item) {
		$($(".tagsinput").get(0)).find(".tag").each(function() {
      if (!ValidateEmail($(this).text().trim().split(/(\s+)/)[0])) {
        $(this).addClass("badtag");
      }
    });
  }

});

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }
  return (false)
}
//});

     function getBrowser(){
    window.location('C:\Users\prasadj\Documents\Academy\C_Magic\mobile_access.html');
     }
        


<input type="text" id="UserAgent">

//+++++++++++++++   End of Jquery for Modal Hide show  ++++++++++++++++++++++      



//+++++++++++++++   Pure JS For Login/Signup validation   ++++++++++++++++++++++     

function validate() {
    var valid = true;
    var uemail = document.loginform.email;
    var emailInput = document.getElementById("email").value;
    var uname = emailInput.substring(0, emailInput.lastIndexOf("@"));
    localStorage.setItem("profilename", uname);
    
    //document.getElementById("eError").innerHTML=uname;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!(uemail.value.match(mailformat))) {
        document.getElementById('eError').innerHTML = "*Please Enter valid Email";
        valid = false;
        email.onkeypress = function() {
            eError.style.display = "none";
        }
    }
    if ((password == null)) {
        document.getElementById('pError')
            .innerHTML = "*Password length";
        valid = false;
        password.onkeypress = function() {
            pError.style.display = "none";
        }
    }
    if (userName.length < 5) {
        document.getElementById('s_uError')
            .innerHTML = "Please enter valid profile name.";
        valid = false;
        s_uname.onkeypress = function() {
            s_uError.style.display = "none";
        }
    }
    if ((userName == NaN)) {
        document.getElementById('s_uError')
            .innerHTML = "Only Numbers are not allowed.";
        valid = false;
        s_uname.onkeypress = function() {
            s_uError.style.display = "none";
        }
    } else if ((userName == '') || (userName == null)) {
        document.getElementById('s_uError')
            .innerHTML = "Please enter valid user name.";
        valid = false;
        s_uname.onkeypress = function() {
            s_uError.style.display = "none";
        }
    }
    if (userName.length > 15) {
        document.getElementById('s_uError')
            .innerHTML = "Please enter profile name upto 15 characters only.";
        valid = false;
    }
    s_uname.onkeypress = function() {
        s_uError.style.display = "none";
    }
    return valid;
}
});
//++++++++++++++++++++++++++++++ End of Login/Sign up Validation  +++++++++++++++++++++++++++++++
 
