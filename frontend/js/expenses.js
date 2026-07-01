let _expenses = [];

const CAT_EMOJI = {
  'Alimentação': '🍽',
  'Transporte':  '🚗',
  'Moradia':     '🏠',
  'Saúde':       '💊',
  'Educação':    '📚',
  'Lazer':       '🎮',
  'Outros':      '📦',
};

/** Carrega e renderiza despesas */
async function loadExpenses(params = {}) {
  const container = document.getElementById('tableContainer');
  container.innerHTML = '<div class="loading-overlay"><div class="spinner"></div> Carregando...</div>';
  try {
    _expenses = await api.get('/expenses/' + buildQuery(params));
    renderTable(_expenses);
  } catch (err) {
    container.innerHTML = `<div class="empty-state"><span class="empty-icon">⚠️</span><p>${escHtml(err.message)}</p></div>`;
  }
}

/** Renderiza tabela de despesas */
function renderTable(data) {
  const container = document.getElementById('tableContainer');
  if (!data.length) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">📭</span>
        <h3>Nenhuma despesa encontrada</h3>
        <p>Cadastre sua primeira despesa clicando em "+ Nova despesa"</p>
      </div>`;
    return;
  }

  const rows = data.map(exp => `
    <tr>
      <td>${formatDate(exp.date)}</td>
      <td>${escHtml(exp.description)}</td>
      <td><span class="badge badge-cat">${CAT_EMOJI[exp.category] || '📦'} ${escHtml(exp.category)}</span></td>
      <td class="text-down">${formatCurrency(exp.amount)}</td>
      <td>
        <div class="td-actions">
          <button class="btn btn-secondary btn-sm" onclick="openEditModal(${exp.id})">✏️ Editar</button>
          <button class="btn btn-danger btn-sm"    onclick="openDeleteModal(${exp.id})">🗑 Excluir</button>
        </div>
      </td>
    </tr>`).join('');

  container.innerHTML = `
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Data</th><th>Descrição</th><th>Categoria</th><th>Valor</th><th>Ações</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

/** Modal criar */
function openCreateModal() {
  document.getElementById('modalTitle').textContent = 'Nova Despesa';
  document.getElementById('expenseId').value = '';
  document.getElementById('eDesc').value     = '';
  document.getElementById('eCat').value      = '';
  document.getElementById('eAmount').value   = '';
  document.getElementById('eDate').value     = getTodayDate();
  document.getElementById('submitBtn').textContent = 'Salvar';
  document.getElementById('modalAlert').innerHTML  = '';
  document.getElementById('modalOverlay').classList.add('active');
}

/** Modal editar */
function openEditModal(id) {
  const exp = _expenses.find(e => e.id === id);
  if (!exp) return;
  document.getElementById('modalTitle').textContent = 'Editar Despesa';
  document.getElementById('expenseId').value = exp.id;
  document.getElementById('eDesc').value     = exp.description;
  document.getElementById('eCat').value      = exp.category;
  document.getElementById('eAmount').value   = exp.amount;
  document.getElementById('eDate').value     = exp.date;
  document.getElementById('submitBtn').textContent = 'Atualizar';
  document.getElementById('modalAlert').innerHTML  = '';
  document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

/** Submissão do formulário */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('expenseForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id  = document.getElementById('expenseId').value;
    const btn = document.getElementById('submitBtn');
    const alertEl = document.getElementById('modalAlert');

    const description = document.getElementById('eDesc').value.trim();
    const category    = document.getElementById('eCat').value;
    const amountRaw   = document.getElementById('eAmount').value;
    const amount      = parseFloat(amountRaw);
    const dateVal     = document.getElementById('eDate').value;

    if (!description) {
      showAlert(alertEl, 'Descrição é obrigatória.');
      return;
    }
    if (!category) {
      showAlert(alertEl, 'Selecione uma categoria.');
      return;
    }
    if (!amountRaw || isNaN(amount) || amount <= 0) {
      showAlert(alertEl, 'Informe um valor válido maior que zero.');
      return;
    }
    if (!dateVal) {
      showAlert(alertEl, 'Data é obrigatória.');
      return;
    }

    const payload = { description, category, amount, date: dateVal };

    btn.disabled  = true;
    btn.innerHTML = '<span class="spinner"></span>';

    try {
      if (id) {
        await api.put(`/expenses/${id}`, payload);
        showToast('Despesa atualizada com sucesso!');
      } else {
        await api.post('/expenses/', payload);
        showToast('Despesa cadastrada com sucesso!');
      }
      closeModal();
      loadExpenses();
    } catch (err) {
      showAlert(alertEl, err.message);
      btn.disabled    = false;
      btn.textContent = id ? 'Atualizar' : 'Salvar';
    }
  });
});

/** Exclusão */
let _deleteId = null;

function openDeleteModal(id) {
  _deleteId = id;
  document.getElementById('deleteOverlay').classList.add('active');
}
function closeDeleteModal() {
  _deleteId = null;
  document.getElementById('deleteOverlay').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('confirmDeleteBtn').addEventListener('click', async () => {
    if (!_deleteId) return;
    try {
      await api.delete(`/expenses/${_deleteId}`);
      showToast('Despesa excluída.');
      closeDeleteModal();
      loadExpenses();
    } catch (err) {
      showToast(err.message, 'error');
    }
  });
});

/** Filtros */
function applyFilters() {
  loadExpenses({
    start_date:  document.getElementById('filterStart').value || undefined,
    end_date:    document.getElementById('filterEnd').value   || undefined,
    category:    document.getElementById('filterCat').value   || undefined,
    description: document.getElementById('filterDesc').value  || undefined,
  });
}

function clearFilters() {
  ['filterStart','filterEnd','filterCat','filterDesc'].forEach(id => {
    document.getElementById(id).value = '';
  });
  loadExpenses();
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
