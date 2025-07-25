const tooltipTitleCallback = (tooltipItems) => {
    const item = tooltipItems[0];
    let label = item.chart.data.labels[item.dataIndex];
    return Array.isArray(label) ? label.join(' ') : label;
};

const timelineCtx = document.getElementById('timelineChart').getContext('2d');
new Chart(timelineCtx, {
    type: 'doughnut',
    data: {
        labels: [
            '建置與設定 (2週)',
            ['客戶測試與', '評估 (2-4週)'],
            '結案報告 (2週)'
        ],
        datasets: [{
            label: '週數',
            data: [2, 3, 2],
            backgroundColor: ['#FFD166', '#06D6A0', '#FF6B6B'],
            borderColor: '#FFFFFF',
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' },
            tooltip: { callbacks: { title: tooltipTitleCallback } },
            title: { display: true, text: 'POC 各階段時程佔比' }
        }
    }
});

const competitorCtx = document.getElementById('competitorChart').getContext('2d');
new Chart(competitorCtx, {
    type: 'bar',
    data: {
        labels: [
            'DBSAFER (整合型)',
            'CyberArk (PAM)',
            'Safeguard (PAM)',
            'Imperva (DAM)',
            'IBM Guardium (DAM)'
        ],
        datasets: [{
            label: '解決方案類型',
            data: [10, 10, 10, 10, 10],
            backgroundColor: [
                '#118AB2', '#FFD166', '#FFD166', '#06D6A0', '#06D6A0'
            ],
            borderRadius: 5
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { display: false, grid: { display: false } },
            y: { grid: { display: false } }
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    }
});
