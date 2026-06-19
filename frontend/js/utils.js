/** Formata valor numérico em R$ */
function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);
}

/** Converte "YYYY-MM-DD" → "DD/MM/YYYY" */
function formatDate(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

/** Retorna a data de hoje no formato "YYYY-MM-DD" */
function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

/** Exibe um alerta inline dentro de um container */
function showAlert(container, message, type = 'error') {
  const existing = container.querySelector('.alert');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.className = `alert alert-${type}`;
  el.textContent = message;
  container.prepend(el);
  setTimeout(() => el.remove(), 6000);
}

/** Exibe um toast de notificação no canto inferior direito */
function showToast(message, type = 'success') {
  const colors = {
    success: { bg: 'rgba(74,222,128,.12)', border: 'rgba(74,222,128,.3)', text: '#86efac' },
    error:   { bg: 'rgba(248,113,113,.12)', border: 'rgba(248,113,113,.3)', text: '#fca5a5' },
  };
  const c = colors[type] || colors.success;
  const toast = document.createElement('div');
  Object.assign(toast.style, {
    position: 'fixed', bottom: '24px', right: '24px', zIndex: '9998',
    background: c.bg, border: `1px solid ${c.border}`, color: c.text,
    padding: '12px 20px', borderRadius: '8px', fontSize: '.875rem',
    fontFamily: "'DM Sans', sans-serif",
    animation: 'modalIn .4s cubic-bezier(0.16,1,0.3,1)',
    maxWidth: '320px',
  });
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

/** Inicializa animações de scroll com IntersectionObserver */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      let delay = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), delay);
          delay += 80;
        }
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll('.animate').forEach((el) => observer.observe(el));
}

/** Inicializa o comportamento do menu hamburguer */
function initSidebar() {
  const hamburger = document.getElementById('hamburger');
  const sidebar   = document.getElementById('sidebar');
  const overlay   = document.getElementById('sidebarOverlay');
  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });
}

/** Valida token e preenche dados do usuário na interface */
function requireAuth() {
  const token = localStorage.getItem('smartexpense_token');
  if (!token) {
    window.location.replace('/pages/login.html');
    return false;
  }
  const user = JSON.parse(localStorage.getItem('smartexpense_user') || '{}');
  const nameEl   = document.getElementById('userName');
  const avatarEl = document.getElementById('userAvatar');
  if (nameEl)   nameEl.textContent   = user.name || 'Usuário';
  if (avatarEl) avatarEl.textContent = (user.name || 'U')[0].toUpperCase();
  return true;
}

/** Remove sessão e redireciona para login */
function logout() {
  localStorage.removeItem('smartexpense_token');
  localStorage.removeItem('smartexpense_user');
  window.location.href = '/pages/login.html';
}

/** Monta query string a partir de um objeto, ignorando valores vazios */
function buildQuery(params = {}) {
  const qs = Object.entries(params)
    .filter(([, v]) => v !== null && v !== undefined && v !== '')
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
  return qs ? `?${qs}` : '';
}
