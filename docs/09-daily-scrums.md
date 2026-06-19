# Daily Scrums — SmartExpense

> As Daily Scrums foram realizadas de forma assíncrona via grupo no WhatsApp, seguindo as 3 perguntas padrão do Scrum:
> 1. O que fiz ontem?
> 2. O que farei hoje?
> 3. Há algum impedimento?

---

## Sprint 1 — Semana 1 (16/03 a 22/03/2026)

### Segunda-feira, 16/03/2026

**Rafael Becker (Product Owner / Dev)**
- Ontem: Sprint 0 finalizada, ambiente configurado
- Hoje: Criar `connection.py` e models (User, Income, Expense)
- Impedimentos: Nenhum

**Arthur Rian (Scrum Master / Dev)**
- Ontem: Sprint 0 finalizada, GitHub configurado
- Hoje: Criar schemas Pydantic (UserCreate, UserLogin, TokenResponse)
- Impedimentos: Dúvida sobre `model_config` no Pydantic v2 — vou consultar documentação

**Leonardo Bion (Dev)**
- Ontem: Sprint 0 finalizada
- Hoje: Criar IncomeCreate, IncomeUpdate, IncomeResponse schemas
- Impedimentos: Nenhum

---

### Quarta-feira, 18/03/2026

**Rafael:**
- Ontem: Models criados (User, Income, Expense) — `create_tables()` funcionando
- Hoje: `auth_service.py` (hash_password, create_access_token, decode_token)
- Impedimentos: Nenhum

**Arthur:**
- Ontem: Schemas de usuário concluídos
- Hoje: `dependencies.py` — `get_current_user` com HTTPBearer
- Impedimentos: Erro no Pydantic v2 com `from_attributes` — resolvido trocando `class Config` por `model_config`

**Leonardo:**
- Ontem: Schemas de receita e despesa concluídos
- Hoje: `income_repository.py` e `expense_repository.py`
- Impedimentos: Nenhum

---

### Sexta-feira, 20/03/2026

**Rafael:**
- Ontem: `auth_service.py` concluído — login e register funcionando
- Hoje: `auth_router.py` + testar no Swagger
- Impedimentos: Nenhum

**Arthur:**
- Ontem: `dependencies.py` concluído
- Hoje: Revisar PR do Rafael + iniciar `expense_service.py`
- Impedimentos: Nenhum

**Leonardo:**
- Ontem: Repositories concluídos
- Hoje: `income_service.py`
- Impedimentos: Nenhum

---

## Sprint 1 — Semana 3 (30/03 a 05/04/2026)

### Segunda-feira, 30/03/2026

**Rafael:**
- Ontem: `income_router.py` com todos os endpoints CRUD
- Hoje: `main.py` final com CORSMiddleware e startup
- Impedimentos: Nenhum

**Arthur:**
- Ontem: `expense_service.py` concluído
- Hoje: `expense_router.py` + rota `/categories`
- Impedimentos: Nenhum

**Leonardo:**
- Ontem: `income_service.py` concluído
- Hoje: Testar todos os endpoints via Swagger, identificar bugs
- Impedimentos: Nenhum

---

### Quinta-feira, 02/04/2026

**Leonardo:**
- Ontem: Encontrado bug no filtro de data (comparação de tipos diferentes)
- Hoje: Corrigir filtros de data nos repositories
- Impedimentos: ⚠️ Bug nos parâmetros de query `Optional[date]` — parse não estava ocorrendo

**Arthur:**
- Ontem: `expense_router.py` concluído
- Hoje: Review do bug do Leonardo + testar autenticação completa
- Impedimentos: Nenhum

**Rafael:**
- Ontem: `main.py` concluído
- Hoje: Corrigir imports circulares identificados nos models
- Impedimentos: Import circular entre `models/` e `schemas/` — usando import local dentro da função

---

## Sprint 2 — Semana 1 (27/04 a 03/05/2026)

### Segunda-feira, 27/04/2026

**Rafael:**
- Ontem: Sprint Review da Sprint 1 realizada
- Hoje: Criar `global.css` com design system completo (tokens, cards, grid)
- Impedimentos: Nenhum

**Arthur:**
- Ontem: Sprint Retrospective da Sprint 1
- Hoje: Criar `api.js` (cliente HTTP base)
- Impedimentos: Nenhum

**Leonardo:**
- Ontem: Retrospective
- Hoje: Criar `login.html` e `register.html`
- Impedimentos: Nenhum

---

### Quarta-feira, 29/04/2026

