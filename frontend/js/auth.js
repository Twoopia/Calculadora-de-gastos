/** Lida com o envio do formulário de login */
async function handleLogin(e) {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('[type="submit"]');
  const alert = document.getElementById('formAlert');

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Entrando...';

  try {
    const result = await api.post('/auth/login', {
      email:    form.email.value.trim(),
      password: form.password.value,
    }, false);

    localStorage.setItem('smartexpense_token', result.access_token);
    localStorage.setItem('smartexpense_user',  JSON.stringify(result.user));
    window.location.replace('dashboard.html');
  } catch (err) {
    showAlert(alert, err.message);
    btn.disabled  = false;
    btn.innerHTML = 'Entrar';
  }
}

/** Lida com o envio do formulário de cadastro */
async function handleRegister(e) {
  e.preventDefault();
  const form  = e.target;
  const btn   = form.querySelector('[type="submit"]');
  const alert = document.getElementById('formAlert');

  if (form.password.value !== form.confirmPassword.value) {
    showAlert(alert, 'As senhas não coincidem');
    return;
  }

  btn.disabled  = true;
  btn.innerHTML = '<span class="spinner"></span> Criando conta...';

  try {
    const result = await api.post('/auth/register', {
      name:     form.name.value.trim(),
      email:    form.email.value.trim(),
      password: form.password.value,
    }, false);

    localStorage.setItem('smartexpense_token', result.access_token);
    localStorage.setItem('smartexpense_user',  JSON.stringify(result.user));
    window.location.replace('dashboard.html');
  } catch (err) {
    showAlert(alert, err.message);
    btn.disabled  = false;
    btn.innerHTML = 'Criar conta';
  }
}
