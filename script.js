// ===========================
// TICKER DE MANCHETES
// ===========================
(function () {
  const list = document.getElementById('tickerList');
  if (!list) return;

  // Duplica os itens para garantir loop contínuo sem buracos
  list.innerHTML += list.innerHTML;
})();

// ===========================
// MENU HAMBURGUER (MOBILE)
// ===========================
const menuToggle = document.getElementById('menuToggle');
const menuNav = document.getElementById('menuNav');

if (menuToggle && menuNav) {
  menuToggle.addEventListener('click', () => {
    menuNav.classList.toggle('active');
  });

  // Fecha o menu ao clicar em qualquer link
  menuNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuNav.classList.remove('active');
    });
  });
}

// ===========================
// VALIDAÇÃO DO FORMULÁRIO
// ===========================
const form = document.getElementById('formContato');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valido = true;

    // Limpa erros anteriores
    document.querySelectorAll('.erro').forEach(el => el.textContent = '');
    document.querySelectorAll('.invalido').forEach(el => el.classList.remove('invalido'));

    // Valida nome
    const nome = document.getElementById('nome');
    if (!nome.value.trim() || nome.value.trim().length < 3) {
      mostrarErro(nome, 'erroNome', 'Informe seu nome completo (mínimo 3 caracteres).');
      valido = false;
    }

    // Valida e-mail
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      mostrarErro(email, 'erroEmail', 'Informe um e-mail válido.');
      valido = false;
    }

    // Valida assunto
    const assunto = document.getElementById('assunto');
    if (!assunto.value) {
      mostrarErro(assunto, 'erroAssunto', 'Selecione um assunto.');
      valido = false;
    }

    // Valida mensagem
    const mensagem = document.getElementById('mensagem');
    if (!mensagem.value.trim() || mensagem.value.trim().length < 10) {
      mostrarErro(mensagem, 'erroMensagem', 'Mensagem muito curta (mínimo 10 caracteres).');
      valido = false;
    }

    if (valido) {
      form.reset();
      const sucesso = document.getElementById('sucessoMsg');
      if (sucesso) {
        sucesso.style.display = 'block';
        setTimeout(() => { sucesso.style.display = 'none'; }, 5000);
      }
    }
  });
}

function mostrarErro(campo, idErro, mensagem) {
  campo.classList.add('invalido');
  const erroEl = document.getElementById(idErro);
  if (erroEl) erroEl.textContent = mensagem;
}
