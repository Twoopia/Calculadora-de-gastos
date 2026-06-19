# Sprint 2 — Frontend e Dashboard

**Período:** 27/04/2026 a 24/05/2026 (4 semanas)  
**Scrum Master:** Arthur Rian  
**Meta da Sprint:** *Ter a interface web completamente funcional com as páginas de login, cadastro, dashboard com gráficos, receitas e despesas com CRUD e filtros, tudo responsivo para mobile*

---

## Sprint Planning

**Data:** 27/04/2026  
**Duração:** 1.5 horas  

### Sprint Goal
> "Ao final desta Sprint, um usuário conseguirá usar o SmartExpense completamente no navegador: criar conta, fazer login, cadastrar receitas e despesas, e visualizar seu resumo financeiro com gráficos no dashboard."

### Itens do Sprint Backlog

| ID    | User Story                                | Responsável  | Pontos |
|-------|-------------------------------------------|--------------|--------|
| US-10 | Filtro por período em receitas            | Leonardo     | 3      |
| US-11 | Busca por descrição em receitas           | Leonardo     | 2      |
| US-16 | Filtro por categoria em despesas          | Arthur       | 3      |
| US-17 | Filtro por período em despesas            | Arthur       | 3      |
| US-18 | Busca por descrição em despesas           | Arthur       | 2      |
| US-20 | Card de saldo no dashboard                | Rafael       | 3      |
| US-21 | Card total receitas                       | Rafael       | 2      |
| US-22 | Card total despesas                       | Rafael       | 2      |
| US-23 | Card total de registros                   | Rafael       | 1      |
| US-24 | Gráfico pizza — categorias                | Arthur       | 5      |
| US-25 | Gráfico barras — receitas vs despesas     | Arthur       | 5      |
| US-31 | Responsividade mobile                     | Leonardo     | 5      |
| US-32 | Toast de feedback                         | Rafael       | 2      |
| **Total** |                                      |              | **38** |

---

## Arquitetura do Frontend

```
frontend/
├── index.html              — Redirect para login
├── pages/
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html      — Dashboard com Chart.js
│   ├── income.html         — CRUD de receitas
│   ├── expenses.html       — CRUD de despesas
│   └── reports.html        — Página de relatórios (preparação)
├── css/
│   ├── global.css          — Design system completo (tokens, grid, cards, forms)
│   └── auth.css            — Estilos específicos das páginas de auth
└── js/
    ├── api.js              — Cliente HTTP base com injeção de token
    ├── utils.js            — formatCurrency, formatDate, showToast, requireAuth, logout
    ├── auth.js             — handleLogin, handleRegister
    ├── dashboard.js        — Carregamento de dados e renderização de gráficos
    ├── income.js           — CRUD de receitas + filtros + modais
    └── expenses.js         — CRUD de despesas + filtros + modais
```

---

## Design System Implementado

**Tipografia:** Syne (títulos/valores) + DM Sans (corpo) via Google Fonts  
**Palette:**
- Background: `#0D0D0D`
- Cards: `#111111`
- Accent: `#7C3AED` (roxo)
- Texto principal: `#C9B99A`
- Verde (receitas): `#4ADE80`
- Vermelho (despesas): `#F87171`

**Componentes criados:** Cards estatísticos, Tabelas, Modais, Filtros, Toasts, Sidebar retrátil, Topbar com blur, Botões, Inputs, Badges de categoria

**Responsividade:** Sidebar em drawer com overlay no mobile, grid bento flexível, tap targets mínimos de 44px, font-size 16px nos inputs (evita zoom iOS)

---

## Gráficos Chart.js

| Gráfico           | Tipo     | Página    | Dados                                 |
|-------------------|----------|-----------|---------------------------------------|
| Receitas vs Desp. | Barras   | Dashboard | GET /api/reports/monthly              |
| Pizza categorias  | Donut    | Dashboard | GET /api/reports/categories           |
| Evolução mensal   | Linha    | Dashboard | GET /api/reports/monthly              |

**Configuração de tema escuro:**
```js
Chart.defaults.color       = '#6B5E4E';
Chart.defaults.font.family = "'DM Sans', sans-serif";
// Grid lines: rgba(255,255,255,0.04)
```

---

## Impedimentos

| Impedimento                              | Como resolvido                          |
|------------------------------------------|-----------------------------------------|
| Chart.js destruía instâncias anteriores  | Guardar referência em variável e chamar `.destroy()` antes de recriar |
| Sidebar mobile vazando abaixo do conteúdo| `position: fixed` + z-index correto    |

---

## Resultados

✅ **Todos os 38 pontos entregues**  
✅ Interface funcional no navegador  
✅ Login e cadastro operacionais  
✅ CRUD de receitas e despesas com modal  
✅ Dashboard com 3 gráficos Chart.js  
✅ Layout responsivo testado no DevTools (mobile, tablet, desktop)  
