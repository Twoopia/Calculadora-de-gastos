# Quadro Kanban — SmartExpense

> O Kanban foi utilizado como ferramenta complementar ao Scrum para visualizar o fluxo de trabalho dentro de cada Sprint.  
> Colunas: **Backlog → To Do → Doing → Review → Done**

---

## Kanban — Sprint 1 (Estado Final)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                          SMARTEXPENSE — SPRINT 1                                        │
├─────────────┬──────────────┬──────────────┬──────────────┬───────────────────────────  │
│  BACKLOG    │    TO DO     │    DOING     │   REVIEW     │    DONE                      │
├─────────────┼──────────────┼──────────────┼──────────────┼───────────────────────────  │
│ (Sprint 2+) │              │              │              │ ✅ US-34 create_tables()      │
│             │              │              │              │ ✅ US-35 Validações Pydantic  │
│ US-10       │              │              │              │ ✅ US-33 Swagger automático   │
│ US-11       │              │              │              │ ✅ US-01 Cadastro usuário     │
│ US-16~18    │              │              │              │ ✅ US-02 Login JWT            │
│ US-20~25    │              │              │              │ ✅ US-03 Logout               │
│ US-26~30    │              │              │              │ ✅ US-04 Token 24h            │
│ US-31~32    │              │              │              │ ✅ US-05 Erros de auth        │
│             │              │              │              │ ✅ US-19 Categorias           │
│             │              │              │              │ ✅ US-06 POST /incomes/       │
│             │              │              │              │ ✅ US-07 GET /incomes/        │
│             │              │              │              │ ✅ US-08 PUT /incomes/{id}    │
│             │              │              │              │ ✅ US-09 DELETE /incomes/{id} │
│             │              │              │              │ ✅ US-12 POST /expenses/      │
│             │              │              │              │ ✅ US-13 GET /expenses/       │
│             │              │              │              │ ✅ US-14 PUT /expenses/{id}   │
│             │              │              │              │ ✅ US-15 DELETE /expenses/{id}│
└─────────────┴──────────────┴──────────────┴──────────────┴───────────────────────────  ┘
```

---

## Kanban — Sprint 2 (Estado Final)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                          SMARTEXPENSE — SPRINT 2                                        │
├─────────────┬──────────────┬──────────────┬──────────────┬───────────────────────────  │
│  BACKLOG    │    TO DO     │    DOING     │   REVIEW     │    DONE                      │
├─────────────┼──────────────┼──────────────┼──────────────┼───────────────────────────  │
│ (Sprint 3)  │              │              │              │ ✅ global.css design system   │
│             │              │              │              │ ✅ auth.css                   │
│ US-26~30    │              │              │              │ ✅ api.js                     │
│             │              │              │              │ ✅ utils.js                   │
│             │              │              │              │ ✅ auth.js                    │
│             │              │              │              │ ✅ login.html + register.html │
│             │              │              │              │ ✅ US-20 Card saldo           │
│             │              │              │              │ ✅ US-21 Card receitas        │
│             │              │              │              │ ✅ US-22 Card despesas        │
│             │              │              │              │ ✅ US-23 Card registros       │
│             │              │              │              │ ✅ US-24 Gráfico pizza        │
│             │              │              │              │ ✅ US-25 Gráfico barras       │
│             │              │              │              │ ✅ income.html + income.js    │
│             │              │              │              │ ✅ expenses.html + expenses.js│
│             │              │              │              │ ✅ US-10 Filtro período recv  │
│             │              │              │              │ ✅ US-11 Busca descrição recv │
│             │              │              │              │ ✅ US-16 Filtro cat desp      │
│             │              │              │              │ ✅ US-17 Filtro período desp  │
│             │              │              │              │ ✅ US-18 Busca descrição desp │
│             │              │              │              │ ✅ US-31 Responsividade       │
│             │              │              │              │ ✅ US-32 Toast feedback       │
└─────────────┴──────────────┴──────────────┴──────────────┴───────────────────────────  ┘
```

---

## Kanban — Sprint 3 (Estado Final)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                          SMARTEXPENSE — SPRINT 3                                        │
├─────────────┬──────────────┬──────────────┬──────────────┬───────────────────────────  │
│  BACKLOG    │    TO DO     │    DOING     │   REVIEW     │    DONE                      │
├─────────────┼──────────────┼──────────────┼──────────────┼───────────────────────────  │
│             │              │              │              │ ✅ report_service.py          │
│             │              │              │              │ ✅ report_router.py           │
│             │              │              │              │ ✅ US-26 Relatório categorias │
│             │              │              │              │ ✅ US-27 Gráfico pizza filtro │
│             │              │              │              │ ✅ US-28 Gráfico linha saldo  │
│             │              │              │              │ ✅ US-29 Filtro período relat.│
│             │              │              │              │ ✅ US-30 Tabela mensal        │
│             │              │              │              │ ✅ reports.html + reports.js  │
│             │              │              │              │ ✅ Docs Scrum (15 arquivos)   │
│             │              │              │              │ ✅ README.md                  │
│             │              │              │              │ ✅ .gitignore + requirements   │
│             │              │              │              │ ✅ Apresentação final         │
└─────────────┴──────────────┴──────────────┴──────────────┴───────────────────────────  ┘
```

---

## Métricas do Fluxo

| Métrica                     | Sprint 1 | Sprint 2 | Sprint 3 |
|-----------------------------|----------|----------|----------|
| Itens iniciados             | 17       | 21       | 12       |
| Itens concluídos            | 17       | 21       | 12       |
| Lead Time médio (dias)      | 4        | 3        | 5        |
| Cycle Time médio (dias)     | 2        | 2        | 3        |
| Taxa de entrega             | 100%     | 100%     | 100%     |
| Itens bloqueados (total)    | 2        | 2        | 0        |

---

## Legenda

| Símbolo | Significado            |
|---------|------------------------|
| ✅       | Concluído (Done)       |
| ⚙       | Em andamento (Doing)   |
| 👁       | Em revisão (Review)    |
| ☐       | Pendente (To Do)       |
| 🚫      | Bloqueado              |
