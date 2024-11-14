const ctx = document.getElementById('costsChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
        datasets: [
            {
                label: 'التكاليف المباشرة',
                data: [523150, 498000, 515000, 532000, 508000, 523150],
                backgroundColor: 'rgba(102, 126, 234, 0.6)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 1,
            },
            {
                label: 'التكاليف غير المباشرة',
                data: [352280, 338000, 345000, 358000, 342000, 352280],
                backgroundColor: 'rgba(118, 75, 162, 0.6)',
                borderColor: 'rgba(118, 75, 162, 1)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Cairo',
                    },
                },
            },
            title: {
                display: true,
                text: 'تحليل التكاليف الشهرية',
                font: {
                    family: 'Cairo',
                    size: 16,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => value.toLocaleString('ar-SA') + ' ر.س',
                    font: {
                        family: 'Cairo',
                    },
                },
            },
            x: {
                ticks: {
                    font: {
                        family: 'Cairo',
                    },
                },
            },
        },
    },
});
