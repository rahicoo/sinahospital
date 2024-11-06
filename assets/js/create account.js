
var btn = document.getElementById("btn").addEventListener('click', function () {
    var currentname = document.getElementById("name").value;
    var currenfamily = document.getElementById("family").value;
    var currentphonenumber = document.getElementById("phonenumber").value;
    var currentmail = document.getElementById("mail").value;
    var currentpassword = document.getElementById("password").value;
    var currentrepassword = document.getElementById("repassword").value;
    var passwordInput = document.getElementById("password");
    var repasswordInput = document.getElementById("repassword");

    passwordInput.classList.remove("border-red-500");
    repasswordInput.classList.remove("border-red-500");

    const inputs = [
        { id: "name", value: currentname },
        { id: "family", value: currenfamily },
        { id: "phonenumber", value: currentphonenumber },
        { id: "mail", value: currentmail },
        { id: "password", value: currentpassword },
        { id: "repassword", value: currentrepassword }
    ];

  
    inputs.forEach(input => {
        const inputElement = document.getElementById(input.id);
        if (input.value.trim() === "") {
            inputElement.classList.add("border-red-500");
        } else {
            inputElement.classList.remove("border-red-500");
        }
    });

    //  phone number----
    if (currentphonenumber.length !== 11 || !currentphonenumber.startsWith("0") || currentphonenumber[1] !== '9') {
        var phonenumberInput = document.getElementById("phonenumber");
        phonenumberInput.classList.add("border-red-500");
    } else {
        phonenumberInput.classList.remove("border-red-500");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|ir)$/; 
    if (!emailPattern.test(currentmail)) {
        var mailInput = document.getElementById("mail");
        mailInput.classList.add("border-red-500");
        hasError = true;
    } else {
        mailInput.classList.remove("border-red-500");
    }
  
    if (currentpassword !== currentrepassword) {
        var toast = document.getElementById("toast");
        toast.classList.toggle("hidden");
        setTimeout(function() {
            toast.classList.add("hidden");
        }, 3000);

        passwordInput.classList.add("border-red-500");
        repasswordInput.classList.add("border-red-500");
    }

    if (!hasError) {
        var user = {
            name: currentname,
            family: currenfamily,
            phonenumber: currentphonenumber,
            mail: currentmail,
            password: currentpassword
        };

        var users = [];
        var keyy = localStorage.getItem("users");

        if (keyy != null) {
            users = JSON.parse(keyy);
        }

        users.push(user);
        var obj = JSON.stringify(users);
        localStorage.setItem("users", obj);
    }
});

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    var input = evt.target.value;

    if (!((charCode >= 48 && charCode <= 57) || (charCode >= 1632 && charCode <= 1641))) {
        evt.preventDefault(); 
    } else if (input.length >= 11) {
        evt.preventDefault(); 
    }
}

function setInputDirection(input) {
    const firstChar = input.value.charAt(0);
    const isPersian = /[\u0600-\u06FF]/.test(firstChar);

    input.style.direction = isPersian ? "rtl" : "ltr";
    input.style.textAlign = isPersian ? "right" : "left";
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        setInputDirection(this);
    });
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
  
document.getElementById("btn-show-pass").addEventListener("click", function() {
    togglePasswordVisibility('password', 'img-hide-pass');       
});

document.getElementById("btn-show-repass").addEventListener("click", function() {
    togglePasswordVisibility('repassword', 'img-hide-repass');
});

// function validatePassword(password) {
//     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; 
//     return passwordPattern.test(password);
// }

// var btn = document.getElementById("btn").addEventListener('click', function () {
//     var currentname = document.getElementById("name").value;
//     var currenfamily = document.getElementById("family").value;
//     var currentphonenumber = document.getElementById("phonenumber").value;
//     var currentmail = document.getElementById("mail").value;
//     var currentpassword = document.getElementById("password").value;
//     var currentrepassword = document.getElementById("repassword").value;
//     var passwordInput = document.getElementById("password");
//     var repasswordInput = document.getElementById("repassword");

