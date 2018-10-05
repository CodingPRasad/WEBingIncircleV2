function validateLogin() {
    var userid = document.getElementById('user_id').value;
    localStorage.setItem("userID", userid);
    var passid = document.getElementById('pass_id').value;
    localStorage.setItem("PassID", passid);
    if ((userid.length < 3) || (passid.length < 6)) {
        document.getElementById('user_error').setAttribute("style", "color:red")
        document.getElementById('user_error').innerHTML = "invalid username/password.";
        return false;
    }
    preventBack();
    return true;
}

$(document).on('click','#home_owl',function (){  $('link[href$="Redesign.css"]').attr('href','static/css/greyscale.css');});

$(window).load(function() {


    $('#overlay').fadeOut();
    setInterval("startTime()", 1000);
    if (localStorage.getItem('userID')) {
        document.getElementById('user_id').value = localStorage.getItem('userID');
    }
});

function RestrictSpace(e) {
    if (e.charCode == 32 || e.keyCode == 32) {
        return false;
    }
}

function resetpass() {
    var email = $('#reset-email').val();
    if (!(email)) {
        document.getElementById('invalid_email').innerHTML = "email cannot be empty";
    }
    if (validateEmail(email)) {
        $('button').prop('disabled', false);
        $('#Forgot_modal').modal('hide');
        $('#Forgot_suceess_modal').modal('show');

    }
}

function autoFocus() {
    $('#Forgot_modal').on('shown.bs.modal', function() {
        $('#reset-email').val('');
        $('#reset-email').focus();
    });
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function preventBack() {
    window.history.forward();
}
$("#emp_id").keypress(function(e) {

});

function AskEmpId() {
    var emp_id = document.getElementById("emp_id").value;
    if ((emp_id.length) == 4) {
        document.getElementById('register_emp_btn').disabled = false;
    } else {
        document.getElementById('register_emp_btn').disabled = true;
    }
}
function showProfile() {
    $(':input', '#signup_modal').val("");
    $('#signup_modal').removeClass("fade").modal("hide");
    $('#validate_emp').modal('show').addClass("fade");
    var checkEmpId = document.getElementById('emp_id').value;
    setTimeout(function() {
        if (checkEmpId === "1234") {
            window.location.replace("signup_step2.html");
        } else {
            console.log("else block is now clalled");
            ErrorProfile();
        }
    }, 4000);
}

function ErrorProfile() {
    $('#validate_emp').removeClass("fade").modal("hide");
    $('#error_profile').modal('show').addClass("fade");
}

function retry_emp() {

    document.getElementById('btn_retry_sbmt').disabled = true;
    document.getElementById('btn_retry_close').style.display = "none";
    document.getElementById('error_text').innerHTML = "Hold on...retrying  connection to server.It may take a while";
    document.getElementById('error_text').setAttribute("style", "color:#666");
    setTimeout(function() {

        document.getElementById('error_text').innerHTML = "Still working.. It is taking longer than usual.";

        setTimeout(function() {
            document.getElementById('error-404').src = 'file:///C:/Users/prasadj/Documents/Academy/InCIRCLE/static/images/robot.png';
            document.getElementById('error_text').setAttribute("style", "color:#F44336;");
            document.getElementById('error_text').innerHTML = "InCirle Server isn't responding, Report an issue to us";
            document.getElementById('btn_bug_report').style.visibility = "visible";
        }, 7000);
    }, 7000);
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 'google_translate_element');
}

function contactForm() {
    $('#contactForm').style.display = "block";
}


$(document).ready(function() {
    $('#home_owl').click(function (){
   $('link[href="Redesign.css"]').attr('href','greyscale.css');
});
$('#original').click(function (){
   $('link[href="greyscale.css"]').attr('href','Redesign.css');
});
    $("#alertOperation").hide();
    $("#profileOperation").click(function showAlert() {

        if ($("#PhoneNo").val().length === 0) {
            $("#alertOperation").addClass('alert-danger');
            document.getElementById('alertOperation').innerHTML = "Phone cannot be emplty";
            $("#alertOperation").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertOperation").slideUp(500);
            });
        } else {

            $("#alertOperation").show();
            $("#alertOperation").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertOperation").slideUp(500);
            });
        }
    })
    $("#alertLogin").hide();
    $("#loginInfo").click(function showAlert() {

        if ($("#UserPass").val().length === 0 || $("#ConfUserPass").val().length === 0) {
            $("#alertLogin").addClass('alert-danger');
            $("#alertLogin").show();

            document.getElementById('alertLogin').innerHTML = "Passowrd cannot be emplty";
            $("#alertLogin").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertLogin").slideUp(500);
            });
        } else {
            $("#alertLogin").show();

            $("#alertLogin").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertLogin").slideUp(500);
            });
        }
    });
});

function validateSignup() {

    $('#LSEmployee').html(localStorage.getItem('LSEmpId'));

    console.log('printed');
    $('#signup_form').hide();
    $('#signupStep3').show();
}

function nextClick(id) {
    $('#signup_form').hide();
    $('#' + id).show();
}
$(function() {
    $('#signupStep3').hide();
    $("#nav-placeholder").load("nav.html");
});
//function myMap() {
//    var mapOptions = {
//        center: new google.maps.LatLng(51.5, -0.12),
//        zoom: 10,
//        mapTypeId: google.maps.MapTypeId.HYBRID
//    }
//var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//} 
function pop_out_empty(){
 $('#hours_modal').show().addClass('fade');
}
function laodHome() {
    $('#bgcontainer').onclick(function() {
        window.location.assign = '../index.html';
    })
}
//------START TIME HOME PAGE------//

function startTime() {
    var today = new Date();
    today = today.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    var time = new Date().getHours();

    if (time < 12) {
        document.getElementById('time_greetings_msg').innerHTML = 'Good Morning';
    } else if (time >= 12 && time < 17) {
        document.getElementById('time_greetings_msg').innerHTML = 'Good afternoon ';
    } else {
        document.getElementById('time_greetings_msg').innerHTML = 'Good evening ,' + localStorage.getItem('userID');
    }
}

//$(document).on('click','#home_owl'.function (){
//   $('link[href="greyscale.css"]').attr('href','Redesign.css');
//});
setTimeout("preventBack()", 0);

window.onunload = function() {
    null
};