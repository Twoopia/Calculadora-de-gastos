# Apresentação Final — SmartExpense

**Evento:** Apresentação da Disciplina de Gerência de Projetos  
**Data:** 02/07/2026  
**Local:** IFSC — Sala de Aula / Laboratório  
**Professor:** Ezyo Lamarca  
**Equipe:** Rafael Becker · Arthur Rian · Leonardo Bion  
**Duração estimada:** 15–20 minutos  

---

## Roteiro da Apresentação

### [0:00 – 2:00] Introdução

> "Bom dia, Professor Ezyo! Somos Rafael, Arthur e Leonardo. Vamos apresentar o **SmartExpense** — nosso Sistema de Controle Financeiro Pessoal, desenvolvido ao longo do semestre de 2026/1 como trabalho final da disciplina de Gerência de Projetos."

---

### [2:00 – 4:00] Problema e Solução

**Problema identificado:**

"Pesquisas mostram que mais de 60% dos jovens adultos não acompanham seus gastos mensais. Muitas pessoas chegam ao fim do mês sem saber para onde o dinheiro foi, acumulando dívidas e impossibilitando qualquer tipo de planejamento financeiro."

**Nossa solução — SmartExpense:**

"Desenvolvemos uma aplicação web que permite ao usuário registrar receitas e despesas, visualizar seu saldo em tempo real e analisar seus hábitos financeiros por meio de gráficos interativos e relatórios mensais."

---

### [4:00 – 7:00] Arquitetura e Tecnologias

**Stack tecnológica:**

| Camada    | Tecnologia                              |
|-----------|-----------------------------------------|
| Backend   | Python 3.12 + FastAPI + SQLAlchemy      |
| Banco     | SQLite (criado automaticamente)         |
| Frontend  | HTML5 + CSS3 + JavaScript Vanilla       |
| Gráficos  | Chart.js 4.4                            |
| Auth      | JWT (python-jose) + Bcrypt (passlib)    |
| API Docs  | Swagger UI (automático via FastAPI)     |
| VCS       | Git + GitHub                            |

**Arquitetura em Camadas:**

```
┌──────────────────────────────┐
│     Frontend (Browser)        │  HTML + CSS + JavaScript
├──────────────────────────────┤
│     API REST (FastAPI)        │  Routers → Services → Repositories
├──────────────────────────────┤
│     Banco de Dados (SQLite)   │  SQLAlchemy ORM
└──────────────────────────────┘
```

"Utilizamos a arquitetura em camadas, onde cada camada tem uma responsabilidade específica:
- **Routers:** recebem as requisições HTTP e definem os endpoints
- **Services:** contêm a lógica de negócio
- **Repositories:** abstraem o acesso ao banco de dados
- **Models:** definem as tabelas do banco"

---

### [7:00 – 13:00] Demonstração do Sistema (Live Demo)

**Roteiro da demonstração:**

1. **Abrir o sistema** → `http://localhost:8000`

2. **Tela de Login**
   - Mostrar o design dark mode
   - Demonstrar validação de e-mail inválido (feedback de erro)

3. **Criar conta nova**
   - Acessar página de Cadastro
   - Cadastrar com: Rafael Becker / rafael@ifsc.edu.br / 123456
   - Redireciona automaticamente para o Dashboard

4. **Dashboard vazio**
   - Mostrar os cards (R$ 0,00 em todos)
   - Explicar que os gráficos aparecerão quando houver dados

5. **Cadastrar Receitas**
   - "+ Nova receita" → Salário: R$ 3.500,00 (01/06/2026)
   - "+ Nova receita" → Freelance: R$ 800,00 (15/06/2026)
   - Mostrar toast de confirmação
   - Demonstrar filtro por período e busca por descrição

6. **Cadastrar Despesas**
   - Aluguel / Moradia / R$ 900,00 / 05/06/2026
   - Supermercado / Alimentação / R$ 450,00 / 10/06/2026
   - Gasolina / Transporte / R$ 250,00 / 12/06/2026
   - IFSC / Educação / R$ 150,00 / 01/06/2026
   - Mostrar edição de uma despesa
   - Mostrar filtro por categoria=Alimentação

7. **Dashboard atualizado**
   - Saldo: R$ 2.550,00 (verde)
   - Total receitas: R$ 4.300,00
   - Total despesas: R$ 1.750,00
   - Gráfico pizza com categorias
   - Gráfico de barras com comparativo

