# 💰 SmartExpense

**Sistema de Controle Financeiro Pessoal**

> Projeto acadêmico desenvolvido para a disciplina de **Gerência de Projetos** do IFSC — Instituto Federal de Santa Catarina, semestre 2026/1, sob orientação do Professor Ezyo Lamarca.

---

## Visão Geral

O SmartExpense é uma aplicação web full-stack que permite ao usuário controlar receitas e despesas pessoais, visualizar o saldo financeiro em tempo real e analisar hábitos financeiros por meio de gráficos interativos e relatórios mensais.

---

## Objetivo

Desenvolver um sistema de controle financeiro pessoal com qualidade profissional, aplicando na prática os conceitos de gerência de projetos com metodologia Scrum, desenvolvimento web com FastAPI e boas práticas de engenharia de software.

---

## Tecnologias

| Camada     | Tecnologia                                      |
|------------|-------------------------------------------------|
| Backend    | Python 3.12 · FastAPI · SQLAlchemy · Pydantic  |
| Banco      | SQLite (criado automaticamente)                |
| Frontend   | HTML5 · CSS3 · JavaScript Vanilla              |
| Gráficos   | Chart.js 4.4                                   |
| Autenticação | JWT (python-jose) · Bcrypt (passlib)         |
| API Docs   | Swagger UI / ReDoc (FastAPI automático)        |
| VCS        | Git · GitHub                                   |

---

## Arquitetura

```
smartexpense/
├── backend/
│   ├── database/
│   │   └── connection.py       # Engine SQLAlchemy, sessão, Base
│   ├── models/
│   │   ├── user.py             # Modelo User
│   │   ├── income.py           # Modelo Income (receitas)
│   │   └── expense.py          # Modelo Expense (despesas)
│   ├── schemas/
│   │   ├── user.py             # Pydantic: UserCreate, UserLogin, TokenResponse
│   │   ├── income.py           # Pydantic: IncomeCreate, IncomeUpdate, IncomeResponse
│   │   ├── expense.py          # Pydantic: ExpenseCreate, ExpenseUpdate, ExpenseResponse
│   │   ├── dashboard.py        # Pydantic: DashboardSummary
│   │   └── report.py           # Pydantic: CategoryReport, MonthlyReport
│   ├── repositories/
│   │   ├── user_repository.py
│   │   ├── income_repository.py
│   │   └── expense_repository.py
│   ├── services/
│   │   ├── auth_service.py     # Hash, JWT, login, register
│   │   ├── income_service.py
│   │   ├── expense_service.py
│   │   ├── dashboard_service.py
│   │   └── report_service.py
│   ├── routers/
│   │   ├── auth_router.py      # /api/auth/
│   │   ├── income_router.py    # /api/incomes/
│   │   ├── expense_router.py   # /api/expenses/
│   │   ├── dashboard_router.py # /api/dashboard/
│   │   └── report_router.py    # /api/reports/
│   ├── dependencies.py         # get_current_user (JWT)
│   └── main.py                 # App FastAPI + startup
├── frontend/
│   ├── pages/
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── dashboard.html
│   │   ├── income.html
│   │   ├── expenses.html
│   │   └── reports.html
│   ├── css/
│   │   ├── global.css          # Design system completo
│   │   └── auth.css            # Estilos das páginas de auth
│   └── js/
│       ├── api.js              # Cliente HTTP base
│       ├── utils.js            # Utilitários (format, toast, auth)
│       ├── auth.js             # Login e cadastro
│       ├── dashboard.js        # Dashboard + Chart.js
│       ├── income.js           # CRUD de receitas
│       ├── expenses.js         # CRUD de despesas
│       └── reports.js          # Relatórios + Chart.js
├── docs/                       # Documentação Scrum (15 artefatos)
├── requirements.txt
├── .gitignore
└── README.md
```

---

## Instalação e Execução

### Pré-requisitos

- Python 3.12+
- pip

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/smartexpense.git
cd smartexpense
```

### 2. Criar ambiente virtual

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/macOS
python3 -m venv venv
source venv/bin/activate
```

### 3. Instalar dependências

```bash
pip install -r requirements.txt
```

### 4. Executar o servidor

```bash
python -m uvicorn backend.main:app --reload --port 8000
```

### 5. Acessar o sistema

| URL                           | Descrição                        |
|-------------------------------|----------------------------------|
| http://localhost:8000         | Aplicação frontend               |
| http://localhost:8000/docs    | Documentação Swagger (API)       |
| http://localhost:8000/redoc   | Documentação ReDoc (API)         |

> O banco de dados SQLite (`smartexpense.db`) é criado automaticamente na raiz do projeto na primeira execução.

---

## Endpoints da API

### Autenticação
| Método | Endpoint              | Descrição                  | Auth |
|--------|-----------------------|----------------------------|------|
| POST   | /api/auth/register    | Cadastrar usuário          | ❌   |
| POST   | /api/auth/login       | Login, retorna JWT         | ❌   |

