// Tooltip 標題處理
function tooltipTitleCallback(tooltipItems) {
  const item = tooltipItems[0];
  const label = item.chart.data.labels[item.dataIndex];
  return Array.isArray(label) ? label.join(' ') : label;
}

// 時程 Donut 圖表
const ctx = document.getElementById('timelineChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['建置與設定 (2週)', '客戶測試與評估 (2-4週)', '結案報告 (2週)'],
    datasets: [{
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
      legend: {
        position: 'bottom',
        labels: {
          padding: 25,
          boxWidth: 10,
          font: { lineHeight: 1.4 },
          textAlign: 'left'
        }
      },
      tooltip: {
        callbacks: { title: tooltipTitleCallback }
      },
      title: {
        display: true,
        text: 'POC 各階段時程佔比'
      }
    }
  }
});
