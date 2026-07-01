let _incomes = [];

/** Carrega e renderiza a lista de receitas */
async function loadIncomes(params = {}) {
  const container = document.getElementById('tableContainer');
  container.innerHTML = '<div class="loading-overlay"><div class="spinner"></div> Carregando...</div>';
  try {
    _incomes = await api.get('/incomes/' + buildQuery(params));
    renderTable(_incomes);
  } catch (err) {
    container.innerHTML = `<div class="empty-state"><span class="empty-icon">⚠️</span><p>${escHtml(err.message)}</p></div>`;
  }
}

/** Renderiza tabela de receitas */
function renderTable(data) {
  const container = document.getElementById('tableContainer');
  if (!data.length) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">📭</span>
        <h3>Nenhuma receita encontrada</h3>
        <p>Cadastre sua primeira receita clicando em "+ Nova receita"</p>
      </div>`;
    return;
  }

  const rows = data.map(inc => `
    <tr>
      <td>${formatDate(inc.date)}</td>
      <td>${escHtml(inc.description)}</td>
      <td class="text-up">${formatCurrency(inc.amount)}</td>
      <td>
        <div class="td-actions">
          <button class="btn btn-secondary btn-sm" onclick="openEditModal(${inc.id})">✏️ Editar</button>
          <button class="btn btn-danger btn-sm" onclick="openDeleteModal(${inc.id})">🗑 Excluir</button>
        </div>
      </td>
    </tr>`).join('');

  container.innerHTML = `
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Data</th><th>Descrição</th><th>Valor</th><th>Ações</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

/** Abre modal para criar nova receita */
function openCreateModal() {
  document.getElementById('modalTitle').textContent = 'Nova Receita';
  document.getElementById('incomeId').value = '';
  document.getElementById('iDesc').value    = '';
  document.getElementById('iAmount').value  = '';
  document.getElementById('iDate').value    = getTodayDate();
  document.getElementById('submitBtn').textContent = 'Salvar';
  document.getElementById('modalAlert').innerHTML = '';
  document.getElementById('modalOverlay').classList.add('active');
}

/** Abre modal para editar receita existente */
function openEditModal(id) {
  const inc = _incomes.find(i => i.id === id);
  if (!inc) return;
  document.getElementById('modalTitle').textContent = 'Editar Receita';
  document.getElementById('incomeId').value = inc.id;
  document.getElementById('iDesc').value    = inc.description;
  document.getElementById('iAmount').value  = inc.amount;
  document.getElementById('iDate').value    = inc.date;
  document.getElementById('submitBtn').textContent = 'Atualizar';
  document.getElementById('modalAlert').innerHTML = '';
  document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

/** Envia o formulário (criar ou editar) */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('incomeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id  = document.getElementById('incomeId').value;
    const btn = document.getElementById('submitBtn');
    const alertEl = document.getElementById('modalAlert');

    const description = document.getElementById('iDesc').value.trim();
    const amountRaw   = document.getElementById('iAmount').value;
    const amount      = parseFloat(amountRaw);
    const dateVal     = document.getElementById('iDate').value;

    if (!description) {
      showAlert(alertEl, 'Descrição é obrigatória.');
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

    const payload = { description, amount, date: dateVal };

    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span>';

    try {
      if (id) {
        await api.put(`/incomes/${id}`, payload);
        showToast('Receita atualizada com sucesso!');
      } else {
        await api.post('/incomes/', payload);
        showToast('Receita cadastrada com sucesso!');
      }
      closeModal();
      loadIncomes();
    } catch (err) {
      showAlert(alertEl, err.message);
      btn.disabled  = false;
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
      await api.delete(`/incomes/${_deleteId}`);
      showToast('Receita excluída.');
      closeDeleteModal();
      loadIncomes();
    } catch (err) {
      showToast(err.message, 'error');
    }
  });
});

/** Filtros */
function applyFilters() {
  loadIncomes({
    start_date:  document.getElementById('filterStart').value || undefined,
    end_date:    document.getElementById('filterEnd').value   || undefined,
    description: document.getElementById('filterDesc').value  || undefined,
  });
}

function clearFilters() {
  document.getElementById('filterStart').value = '';
  document.getElementById('filterEnd').value   = '';
  document.getElementById('filterDesc').value  = '';
  loadIncomes();
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