**Rafael:**
- Ontem: `global.css` com todos os tokens, cards, botões, forms, modal, tabela
- Hoje: `dashboard.html` (estrutura HTML + sidebar)
- Impedimentos: Nenhum

**Arthur:**
- Ontem: `api.js` e `utils.js` concluídos
- Hoje: `dashboard.js` — carregar dados e renderizar Chart.js
- Impedimentos: Chart.js — gráfico duplicando ao recarregar. Pesquisando solução.

**Leonardo:**
- Ontem: `login.html` e `register.html` com `auth.css` concluídos
- Hoje: `income.html` + `income.js`
- Impedimentos: Nenhum

---

### Sexta-feira, 01/05/2026

**Arthur:**
- Ontem: Solução Chart.js: guardar instância em variável e chamar `.destroy()` antes de recriar
- Hoje: Finalizar gráficos pizza e barras no dashboard
- Impedimentos: Nenhum

**Rafael:**
- Ontem: `dashboard.html` estrutura completa
- Hoje: Testar integração dashboard ↔ API + card de saldo com cor dinâmica
- Impedimentos: Nenhum

---

## Sprint 2 — Semana 3 (11/05 a 17/05/2026)

### Segunda-feira, 11/05/2026

**Leonardo:**
- Ontem: `income.html` e `income.js` com CRUD completo
- Hoje: `expenses.html` e `expenses.js`
- Impedimentos: Nenhum

**Arthur:**
- Ontem: Gráficos do dashboard funcionando com tema escuro
- Hoje: Sidebar mobile com drawer + overlay
- Impedimentos: z-index do sidebar conflitando com modal — resolvido usando z-index: 200 para sidebar e 500 para modal

**Rafael:**
- Ontem: Toast de feedback implementado (showToast)
- Hoje: Revisar responsividade em todas as páginas no DevTools
- Impedimentos: Input font-size precisava ser 16px para evitar zoom no iOS — corrigido no global.css

---

## Sprint 3 — Semana 1 (25/05 a 31/05/2026)

### Segunda-feira, 25/05/2026

**Arthur:**
- Ontem: Sprint Review da Sprint 2
- Hoje: `reports.html` (estrutura) + iniciar `reports.js`
- Impedimentos: Nenhum

**Rafael:**
- Ontem: Retrospective
- Hoje: `report_service.py` — lógica de groupby por categoria e mês
- Impedimentos: Nenhum

**Leonardo:**
- Ontem: Retrospective
- Hoje: `report_router.py` + filtros de período na API de relatórios
- Impedimentos: Nenhum

---

### Quarta-feira, 27/05/2026

**Rafael:**
- Ontem: `report_service.py` concluído (get_expenses_by_category + get_monthly_summary)
- Hoje: Iniciar documentação Scrum (01 a 05)
- Impedimentos: Nenhum

**Arthur:**
- Ontem: Gráfico pizza e barras em reports.js funcionando
- Hoje: Gráfico de linha (evolução do saldo) com pontos coloridos
- Impedimentos: Nenhum

**Leonardo:**
- Ontem: Filtros de período nos relatórios funcionando
- Hoje: Tabela de resumo mensal e tabela de categorias
- Impedimentos: Nenhum

---

## Sprint 3 — Semana 3 (08/06 a 14/06/2026)

### Terça-feira, 09/06/2026

**Rafael:**
- Ontem: Docs 01 a 08 concluídas
- Hoje: Daily scrums (09), Sprint Review (10), Retrospective (11)
- Impedimentos: Nenhum

**Arthur:**
- Ontem: Gráfico de linha com fill e cores dinâmicas
- Hoje: Finalizar relatórios, testar fluxo completo
- Impedimentos: Nenhum

**Leonardo:**
- Ontem: Tabelas de relatórios concluídas
- Hoje: Testar o sistema do zero com banco limpo
- Impedimentos: Nenhum

---

### Quinta-feira, 11/06/2026

**Todos:**
- Sistema testado end-to-end sem erros
- Documentação Scrum: faltam 12, 13, 14, 15
- Planejamento da apresentação em andamento
- Impedimentos: Nenhum

---

## Resumo de Impedimentos por Sprint

| Sprint | Impedimento                       | Responsável | Status  |
|--------|-----------------------------------|-------------|---------|
| 1      | Import circular nos models        | Rafael      | ✅ Resolvido |
| 1      | Bug filtro de datas               | Leonardo    | ✅ Resolvido |
| 2      | Chart.js duplicando gráficos      | Arthur      | ✅ Resolvido |
| 2      | z-index sidebar vs modal          | Arthur      | ✅ Resolvido |
| 2      | iOS zoom em inputs                | Rafael      | ✅ Resolvido |
