



$(document).ready(function()
{
    //Write JQuery Code Safely Here
    $("#myForm").submit(function()
    {
        if( validateForm() == false ){
            return false;
        }

        alert("Form is submitted!");
        return true;


        // console.log(fullName);
        // console.log(email);
        // console.log(mobileNumber);
        // console.log(password);
        // console.log(confirmPassword);
        // console.log(address);
        // console.log(notes);
        // return false;
    });

    function validateForm(){
        var fullName = $("#fullname").val();
        var email = $("#email").val();
        var mobileNumber = $("#mobilenumber").val();
        var notes = $("#notes").val();
        var password = $("#password").val();
        var confirmPassword = $("#cpassword").val();
        var address = $("#address").val();

        if( fullName == ""  ){
            return false;
        }
        if( email == "" || !isEmail(email)  ){
            return false;
        }
        if( mobileNumber == ""  ){
            return false;
        }
        if( password == ""  ){
            return false;
        }
        if( confirmPassword == ""  ){
            return false;
        }
        if(password!=confirmPassword){
                 return false;   
        }
        if( address == ""  ){
           return false;
        }

        return true;
    }

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };

});

$('#formLogin').submit(function() {

        var email1 = $("#email1").val();
        var password = $("#password1").val();


        if(email1 == ""){
            alert("Please enter a email");
            $('#email').focus();
            return false;
        }
        if (password == "") {
            alert("Please enter a Password");
            $('#password1').focus();
            return false;
        }
        if (email1 == "ahmed" && password == "123") {
            //alert("Login successfully");
            window.location = "index.html";
            return false;
        }
        else {
            alert("Login failed - Please enter correct Username and Password");
            return false;

        }

    });




/*
$('#myDiv').load('../jason/ajax.html');
*/



/*
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "../jason/ajax.html", success: function(){
            $("#myDiv").html();
        }});
    });
});

*/

