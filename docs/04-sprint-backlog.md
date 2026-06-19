# Sprint Backlog — SmartExpense

> Documento consolidado com os backlogs de todos os sprints.  
> Status: ☐ Pendente · ⚙ Em andamento · ✅ Concluído

---

## Sprint 1 — Backend e API (16/03 a 26/04/2026)
**Meta:** API REST completa com autenticação JWT, CRUD de receitas e despesas, banco SQLite

| ID    | User Story / Tarefa                              | Responsável     | Pontos | Status |
|-------|--------------------------------------------------|-----------------|--------|--------|
| US-01 | Cadastro de usuário (endpoint + model)           | Rafael          | 3      | ✅     |
| US-02 | Login com JWT                                    | Rafael          | 2      | ✅     |
| US-03 | Logout (frontend clear token)                    | Arthur          | 1      | ✅     |
| US-04 | Token JWT com expiração 24h                      | Rafael          | 2      | ✅     |
| US-05 | Mensagens de erro de autenticação                | Arthur          | 2      | ✅     |
| US-06 | Endpoint POST /incomes/                          | Leonardo        | 3      | ✅     |
| US-07 | Endpoint GET /incomes/                           | Leonardo        | 3      | ✅     |
| US-08 | Endpoint PUT /incomes/{id}                       | Leonardo        | 2      | ✅     |
| US-09 | Endpoint DELETE /incomes/{id}                    | Leonardo        | 2      | ✅     |
| US-12 | Endpoint POST /expenses/                         | Rafael          | 3      | ✅     |
| US-13 | Endpoint GET /expenses/                          | Rafael          | 3      | ✅     |
| US-14 | Endpoint PUT /expenses/{id}                      | Arthur          | 2      | ✅     |
| US-15 | Endpoint DELETE /expenses/{id}                   | Arthur          | 2      | ✅     |
| US-19 | Categorias de despesas (EXPENSE_CATEGORIES)      | Leonardo        | 2      | ✅     |
| US-33 | Swagger automático via FastAPI                   | Rafael          | 1      | ✅     |
| US-34 | create_tables() automático no startup            | Rafael          | 2      | ✅     |
| US-35 | Validações Pydantic (campo, valor, data)         | Leonardo        | 3      | ✅     |

**Pontos planejados:** 38 · **Pontos entregues:** 38

---

## Sprint 2 — Frontend e Dashboard (27/04 a 24/05/2026)
**Meta:** Interface web completa com dashboard, páginas de receitas e despesas, filtros e responsividade

| ID    | User Story / Tarefa                              | Responsável     | Pontos | Status |
|-------|--------------------------------------------------|-----------------|--------|--------|
| US-10 | Filtro por período em receitas                   | Leonardo        | 3      | ✅     |
| US-11 | Busca por descrição em receitas                  | Leonardo        | 2      | ✅     |
| US-16 | Filtro por categoria em despesas                 | Arthur          | 3      | ✅     |
| US-17 | Filtro por período em despesas                   | Arthur          | 3      | ✅     |
| US-18 | Busca por descrição em despesas                  | Arthur          | 2      | ✅     |
| US-20 | Card de saldo no dashboard                       | Rafael          | 3      | ✅     |
| US-21 | Card total receitas                              | Rafael          | 2      | ✅     |
| US-22 | Card total despesas                              | Rafael          | 2      | ✅     |
| US-23 | Card total de registros                          | Rafael          | 1      | ✅     |
| US-24 | Gráfico pizza por categoria (Chart.js)           | Arthur          | 5      | ✅     |
| US-25 | Gráfico barras receitas vs despesas              | Arthur          | 5      | ✅     |
| US-31 | Layout responsivo mobile-first                   | Leonardo        | 5      | ✅     |
| US-32 | Toast de notificação (feedback visual)           | Rafael          | 2      | ✅     |
| —     | Página de login                                  | Rafael          | —      | ✅     |
| —     | Página de cadastro                               | Leonardo        | —      | ✅     |
| —     | Páginas de receitas e despesas com CRUD modal    | Arthur          | —      | ✅     |

**Pontos planejados:** 38 · **Pontos entregues:** 38

---

## Sprint 3 — Relatórios, Gráficos e Finalização (25/05 a 21/06/2026)
**Meta:** Página de relatórios completa com 3 gráficos, documentação Scrum e preparação da apresentação

| ID    | User Story / Tarefa                              | Responsável     | Pontos | Status |
|-------|--------------------------------------------------|-----------------|--------|--------|
| US-26 | Relatório gastos por categoria com %             | Rafael          | 5      | ✅     |
| US-27 | Gráfico pizza filtrado por período               | Arthur          | 5      | ✅     |
| US-28 | Gráfico de linha — evolução do saldo             | Arthur          | 5      | ✅     |
| US-29 | Filtro de período na página de relatórios        | Leonardo        | 3      | ✅     |
| US-30 | Tabela de resumo mensal                          | Leonardo        | 3      | ✅     |
| —     | Documentação Scrum (15 arquivos)                 | Rafael/Arthur   | —      | ✅     |
| —     | README profissional                              | Rafael          | —      | ✅     |
| —     | Organização final do repositório GitHub          | Arthur          | —      | ✅     |
| —     | Preparação da apresentação final                 | Todos           | —      | ✅     |

**Pontos planejados:** 21 · **Pontos entregues:** 21

---

## Velocidade do Time

| Sprint | Planejado | Entregue | Velocidade |
|--------|-----------|----------|------------|
| 1      | 38        | 38       | 100%       |
| 2      | 38        | 38       | 100%       |
| 3      | 21        | 21       | 100%       |
| **Total** | **97** | **97** | **100%**   |
