# Sprint 1 — Backend e API REST

**Período:** 16/03/2026 a 26/04/2026 (6 semanas)  
**Scrum Master:** Arthur Rian  
**Meta da Sprint:** *Ter a API REST completamente funcional com autenticação JWT, CRUD de receitas e despesas, banco de dados SQLite e documentação Swagger*

---

## Sprint Planning

**Data:** 16/03/2026  
**Duração:** 2 horas  
**Participantes:** Rafael Becker, Arthur Rian, Leonardo Bion

### Meta da Sprint (Sprint Goal)
> "Ao final desta Sprint, um desenvolvedor conseguirá interagir com toda a API do SmartExpense via Swagger, criar usuário, fazer login, e realizar CRUD completo de receitas e despesas com autenticação JWT."

### Itens Selecionados do Product Backlog

| ID    | User Story                                | Pontos |
|-------|-------------------------------------------|--------|
| US-01 | Cadastro de usuário                       | 3      |
| US-02 | Login com JWT                             | 2      |
| US-03 | Logout                                    | 1      |
| US-04 | Token JWT 24h                             | 2      |
| US-05 | Mensagens de erro de auth                 | 2      |
| US-06 | POST /incomes/                            | 3      |
| US-07 | GET /incomes/                             | 3      |
| US-08 | PUT /incomes/{id}                         | 2      |
| US-09 | DELETE /incomes/{id}                      | 2      |
| US-12 | POST /expenses/                           | 3      |
| US-13 | GET /expenses/                            | 3      |
| US-14 | PUT /expenses/{id}                        | 2      |
| US-15 | DELETE /expenses/{id}                     | 2      |
| US-19 | Categorias de despesas                    | 2      |
| US-33 | Swagger automático                        | 1      |
| US-34 | create_tables() automático                | 2      |
| US-35 | Validações Pydantic                       | 3      |
| **Total** |                                      | **38** |

---

## Arquitetura Implementada

```
backend/
├── database/connection.py    — Engine SQLAlchemy + SessionLocal + Base
├── models/
│   ├── user.py               — Modelo User (tabela users)
│   ├── income.py             — Modelo Income (tabela incomes)
│   └── expense.py            — Modelo Expense (tabela expenses)
├── schemas/
│   ├── user.py               — UserCreate, UserLogin, TokenResponse
│   ├── income.py             — IncomeCreate, IncomeUpdate, IncomeResponse
│   ├── expense.py            — ExpenseCreate, ExpenseUpdate, ExpenseResponse
│   ├── dashboard.py          — DashboardSummary
│   └── report.py             — CategoryReport, MonthlyReport
├── repositories/
│   ├── user_repository.py
│   ├── income_repository.py
│   └── expense_repository.py
├── services/
│   ├── auth_service.py       — Hash, JWT, login, register
│   ├── income_service.py
│   └── expense_service.py
├── routers/
│   ├── auth_router.py        — POST /api/auth/register + login
│   ├── income_router.py      — CRUD /api/incomes/
│   └── expense_router.py     — CRUD /api/expenses/
├── dependencies.py           — get_current_user (JWT decode)
└── main.py                   — App FastAPI + CORSMiddleware + startup
```

---

## Endpoints Implementados

| Método | Endpoint                    | Descrição                  | Auth |
|--------|-----------------------------|----------------------------|------|
| POST   | /api/auth/register          | Cadastrar usuário          | ❌   |
| POST   | /api/auth/login             | Login, retorna JWT         | ❌   |
| GET    | /api/incomes/               | Listar receitas            | ✅   |
| POST   | /api/incomes/               | Criar receita              | ✅   |
| GET    | /api/incomes/{id}           | Buscar receita por ID      | ✅   |
| PUT    | /api/incomes/{id}           | Atualizar receita          | ✅   |
| DELETE | /api/incomes/{id}           | Excluir receita            | ✅   |
| GET    | /api/expenses/categories    | Listar categorias          | ❌   |
| GET    | /api/expenses/              | Listar despesas            | ✅   |
| POST   | /api/expenses/              | Criar despesa              | ✅   |
| GET    | /api/expenses/{id}          | Buscar despesa por ID      | ✅   |
| PUT    | /api/expenses/{id}          | Atualizar despesa          | ✅   |
| DELETE | /api/expenses/{id}          | Excluir despesa            | ✅   |

---

## Decisões Técnicas

1. **JWT com python-jose:** Escolhido por ser padrão da indústria e simples de integrar com FastAPI
2. **Bcrypt via passlib:** Hash seguro de senhas, resistente a ataques de força bruta
3. **SQLite síncrono:** Suficiente para o escopo acadêmico, sem complexidade de async
4. **Arquitetura em 4 camadas:** Router → Service → Repository → Model, garantindo separação de responsabilidades
5. **Pydantic v2:** Validação automática com `field_validator` e `model_config = {"from_attributes": True}`

---

## Impedimentos Encontrados

| Impedimento                            | Resolvido por       | Como                                      |
|----------------------------------------|---------------------|-------------------------------------------|
| Conflito de imports circulares nos models | Rafael           | Moveu import para dentro das funções      |
| Erro de CORS bloqueando o frontend     | Arthur              | Adicionou CORSMiddleware com allow_origins=["*"] |

---

## Resultados

✅ **Todos os 38 pontos entregues.**  
✅ API testada via Swagger em http://localhost:8000/docs  
✅ Banco SQLite criado automaticamente  
✅ Autenticação JWT funcionando  
✅ CRUD completo de receitas e despesas  
