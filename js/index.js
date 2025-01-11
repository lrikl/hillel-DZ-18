'use strict';

const tablePifagor = document.getElementById('tablePifagor');

for (let i = 0; i <= 10; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j <= 10; j++) {
        let cellTag = (i === 0 || j === 0) ? 'th' : 'td'; // якщо рядок/стовпчик перший то -> th, всі інші -> td
        const cell = document.createElement(cellTag);

        if (i === 0 && j === 0) {
            cell.textContent = ''; // порожня углова клітинка
        } else if (i === 0) {
            cell.textContent = j; // заголовок стовпчика
        } else if (j === 0) {
            cell.textContent = i; // заголовок рядка
        } else {
            cell.textContent = i * j;
        }

        // перетин ліній
        if (i === j && i !== 0 && j !== 0) {
            cell.style.backgroundColor = "green";
            cell.style.color = "white";
        }

        row.appendChild(cell);
    }

    tablePifagor.appendChild(row);
}
    
