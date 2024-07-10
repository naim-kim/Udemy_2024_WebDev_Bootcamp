document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const subject = prompt('Enter subject:');
            cell.textContent = subject;
            saveTimetable();
        });
    });
    loadTimetable();
});

function saveTimetable() {
    const rows = document.querySelectorAll('.period-row');
    const timetable = Array.from(rows).map(row => {
        return Array.from(row.cells).slice(2).map(cell => cell.textContent);
    });

    fetch('/api/timetable', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(timetable)
    });
}

function loadTimetable() {
    fetch('/api/timetable')
        .then(response => response.json())
        .then(data => {
            const rows = document.querySelectorAll('.period-row');
            data.forEach((period, i) => {
                period.forEach((subject, j) => {
                    rows[i].cells[j + 2].textContent = subject;
                });
            });
        });
}
