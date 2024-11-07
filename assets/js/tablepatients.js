document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('org-table');
    const cards = document.getElementById('cards-table');

    function updateTableDisplay() {
        if (window.innerWidth < 1024) {
            table.style.display = 'none';
            cards.style.display = 'grid';
            populateCardsFromTable(); 
        } else {
            table.style.display = 'table';
            cards.style.display = 'none';
        }
    }

    function populateCardsFromTable() {
        const rows = table.querySelectorAll('tbody tr');
        const cardsContainer = document.getElementById('cards-table');

        cardsContainer.innerHTML = ''; 

        const headers = table.querySelectorAll('thead th'); 

        rows.forEach(row => {
            const card = document.createElement('div');
            card.classList.add('w-[250px]', 'h-[400px]', 'bg-[#f0f3f3]', 'transition-transform', 'hover:scale-110', 'rounded-[10px]', 'p-4', 'grid', 'gap-4', 'justify-items-center', 'shadow-xl', 'dark:bg-[#686b6b]', 'dark:text-white');

            const cells = row.querySelectorAll('td'); 

            for (let i = cells.length - 1; i >= 1; i--) { 
                const cardContent = document.createElement('div');
                const headerText = headers[i].textContent; 
                cardContent.textContent = `${headerText}: ${cells[i].textContent}`; 
                card.appendChild(cardContent); 
            }

            const detailButton = document.createElement('button');
            detailButton.textContent = headers[0].textContent; 
            detailButton.classList.add('rounded-[16px]', 'bg-[#a2d1d3]', 'text-black', 'p-2', 'hover:bg-[#96c5c7]', 'w-[68px]', 'dark:text-white'); 
            detailButton.onclick = () => {
               
            };
            card.appendChild(detailButton); 
            cardsContainer.appendChild(card); 
        });
    }

 
    
    window.addEventListener('resize', updateTableDisplay);
});