
//xl screen---
function initializeDarkMode() {
    const enableDarkModeButton = document.querySelector('.enable-dark-mode');
    const disableDarkModeButton = document.querySelector('.disable-dark-mode');

    if (enableDarkModeButton && disableDarkModeButton) {
        enableDarkModeButton.addEventListener('click', function() {
            document.documentElement.classList.add('dark');
        });

        disableDarkModeButton.addEventListener('click', function() {
            document.documentElement.classList.remove('dark');
        });
    } 
}


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









