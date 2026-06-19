Chart.defaults.color       = '#6B5E4E';
Chart.defaults.font.family = "'DM Sans', sans-serif";

const CAT_COLORS = [
  '#7C3AED','#9D6EFF','#4ADE80','#F87171','#FBBF24','#60A5FA','#F472B6','#34D399',
];
const GRID_COLOR = 'rgba(255,255,255,0.04)';

let _chartPie, _chartBar, _chartLine;

async function loadReports() {
  const start = document.getElementById('filterStart').value || undefined;
  const end   = document.getElementById('filterEnd').value   || undefined;

  try {
    const [categories, monthly] = await Promise.all([
      api.get('/reports/categories' + buildQuery({ start_date: start, end_date: end })),
      api.get('/reports/monthly' + buildQuery({ start_date: start, end_date: end })),
    ]);
    renderCategoryTable(categories);
    renderPieChart(categories);
    renderBarChart(monthly);
    renderLineChart(monthly);
  } catch (err) {
    showToast('Erro ao carregar relatórios: ' + err.message, 'error');
  }
}

/** Tabela de detalhamento por categoria */
function renderCategoryTable(data) {
  const container = document.getElementById('categoryTable');
  if (!data.length) {
    container.innerHTML = '<div class="empty-state" style="padding:32px;"><p>Nenhuma despesa no período</p></div>';
    return;
  }
  const rows = data.map((c, i) => `
    <tr>
      <td>
        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;
              background:${CAT_COLORS[i % CAT_COLORS.length]};margin-right:8px;"></span>
        ${escHtml(c.category)}
      </td>
      <td class="text-down">${formatCurrency(c.total)}</td>
      <td style="color:var(--text-muted);">${c.percentage}%</td>
    </tr>`).join('');

  container.innerHTML = `
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Categoria</th><th>Total</th><th>%</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

/** Gráfico de pizza — categorias */
function renderPieChart(data) {
  if (_chartPie) _chartPie.destroy();
  if (!data.length) return;
  _chartPie = new Chart(document.getElementById('chartPie'), {
    type: 'doughnut',
    data: {
      labels:   data.map(c => c.category),
      datasets: [{
        data:            data.map(c => c.total),
        backgroundColor: data.map((_, i) => CAT_COLORS[i % CAT_COLORS.length]),
        borderWidth:     2,
        borderColor:     '#111111',
        hoverOffset:     6,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '58%',
      plugins: {
        legend: { position: 'bottom', labels: { color: '#C9B99A', padding: 10, boxWidth: 12 } },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.label}: ${formatCurrency(ctx.raw)} (${data[ctx.dataIndex].percentage}%)`,
          },
        },
      },
    },
  });
}

/** Gráfico de barras — receitas vs despesas por mês */
function renderBarChart(report) {
  if (_chartBar) _chartBar.destroy();
  const labels  = report.monthly.map(m => `${m.month.slice(0,3)}/${String(m.year).slice(2)}`);
  _chartBar = new Chart(document.getElementById('chartBar'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Receitas',  data: report.monthly.map(m => m.total_income),  backgroundColor: 'rgba(74,222,128,.7)',  borderRadius: 5 },
        { label: 'Despesas',  data: report.monthly.map(m => m.total_expense), backgroundColor: 'rgba(248,113,113,.7)', borderRadius: 5 },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#C9B99A', padding: 16 } } },
      scales: {
        x: { grid: { color: GRID_COLOR }, ticks: { color: '#6B5E4E' } },
        y: { grid: { color: GRID_COLOR }, ticks: { color: '#6B5E4E', callback: v => 'R$' + v.toLocaleString('pt-BR') } },
      },
    },
  });
}

/** Gráfico de linha — evolução do saldo mensal */
function renderLineChart(report) {
  if (_chartLine) _chartLine.destroy();
  const labels  = report.monthly.map(m => `${m.month.slice(0,3)}/${String(m.year).slice(2)}`);
  const balances = report.monthly.map(m => m.balance);
  const colors  = balances.map(b => b >= 0 ? 'rgba(74,222,128,.9)' : 'rgba(248,113,113,.9)');

  _chartLine = new Chart(document.getElementById('chartLine'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Saldo Mensal',
        data:  balances,
        borderColor: '#9D6EFF',
        backgroundColor: 'rgba(124,58,237,.08)',
        pointBackgroundColor: colors,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4,
        fill: true,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#C9B99A' } },
        tooltip: {
          callbacks: {
            label: ctx => ` Saldo: ${formatCurrency(ctx.raw)}`,
          },
        },
      },
      scales: {
        x: { grid: { color: GRID_COLOR }, ticks: { color: '#6B5E4E' } },
        y: {
          grid: { color: GRID_COLOR }, ticks: { color: '#6B5E4E', callback: v => 'R$' + v.toLocaleString('pt-BR') },
          // Linha de referência no zero
          afterBuildTicks(axis) {
            axis.chart.options.plugins.annotation = {};
          },
        },
      },
    },
  });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
