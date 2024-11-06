var btn = document.getElementById("btn-login").addEventListener('click', function () {

    const currentpasslogin=document.getElementById("pass-login").value;

    var passwordInputlogin = document.getElementById("pass-login");
    var repasswordInputlogin = document.getElementById("name-login");

    passwordInputlogin.classList.remove("border-red-500");
    repasswordInputlogin.classList.remove("border-red-500");



});

 
// function validatePassword(password) {
//     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; 
//     return passwordPattern.test(password);
// }

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