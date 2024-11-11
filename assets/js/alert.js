
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('badge').addEventListener('click', function() {
        const dropdown = document.getElementById('dropdownContent');
        dropdown.classList.toggle('hidden'); 
    });
});
