

document.querySelector('.enable-dark-mode').addEventListener('click', function() {
    document.documentElement.classList.add('dark'); 
});

document.querySelector('.disable-dark-mode').addEventListener('click', function() {
    document.documentElement.classList.remove('dark');
});

//  mobile screen--------
document.addEventListener('DOMContentLoaded', function () {
    const switchElement = document.getElementById('darkSwitch');

    switchElement.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });
});