### Receitas
| Método | Endpoint              | Descrição                  | Auth |
|--------|-----------------------|----------------------------|------|
| GET    | /api/incomes/         | Listar (com filtros)       | ✅   |
| POST   | /api/incomes/         | Criar receita              | ✅   |
| GET    | /api/incomes/{id}     | Buscar por ID              | ✅   |
| PUT    | /api/incomes/{id}     | Atualizar                  | ✅   |
| DELETE | /api/incomes/{id}     | Excluir                    | ✅   |

### Despesas
| Método | Endpoint              | Descrição                  | Auth |
|--------|-----------------------|----------------------------|------|
| GET    | /api/expenses/categories | Listar categorias       | ❌   |
| GET    | /api/expenses/        | Listar (com filtros)       | ✅   |
| POST   | /api/expenses/        | Criar despesa              | ✅   |
| GET    | /api/expenses/{id}    | Buscar por ID              | ✅   |
| PUT    | /api/expenses/{id}    | Atualizar                  | ✅   |
| DELETE | /api/expenses/{id}    | Excluir                    | ✅   |

### Dashboard
| Método | Endpoint              | Descrição                  | Auth |
|--------|-----------------------|----------------------------|------|
| GET    | /api/dashboard/       | Resumo financeiro          | ✅   |

### Relatórios
| Método | Endpoint                   | Descrição                       | Auth |
|--------|----------------------------|---------------------------------|------|
| GET    | /api/reports/categories    | Gastos por categoria + %        | ✅   |
| GET    | /api/reports/monthly       | Receitas vs despesas mensal     | ✅   |

---

## Funcionalidades

- **Autenticação:** Cadastro, login, logout com JWT (24h de expiração)
- **Receitas:** Criar, listar, editar, excluir + filtros por período e descrição
- **Despesas:** Criar, listar, editar, excluir + filtros por período, categoria e descrição
- **Categorias:** Alimentação, Transporte, Moradia, Saúde, Educação, Lazer, Outros
- **Dashboard:** Saldo, total de receitas/despesas, quantidade de registros + 3 gráficos
- **Relatórios:** Pizza por categoria, barras mensais, linha de evolução do saldo
- **Responsividade:** Mobile-first, sidebar drawer, tap targets 44px

---

## Scrum Aplicado

O projeto foi desenvolvido com o framework **Scrum**, conforme o Guia Scrum 2020:

| Artefato        | Arquivo                          |
|-----------------|----------------------------------|
| Product Backlog | docs/03-product-backlog.md       |
| Sprint Backlog  | docs/04-sprint-backlog.md        |
| Sprint 0        | docs/05-sprint-0.md              |
| Sprint 1        | docs/06-sprint-1.md              |
| Sprint 2        | docs/07-sprint-2.md              |
| Sprint 3        | docs/08-sprint-3.md              |
| Daily Scrums    | docs/09-daily-scrums.md          |
| Sprint Review   | docs/10-sprint-review.md         |
| Retrospective   | docs/11-sprint-retrospective.md  |
| Definition of Done | docs/12-definition-of-done.md |
| Kanban          | docs/13-kanban.md                |

---

## Fluxo Git

```
main
  └── develop
        ├── feat/us-01-auth
        ├── feat/us-06-income-crud
        ├── feat/us-20-dashboard
        └── docs/scrum-documentation
```

**Exemplos de commits seguindo Conventional Commits:**
```
feat: create user authentication with JWT
feat: add income CRUD endpoints
feat: implement expense filtering by category
feat: add dashboard summary endpoint
feat: add Chart.js charts to dashboard
fix: correct date filter type comparison
fix: resolve circular imports in models
docs: add sprint 1 documentation
refactor: extract business logic to service layer
style: update dark theme design system
```

---

## Integrantes

| Nome            | Papel Scrum     | Contato                       |
|-----------------|-----------------|-------------------------------|
| Rafael Becker   | Product Owner   | rafael.becker@aluno.ifsc.edu.br |
| Arthur Rian     | Scrum Master    | arthur.rian@aluno.ifsc.edu.br   |
| Leonardo Bion   | Dev Team        | leonardo.bion@aluno.ifsc.edu.br |

---

## Roadmap

- [x] Sprint 0 — Planejamento e Setup
- [x] Sprint 1 — Backend e API REST
- [x] Sprint 2 — Frontend e Dashboard
- [x] Sprint 3 — Relatórios, Gráficos e Finalização
- [ ] v2.0 — Testes automatizados (pytest)
- [ ] v2.0 — CI/CD com GitHub Actions
- [ ] v2.0 — Deploy em nuvem (Railway / Render)
- [ ] v2.0 — Importação de extratos CSV

---

## Licença

Projeto acadêmico desenvolvido para fins educacionais — IFSC 2026/1.
