/**
 * Configuração padrão de tema para todos os gráficos Chart.js
 */
const CHART_DEFAULTS = {
  font:      { family: "'DM Sans', sans-serif", size: 12 },
  color:     '#6B5E4E',
  gridColor: 'rgba(255,255,255,0.04)',
};

Chart.defaults.color         = CHART_DEFAULTS.color;
Chart.defaults.font.family   = CHART_DEFAULTS.font.family;
Chart.defaults.font.size     = CHART_DEFAULTS.font.size;

/** Paleta de cores para categorias */
const CAT_COLORS = [
  '#7C3AED','#9D6EFF','#4ADE80','#F87171','#FBBF24',
  '#60A5FA','#F472B6','#34D399',
];

let _chartBar, _chartPie, _chartMonthly;

async function loadDashboard() {
  try {
    const [summary, monthly, categories] = await Promise.all([
      api.get('/dashboard/'),
      api.get('/reports/monthly'),
      api.get('/reports/categories'),
    ]);

    renderSummary(summary);
    renderBarChart(monthly);
    renderPieChart(categories);
    renderMonthlyChart(monthly);
  } catch (err) {
    showToast('Erro ao carregar dashboard: ' + err.message, 'error');
  }
}

function renderSummary(s) {
  const balEl = document.getElementById('statBalance');
  balEl.textContent = formatCurrency(s.balance);
  balEl.className   = 'stat-value ' + (s.balance >= 0 ? 'text-up' : 'text-down');

  document.getElementById('statIncome').textContent       = formatCurrency(s.total_income);
  document.getElementById('statExpense').textContent      = formatCurrency(s.total_expense);
  document.getElementById('statTotal').textContent        = s.total_records;
  document.getElementById('statIncomeCount').textContent  = `${s.income_count} lançamentos`;
  document.getElementById('statExpenseCount').textContent = `${s.expense_count} lançamentos`;
}

function renderBarChart(report) {
  const labels  = report.monthly.map(m => `${m.month.slice(0,3)}/${String(m.year).slice(2)}`);
  const income  = report.monthly.map(m => m.total_income);
  const expense = report.monthly.map(m => m.total_expense);

  if (_chartBar) _chartBar.destroy();
  _chartBar = new Chart(document.getElementById('chartBar'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Receitas',  data: income,  backgroundColor: 'rgba(74,222,128,.7)',  borderRadius: 5 },
        { label: 'Despesas',  data: expense, backgroundColor: 'rgba(248,113,113,.7)', borderRadius: 5 },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#C9B99A', padding: 16 } } },
      scales: {
        x: { grid: { color: CHART_DEFAULTS.gridColor }, ticks: { color: '#6B5E4E' } },
        y: { grid: { color: CHART_DEFAULTS.gridColor }, ticks: { color: '#6B5E4E', callback: v => 'R$' + v.toLocaleString('pt-BR') } },
      },
    },
  });
}

function renderPieChart(categories) {
  if (!categories.length) return;
  if (_chartPie) _chartPie.destroy();
  _chartPie = new Chart(document.getElementById('chartPie'), {
    type: 'doughnut',
    data: {
      labels: categories.map(c => c.category),
      datasets: [{
        data:            categories.map(c => c.total),
        backgroundColor: categories.map((_, i) => CAT_COLORS[i % CAT_COLORS.length]),
        borderWidth:     2,
        borderColor:     '#111111',
        hoverOffset:     6,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: { position: 'right', labels: { color: '#C9B99A', padding: 10, boxWidth: 12 } },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.label}: ${formatCurrency(ctx.raw)} (${categories[ctx.dataIndex].percentage}%)`,
          },
        },
      },
    },
  });
}

function renderMonthlyChart(report) {
  const labels  = report.monthly.map(m => `${m.month.slice(0,3)}/${String(m.year).slice(2)}`);
  const income  = report.monthly.map(m => m.total_income);
  const expense = report.monthly.map(m => m.total_expense);

  if (_chartMonthly) _chartMonthly.destroy();
  _chartMonthly = new Chart(document.getElementById('chartMonthly'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Receitas', data: income, type: 'line',
          borderColor: 'rgba(74,222,128,.9)', backgroundColor: 'rgba(74,222,128,.08)',
          tension: 0.4, fill: true, pointBackgroundColor: '#4ADE80', pointRadius: 4,
        },
        {
          label: 'Despesas', data: expense, type: 'line',
          borderColor: 'rgba(248,113,113,.9)', backgroundColor: 'rgba(248,113,113,.08)',
          tension: 0.4, fill: true, pointBackgroundColor: '#F87171', pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#C9B99A', padding: 16 } } },
      scales: {
        x: { grid: { color: CHART_DEFAULTS.gridColor }, ticks: { color: '#6B5E4E' } },
        y: { grid: { color: CHART_DEFAULTS.gridColor }, ticks: { color: '#6B5E4E', callback: v => 'R$' + v.toLocaleString('pt-BR') } },
      },
    },
  });
}
