
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('badge').addEventListener('click', function() {
      const dropdown = document.getElementById('dropdownContent');
  
      if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        setTimeout(() => {
          dropdown.classList.add('opacity-100');
          dropdown.classList.remove('opacity-0');
        }, 10);
      } else {
        dropdown.classList.add('opacity-0');
        dropdown.classList.remove('opacity-100');
        setTimeout(() => {
          dropdown.classList.add('hidden');
        }, 500);
      }
    });
  });
  


