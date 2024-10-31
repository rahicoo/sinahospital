

document.querySelector('.enable-dark-mode').addEventListener('click', function() {
    document.documentElement.classList.add('dark'); 
});

document.querySelector('.disable-dark-mode').addEventListener('click', function() {
    document.documentElement.classList.remove('dark');
});
document.querySelector('.enable-dark-mode-mobile').addEventListener('click', function() {
    document.documentElement.classList.add('dark'); 
});

document.querySelector('.disable-dark-mode-mobile').addEventListener('click', function() {
    document.documentElement.classList.remove('dark');
});


