var btn = document.getElementById("btn-login").addEventListener('click', function () {

    const currentpasslogin=document.getElementById("pass-login").value;
    const currentnamelogin=document.getElementById("name-login").value;

    const passwordInputlogin = document.getElementById("pass-login");
    const nameinputlogin=document.getElementById("name-login");


    passwordInputlogin.classList.remove("border-red-500");
    nameinputlogin.classList.remove("border-red-500")
    

    if (currentpasslogin.trim() === ""){

        passwordInputlogin.classList.add("border-red-500")
    }else{
        passwordInputlogin.classList.remove("border-red-500")
    }

    if (currentnamelogin.trim() === ""){

        nameinputlogin.classList.add("border-red-500")
    }else{
        nameinputlogin.classList.remove("border-red-500")
    }



});

 

function togglePasswordVisibility(inputId, imgHideId) {
    const input = document.getElementById(inputId);
    const imgHide = document.getElementById(imgHideId);

    if (input.type === "password") {
        input.type = "text";
        imgHide.classList.add('hidden');
    } else {
        input.type = "password";
        imgHide.classList.remove('hidden');
    }
}
  
document.getElementById("btn-show-pass-login").addEventListener("click", function() {
    togglePasswordVisibility('pass-login', 'img-hide-pass-login');       
});