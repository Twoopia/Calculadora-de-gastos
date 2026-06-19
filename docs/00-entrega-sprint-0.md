# Sprint 0 — Planejamento Inicial
## SmartExpense · Sistema de Controle Financeiro Pessoal

**Instituição:** IFSC — Instituto Federal de Santa Catarina  
**Disciplina:** Gerência de Projetos  
**Professor:** Ezyo Lamarca  
**Semestre:** 2026/1  

**Equipe:**

| Nome            | Papel Scrum     |
|-----------------|-----------------|
| Rafael Becker   | Product Owner   |
| Arthur Rian     | Scrum Master    |
| Leonardo Bion   | Desenvolvedor   |

**Data:** Março de 2026

---

## 1. Escolha do Projeto

### Nome
**SmartExpense** — Sistema de Controle Financeiro Pessoal

### Problema identificado
Muitas pessoas, especialmente jovens e estudantes, não acompanham suas finanças pessoais de forma organizada. Isso resulta em gastos descontrolados, impossibilidade de poupar e falta de visibilidade sobre para onde o dinheiro vai.

### Solução proposta
Uma aplicação web que permite ao usuário registrar receitas e despesas, visualizar seu saldo em tempo real e analisar seus hábitos financeiros por meio de gráficos e relatórios simples.

### Justificativa da escolha
- Relevante para o dia a dia dos próprios integrantes da equipe
- Escopo adequado para ser entregue em 3 Sprints
- Permite demonstrar todos os conceitos de um sistema web real (backend, frontend, banco de dados, autenticação)
- Tecnologias acessíveis e bem documentadas

### Tecnologias definidas

| Camada     | Tecnologia                                     |
|------------|------------------------------------------------|
| Backend    | Python 3.12 + FastAPI + SQLAlchemy + SQLite    |
| Frontend   | HTML5 + CSS3 + JavaScript Vanilla + Chart.js   |
| Autenticação | JWT (token de sessão)                        |
| Versionamento | Git + GitHub                                |

---

## 2. Definição do Escopo Inicial — Product Backlog

> User Stories no formato: *Como [usuário], quero [ação], para [benefício].*  
> Prioridade: Crítica > Alta > Média > Baixa · Estimativa em Story Points (Fibonacci)

### Épico 1 — Autenticação

| ID    | User Story                                                                 | Prioridade | Pontos |
|-------|----------------------------------------------------------------------------|------------|--------|
| US-01 | Como usuário, quero criar uma conta com nome, e-mail e senha               | Crítica    | 3      |
| US-02 | Como usuário, quero fazer login com e-mail e senha                         | Crítica    | 2      |
| US-03 | Como usuário, quero fazer logout para encerrar minha sessão                | Alta       | 1      |

### Épico 2 — Receitas

| ID    | User Story                                                                 | Prioridade | Pontos |
|-------|----------------------------------------------------------------------------|------------|--------|
| US-04 | Como usuário, quero cadastrar uma receita com descrição, valor e data      | Crítica    | 3      |
| US-05 | Como usuário, quero listar todas as minhas receitas                        | Crítica    | 3      |
| US-06 | Como usuário, quero editar uma receita existente                           | Alta       | 2      |
| US-07 | Como usuário, quero excluir uma receita                                    | Alta       | 2      |
| US-08 | Como usuário, quero filtrar receitas por período                           | Média      | 3      |

### Épico 3 — Despesas

| ID    | User Story                                                                 | Prioridade | Pontos |
|-------|----------------------------------------------------------------------------|------------|--------|
| US-09 | Como usuário, quero cadastrar uma despesa com descrição, categoria, valor e data | Crítica | 3   |
| US-10 | Como usuário, quero listar todas as minhas despesas                        | Crítica    | 3      |
| US-11 | Como usuário, quero editar uma despesa existente                           | Alta       | 2      |
| US-12 | Como usuário, quero excluir uma despesa                                    | Alta       | 2      |
| US-13 | Como usuário, quero filtrar despesas por categoria                         | Alta       | 3      |
| US-14 | Como usuário, quero filtrar despesas por período                           | Média      | 3      |

### Épico 4 — Dashboard

| ID    | User Story                                                                 | Prioridade | Pontos |
|-------|----------------------------------------------------------------------------|------------|--------|
| US-15 | Como usuário, quero ver meu saldo atual (receitas − despesas) em destaque  | Crítica    | 3      |
| US-16 | Como usuário, quero ver o total de receitas e despesas no dashboard        | Crítica    | 2      |
| US-17 | Como usuário, quero ver um gráfico de gastos por categoria                 | Alta       | 5      |
| US-18 | Como usuário, quero ver um gráfico mensal de receitas vs despesas          | Alta       | 5      |

### Épico 5 — Relatórios

| ID    | User Story                                                                 | Prioridade | Pontos |
|-------|----------------------------------------------------------------------------|------------|--------|
| US-19 | Como usuário, quero um relatório de gastos por categoria com percentuais   | Alta       | 5      |
| US-20 | Como usuário, quero ver a evolução do meu saldo em um gráfico de linha     | Média      | 5      |
| US-21 | Como usuário, quero filtrar relatórios por período                         | Média      | 3      |

