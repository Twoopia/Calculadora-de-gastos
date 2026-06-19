/**
 * Cliente HTTP base para comunicação com a API SmartExpense.
 * Injeta automaticamente o token de autenticação em cada requisição.
 */
const API_URL = '/api';

const api = {
  _getHeaders(auth = true) {
    const headers = { 'Content-Type': 'application/json' };
    if (auth) {
      const token = localStorage.getItem('smartexpense_token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  },

  async _request(method, endpoint, body = null, auth = true) {
    const options = { method, headers: this._getHeaders(auth) };
    if (body !== null) options.body = JSON.stringify(body);

    const res = await fetch(`${API_URL}${endpoint}`, options);

    // Sessão expirada ou token inválido
    if (res.status === 401) {
      localStorage.removeItem('smartexpense_token');
      localStorage.removeItem('smartexpense_user');
      window.location.href = '/pages/login.html';
      return;
    }

    let data;
    try {
      data = await res.json();
    } catch {
      data = null;
    }

    if (!res.ok) {
      // FastAPI retorna { detail: "..." } nos erros
      const msg = data?.detail || `Erro ${res.status}`;
      throw new Error(Array.isArray(msg) ? msg.map(e => e.msg).join(', ') : msg);
    }

    return data;
  },

  get:    (endpoint, auth = true)        => api._request('GET',    endpoint, null, auth),
  post:   (endpoint, body, auth = true)  => api._request('POST',   endpoint, body, auth),
  put:    (endpoint, body, auth = true)  => api._request('PUT',    endpoint, body, auth),
  delete: (endpoint, auth = true)        => api._request('DELETE', endpoint, null, auth),
};
