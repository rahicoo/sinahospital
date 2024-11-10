
document.addEventListener('DOMContentLoaded', function() {
    function cardsTableDashboard() {
        const table = document.getElementById('table-dashboard');
        const cards = document.getElementById('cards-dashboard');

        if (table && cards) {
            if (window.innerWidth < 1024) {
                table.style.display = 'none';
                cards.style.display = 'grid';
                populateCardsFromTableDashboard(); 
            } else {
                table.style.display = 'table';
                cards.style.display = 'none';
            }
        }
    }

    function populateCardsFromTableDashboard() {
        const table = document.getElementById('table-dashboard');
        const rows = table.querySelectorAll('tbody tr');
        const cardsContainer = document.getElementById('cards-dashboard');

        cardsContainer.innerHTML = ''; 

        const headers = table.querySelectorAll('thead th'); 

        rows.forEach(row => {
            const card = document.createElement('div');
            card.classList.add('w-[250px]', 'h-[400px]', 'bg-[#f0f3f3]', 'transition-transform', 'hover:scale-110', 'rounded-[10px]', 'p-4', 'grid', 'gap-4', 'justify-items-center', 'shadow-xl', 'dark:bg-[#686b6b]', 'dark:text-white');

            const cells = row.querySelectorAll('td'); 

            cells.forEach((cell, index) => {
                const cardContent = document.createElement('div');
                const headerText = headers[index].textContent; 
                cardContent.textContent = `${headerText}: ${cell.textContent}`; 
                card.appendChild(cardContent); 
            });

            cardsContainer.appendChild(card); 
        });
    }

    cardsTableDashboard();
  
    window.addEventListener('resize', cardsTableDashboard);
});



