**Total: 21 User Stories · 63 Story Points**

### Planejamento de Sprints

| Sprint | Período previsto      | Foco                              | Pontos |
|--------|-----------------------|-----------------------------------|--------|
| 1      | Mar → Abr/2026        | Backend: API REST + banco de dados| 20     |
| 2      | Abr → Mai/2026        | Frontend + Dashboard              | 23     |
| 3      | Mai → Jun/2026        | Relatórios + finalização          | 20     |

---

## 3. Quadro de Tarefas — Kanban

O quadro Kanban do SmartExpense é organizado em 5 colunas. Abaixo está o estado inicial (Sprint 0):

```
╔══════════════╦══════════════╦══════════════╦══════════════╦══════════════╗
║   BACKLOG    ║    TO DO     ║    DOING     ║   REVIEW     ║     DONE     ║
╠══════════════╬══════════════╬══════════════╬══════════════╬══════════════╣
║              ║              ║              ║              ║              ║
║  US-04       ║  US-01       ║              ║              ║ ✅ Escolha   ║
║  US-05       ║  US-02       ║              ║              ║    do projeto║
║  US-06       ║  US-03       ║              ║              ║              ║
║  US-07       ║  US-09       ║              ║              ║ ✅ Backlog   ║
║  US-08       ║  US-10       ║              ║              ║    definido  ║
║  US-11       ║  US-11       ║              ║              ║              ║
║  US-12       ║  US-12       ║              ║              ║ ✅ Kanban    ║
║  US-13       ║              ║              ║              ║    criado    ║
║  US-14       ║              ║              ║              ║              ║
║  US-15~21    ║              ║              ║              ║ ✅ MVP       ║
║              ║              ║              ║              ║    definido  ║
╚══════════════╩══════════════╩══════════════╩══════════════╩══════════════╝
```

### Regras do Kanban

| Regra                          | Descrição                                              |
|--------------------------------|--------------------------------------------------------|
| WIP Limit (Doing)              | Máximo 2 itens em andamento por pessoa ao mesmo tempo  |
| Definição de "Done"            | Implementado, testado, integrado ao GitHub e sem erros |
| Prioridade de entrada no To Do | Segue a ordem de prioridade do Product Backlog (Crítica → Alta → Média) |
| Bloqueios                      | Item recebe tag 🚫 e o impedimento é registrado na Daily |

---

## 4. Definição do MVP

### O que é o MVP do SmartExpense?

O MVP (Minimum Viable Product) é a versão mínima do SmartExpense que já entrega valor real para o usuário final — ou seja, o menor conjunto de funcionalidades que resolve o problema principal.

### Problema principal
O usuário não sabe quanto gastou nem quanto tem de saldo no mês.

### MVP: o que é suficiente para resolver esse problema?

O MVP do SmartExpense é composto pelas funcionalidades que permitem ao usuário **registrar seus gastos e receitas e ver seu saldo atual**. Nada mais.

### Funcionalidades do MVP

| # | Funcionalidade                              | User Story | Prioridade |
|---|---------------------------------------------|------------|------------|
| 1 | Criar conta e fazer login                   | US-01, US-02 | Crítica  |
| 2 | Cadastrar uma despesa (descrição, valor, data, categoria) | US-09 | Crítica |
| 3 | Listar despesas cadastradas                 | US-10      | Crítica    |
| 4 | Cadastrar uma receita (descrição, valor, data) | US-04   | Crítica    |
| 5 | Listar receitas cadastradas                 | US-05      | Crítica    |
| 6 | Ver saldo atual (receitas − despesas)       | US-15      | Crítica    |
| 7 | Ver totais de receitas e despesas           | US-16      | Crítica    |

### O que NÃO faz parte do MVP

- Gráficos e relatórios (entregues nas Sprints 2 e 3)
- Filtros por período e categoria
- Edição e exclusão de lançamentos
- Visualizações avançadas

### Critério de validação do MVP

> "Se o usuário consegue **criar uma conta, registrar uma despesa de R$ 100,00 de Alimentação e ver que seu saldo caiu R$ 100,00**, o MVP está funcionando."

### Diagrama do MVP

```
Usuário
   │
   ├─── Criar conta / Login
   │
   ├─── Registrar receita ──────► Banco de Dados
   │
   ├─── Registrar despesa ─────► Banco de Dados
   │
   └─── Ver Dashboard ◄─────────── Cálculo: Receitas − Despesas
              │
              ├── Saldo atual
              ├── Total de receitas
              └── Total de despesas
```

### Evolução após o MVP

```
MVP (Sprint 1)          Sprint 2                  Sprint 3
──────────────          ──────────────────────    ────────────────────
✅ Auth                 ✅ Editar/excluir          ✅ Relatórios
✅ CRUD básico          ✅ Filtros                 ✅ Gráfico de pizza
✅ Saldo                ✅ Dashboard visual        ✅ Gráfico mensal
                        ✅ Gráficos básicos        ✅ Evolução do saldo
```

---

*Documento elaborado pela equipe SmartExpense para entrega da atividade de Sprint 0 — Disciplina de Gerência de Projetos, IFSC 2026/1.*