//     passwordInput.classList.remove("border-red-500");
//     repasswordInput.classList.remove("border-red-500");

//     const inputs = [
//         { id: "name", value: currentname },
//         { id: "family", value: currenfamily },
//         { id: "phonenumber", value: currentphonenumber },
//         { id: "mail", value: currentmail },
//         { id: "password", value: currentpassword },
//         { id: "repassword", value: currentrepassword }
//     ];

//     let hasError = false;

//     inputs.forEach(input => {
//         const inputElement = document.getElementById(input.id);
//         if (input.value.trim() === "") {
//             inputElement.classList.add("border-red-500");
//             hasError = true;
//         } else {
//             inputElement.classList.remove("border-red-500");
//         }
//     });

//     if (currentphonenumber.length !== 11 || !currentphonenumber.startsWith("0") || currentphonenumber[1] !== '9') {
//         var phonenumberInput = document.getElementById("phonenumber");
//         phonenumberInput.classList.add("border-red-500");
//         hasError = true;
//     } else {
//         phonenumberInput.classList.remove("border-red-500");
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.(com|ir)$/;
//     if (!emailPattern.test(currentmail)) {
//         var mailInput = document.getElementById("mail");
//         mailInput.classList.add("border-red-500");
//         hasError = true;
//     } else {
//         mailInput.classList.remove("border-red-500");
//     }

  
//     if (!validatePassword(currentpassword)) {
//         passwordInput.classList.add("border-red-500");
//         repasswordInput.classList.add("border-red-500"); 
//         hasError = true;
//     }

   
//     if (currentpassword !== currentrepassword) {
//         var toast = document.getElementById("toast");
//         toast.classList.toggle("hidden");
//         setTimeout(function () {
//             toast.classList.add("hidden");
//         }, 3000);

//         passwordInput.classList.add("border-red-500");
//         repasswordInput.classList.add("border-red-500");
//         hasError = true;
//     }

//     if (!hasError) {
//         var user = {
//             name: currentname,
//             family: currenfamily,
//             phonenumber: currentphonenumber,
//             mail: currentmail,
//             password: currentpassword
//         };

//         var users = [];
//         var keyy = localStorage.getItem("users");

//         if (keyy != null) {
//             users = JSON.parse(keyy);
//         }

//         users.push(user);
//         var obj = JSON.stringify(users);
//         localStorage.setItem("users", obj);
//     }
// });

// function isNumberKey(evt) {
//     var charCode = (evt.which) ? evt.which : evt.keyCode;
//     var input = evt.target.value;

//     if (!((charCode >= 48 && charCode <= 57) || (charCode >= 1632 && charCode <= 1641))) {
//         evt.preventDefault();
//     } else if (input.length >= 11) {
//         evt.preventDefault();
//     }
// }

// function setInputDirection(input) {
//     const firstChar = input.value.charAt(0);
//     const isPersian = /[\u0600-\u06FF]/.test(firstChar);

//     input.style.direction = isPersian ? "rtl" : "ltr";
//     input.style.textAlign = isPersian ? "right" : "left";
// }

// document.querySelectorAll('input').forEach(input => {
//     input.addEventListener('input', function () {
//         setInputDirection(this);
//     });
// });

// function togglePasswordVisibility(inputId, btnHideId) {
//     const input = document.getElementById(inputId);
//     const btnHide = document.getElementById(btnHideId);

//     if (input.type === "password") {
//         input.type = "text";
//         btnHide.classList.add('hidden');
//     } else {
//         input.type = "password";
//         btnHide.classList.remove('hidden');
//     }
// }

// document.getElementById("btn-show-pass").addEventListener("click", function () {
//     togglePasswordVisibility('password', 'img-hide-pass');
// });

// document.getElementById("btn-show-repass").addEventListener("click", function () {
//     togglePasswordVisibility('repassword', 'img-hide-repass');
// });