8. **Relatórios**
   - Gráfico pizza por categoria filtrado
   - Tabela com percentuais
   - Gráfico barras mensal
   - Gráfico linha de evolução do saldo

9. **Swagger / Docs**
   - Acessar `http://localhost:8000/docs`
   - Mostrar todos os endpoints documentados
   - Demonstrar uma chamada de API diretamente no Swagger

10. **Responsividade**
    - Abrir DevTools → Toggle device toolbar → iPhone SE
    - Mostrar sidebar retrátil com hamburguer menu
    - Mostrar que o layout adapta para mobile

---

### [13:00 – 16:00] Scrum Aplicado

**Como usamos o Scrum:**

"Aplicamos o Scrum seguindo o Guia Scrum 2020. Tivemos 3 Sprints de desenvolvimento além da Sprint 0 de planejamento."

| Artefato Scrum      | Nossa implementação                                 |
|---------------------|-----------------------------------------------------|
| Product Backlog     | 35 User Stories priorizadas e estimadas             |
| Sprint Backlog      | Seleção de itens a cada Sprint Planning             |
| Incremento          | Software funcional ao fim de cada Sprint            |

| Cerimônia           | Como realizamos                                     |
|---------------------|-----------------------------------------------------|
| Sprint Planning     | 1–2h presencial/online a cada início de Sprint      |
| Daily Scrum         | Assíncrona via WhatsApp — 3 perguntas padrão        |
| Sprint Review       | Demonstração do incremento ao time                  |
| Sprint Retrospective| Start · Stop · Continue ao fim de cada Sprint       |

**Papéis:**
- **Product Owner:** Rafael Becker — priorizou o backlog e tomou decisões de produto
- **Scrum Master:** Arthur Rian — facilitou cerimônias e removeu 5 impedimentos ao longo do projeto
- **Dev Team:** Todos os 3 — auto-organizados, responsabilidade coletiva pelo código

**Velocity:**
- Sprint 1: 38 Story Points
- Sprint 2: 38 Story Points
- Sprint 3: 21 Story Points
- **Total:** 97 Story Points em 3 Sprints

---

### [16:00 – 18:00] Resultados e Conclusão

**O que entregamos:**

| Categoria          | Quantidade            |
|--------------------|-----------------------|
| User Stories       | 35 de 35 (100%)       |
| Endpoints API      | 13 endpoints          |
| Páginas Frontend   | 6 páginas             |
| Gráficos Chart.js  | 6 gráficos            |
| Artefatos Scrum    | 15 documentos         |
| Commits            | 40+ commits           |

**Aprendizados:**

"Ao longo deste projeto, aprendemos que:
- **Scrum funciona** mesmo em equipes pequenas — as Sprints mantiveram o foco e evitaram a procrastinação
- **Arquitetura em camadas** facilita o trabalho paralelo e a manutenção
- **Entregas incrementais** reduzem o risco — a Sprint 1 com API completa nos deu confiança para o frontend
- **Definition of Done** é fundamental para que todos tenham a mesma visão do que é 'pronto'"

---

### [18:00 – 20:00] Perguntas e Discussão

"Obrigado, Professor Ezyo! Ficamos à disposição para responder dúvidas sobre o sistema, o código ou o processo Scrum que utilizamos."

---

## Checklist Pré-Apresentação

- [ ] Servidor rodando: `python -m uvicorn backend.main:app --reload`
- [ ] Banco de dados limpo (deletar `smartexpense.db` e reiniciar)
- [ ] Navegador Chrome aberto em `http://localhost:8000`
- [ ] DevTools em modo responsivo (iPhone SE) configurado
- [ ] Swagger acessível em `http://localhost:8000/docs`
- [ ] Documentação `docs/` aberta no explorador de arquivos
- [ ] GitHub com histórico de commits visível

---

## Contato

| Nome            | E-mail                    | GitHub             |
|-----------------|---------------------------|--------------------|
| Rafael Becker   | rafael.becker@aluno.ifsc  | @rafaelbecker      |
| Arthur Rian     | arthur.rian@aluno.ifsc    | @arthurrian        |
| Leonardo Bion   | leonardo.bion@aluno.ifsc  | @leonardobion      |
