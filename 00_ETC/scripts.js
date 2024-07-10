document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const subject = prompt('Enter subject:');
            cell.textContent = subject;
        });
    });
});
