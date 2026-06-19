# Sprint Review — SmartExpense

> As Sprint Reviews foram realizadas com a participação de todos os integrantes e, quando possível, com demonstração para o Professor Ezyo Lamarca.

---

## Sprint Review — Sprint 1

**Data:** 26/04/2026  
**Participantes:** Rafael Becker, Arthur Rian, Leonardo Bion  
**Duração:** 45 minutos  

### Demonstração Realizada

O time demonstrou a API do SmartExpense em funcionamento via Swagger UI (http://localhost:8000/docs):

1. **Cadastro de usuário** — POST /api/auth/register
   - Criado usuário: `rafael@ifsc.edu.br` / senha: `123456`
   - Retornou token JWT + dados do usuário ✅

2. **Login** — POST /api/auth/login
   - Autenticação com as credenciais criadas ✅
   - Token copiado e usado no cabeçalho "Authorize" do Swagger ✅

3. **CRUD de Receitas** — Demonstração completa:
   - Criação de receita: "Salário" — R$ 3.500,00 — 01/04/2026 ✅
   - Criação de receita: "Freelance design" — R$ 800,00 — 15/04/2026 ✅
   - Listagem das receitas ✅
   - Edição da segunda receita (valor para R$ 1.000,00) ✅
   - Exclusão de receita ✅

4. **CRUD de Despesas** — Demonstração completa:
   - Criação de despesa: "Aluguel" / Moradia — R$ 900,00 ✅
   - Criação de despesa: "Supermercado" / Alimentação — R$ 450,00 ✅
   - Filtro por categoria=Alimentação ✅
   - Edição e exclusão ✅

### Meta Atingida?

✅ **SIM** — Todos os 38 pontos planejados foram entregues.

A API REST está completamente funcional com autenticação JWT, banco de dados SQLite e validações Pydantic.

### Feedback do Time

- **Arthur:** "A arquitetura em camadas ficou bem limpa. Vai facilitar muito quando formos criar o frontend."
- **Leonardo:** "Os repositories abstraem bem o banco de dados. Fácil de testar cada parte isoladamente."
- **Rafael:** "O Swagger automático do FastAPI é incrível para demonstração. Economiza horas de documentação manual."

### Itens Não Entregues

Nenhum.

### Backlog Atualizado

Nenhum item novo adicionado. Sprint 2 inicia conforme planejado.

---

## Sprint Review — Sprint 2

**Data:** 24/05/2026  
**Participantes:** Rafael Becker, Arthur Rian, Leonardo Bion  
**Duração:** 1 hora  

### Demonstração Realizada

O time demonstrou o sistema completo pelo navegador:

1. **Página de Login**
   - Interface dark mode com logo e formulário ✅
   - Login com credenciais criadas na Sprint 1 ✅
   - Redirecionamento automático para o dashboard ✅

2. **Dashboard**
   - Cards de resumo: Saldo, Receitas, Despesas, Total Registros ✅
   - Gráfico de barras: Receitas vs Despesas por mês ✅
   - Gráfico pizza/donut: Gastos por categoria ✅
   - Gráfico de linha: Evolução mensal ✅
   - Interface responsiva testada no modo mobile do DevTools ✅

3. **Página de Receitas**
   - Tabela com todas as receitas ✅
   - Modal de criação de nova receita ✅
   - Modal de edição ✅
   - Confirmação de exclusão ✅
   - Filtro por período ✅
   - Busca por descrição ✅

4. **Página de Despesas**
   - Mesmas funcionalidades de receitas + filtro por categoria ✅
   - Badge colorido para cada categoria ✅

5. **Responsividade**
   - Sidebar em drawer no mobile ✅
   - Hamburguer menu funcional ✅
   - Grid bento adaptando para 1 coluna no mobile ✅

### Meta Atingida?

✅ **SIM** — Todos os 38 pontos planejados foram entregues.

### Feedback do Time

- **Leonardo:** "A sidebar retrátil ficou muito boa no mobile. O usuario mal percebe que é uma SPA simples."
- **Arthur:** "Os gráficos Chart.js no tema escuro ficaram exatamente como imaginamos."
- **Rafael:** "O design system no CSS tornou muito fácil criar páginas novas mantendo consistência visual."

### Itens Não Entregues

Nenhum.

---

## Sprint Review — Sprint 3

**Data:** 21/06/2026  
**Participantes:** Rafael Becker, Arthur Rian, Leonardo Bion  
**Duração:** 1 hora  

### Demonstração Realizada

Demonstração do sistema completo:

1. **Página de Relatórios**
   - Filtro de período para análise por data ✅
   - Gráfico pizza filtrado por período ✅
   - Tabela de categorias com percentuais ✅
   - Gráfico barras: Receitas × Despesas mensais ✅
   - Gráfico linha: Evolução do saldo mensal ✅

2. **Fluxo completo end-to-end**
   - Banco de dados limpo (arquivo deletado) ✅
   - Cadastro de novo usuário ✅
   - Cadastro de 5 receitas e 8 despesas de categorias variadas ✅
   - Visualização do dashboard atualizado ✅
   - Análise dos relatórios gerados ✅

3. **Documentação**
   - Todos os 15 artefatos Scrum presentes na pasta `docs/` ✅
   - README.md completo com instruções de instalação ✅
   - Repositório GitHub organizado ✅

### Meta Atingida?

✅ **SIM** — Todos os 21 pontos entregues. Sistema completo e pronto para apresentação.

### Feedback Final

- **Arthur:** "Estou orgulhoso do resultado. Parece um produto real de mercado."
- **Leonardo:** "Aprendi muito sobre arquitetura de software e Scrum neste projeto."
- **Rafael:** "A metodologia Scrum realmente funcionou — entregas incrementais evitaram que fôssemos pegos de surpresa no final."
