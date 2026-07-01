---
marp: true
theme: default
paginate: true
backgroundColor: '#0D0D0D'
color: '#C9B99A'
style: |
  section {
    font-family: 'DM Sans', sans-serif;
    background-color: #0D0D0D;
    color: #C9B99A;
    padding: 48px 60px;
  }
  h1 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    color: #E8D5B5;
    font-size: 2rem;
    border-bottom: 2px solid rgba(124,58,237,0.5);
    padding-bottom: 12px;
  }
  h2 {
    color: #9D6EFF;
    font-size: 1.3rem;
    font-weight: 600;
  }
  strong { color: #E8D5B5; }
  table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
  th { background: rgba(124,58,237,0.3); color: #E8D5B5; padding: 10px; text-align: left; }
  td { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 10px; }
  code { background: #161616; color: #9D6EFF; padding: 2px 8px; border-radius: 4px; }
  ul li { margin-bottom: 8px; }
  .capa-sub { color: #6B5E4E; font-size: 0.95rem; margin-top: 4px; }
  section.capa { display: flex; flex-direction: column; justify-content: center; }
  section.verde strong { color: #4ADE80; }
  section.roxo { border-left: 4px solid #7C3AED; padding-left: 56px; }
---

<!-- _class: capa -->

# 💰 Calculadora de Gastos

<p class="capa-sub">Sistema de Controle Financeiro Pessoal</p>

---

<br>

**Disciplina:** Gerência de Projetos — IFSC 2026/1
**Professor:** Ézyo Lamarca da Silva

<br>

| Integrante | Papel Scrum |
|---|---|
| Rafael Becker | Product Owner |
| Arthur Rian | Scrum Master |
| Leonardo Bion | Developer |

---

# O Problema

> Muitas pessoas não sabem para onde vai o dinheiro no final do mês.

- Falta de controle sobre **receitas e despesas**
- Sem visibilidade do **saldo real**
- Dificuldade em identificar **onde cortar gastos**

<br>

## Nossa solução

Uma aplicação web gratuita, acessível pelo celular ou computador, que centraliza o controle financeiro pessoal em um só lugar.

---

# O Produto — MVP

### O que a aplicação faz:

- **Cadastro e login** com autenticação segura (JWT)
- **Lançamento de receitas** com descrição, valor e data
- **Lançamento de despesas** por categoria (Alimentação, Transporte, Saúde…)
- **Dashboard** com saldo em tempo real e 3 gráficos interativos
- **Relatórios** mensais e por categoria
- **100% responsivo** — funciona no celular

---

# Demonstração ao Vivo

<!-- SUBSTITUA ESTE SLIDE PELA DEMO AO VIVO DO SITE -->

### Roteiro sugerido:

1. Abrir o site em produção: `calculadora-de-gastos.vercel.app`
2. Criar uma conta nova
3. Adicionar 2 receitas e 3 despesas
4. Mostrar o dashboard com saldo e gráficos
5. Abrir relatório por categoria

---

# Tecnologias Utilizadas

| Camada | Tecnologia |
|---|---|
| Backend | Python 3.12 · FastAPI · SQLAlchemy |
| Banco de dados | PostgreSQL (Neon) · SQLite local |
| Frontend | HTML5 · CSS3 · JavaScript Vanilla |
| Gráficos | Chart.js 4.4 |
| Autenticação | JWT · Bcrypt |
| Deploy | Vercel (serverless) |
| Versionamento | Git · GitHub |

---

# Scrum Aplicado

### Papéis

| Papel | Responsável | Responsabilidades |
|---|---|---|
| Product Owner | Rafael Becker | Backlog, priorização, visão do produto |
| Scrum Master | Arthur Rian | Facilitação, remoção de impedimentos |
| Developer | Leonardo Bion | Implementação das funcionalidades |

---

# Sprints

| Sprint | Período | Entrega |
|---|---|---|
| Sprint 0 | Planejamento | Setup, backlog, arquitetura |
| Sprint 1 | Semana 1–2 | Backend completo + API REST |
| Sprint 2 | Semana 3–4 | Frontend + Dashboard |
| Sprint 3 | Semana 5–6 | Relatórios + Deploy em produção |

<br>

**Cerimônias realizadas:** Planning · Daily · Review · Retrospective

---

# Backlog — Histórias de Usuário

### Concluídas no MVP ✅

- US-01 · Como usuário, quero me cadastrar e fazer login
- US-02 · Como usuário, quero lançar minhas receitas
- US-03 · Como usuário, quero lançar minhas despesas por categoria
- US-04 · Como usuário, quero ver meu saldo atual no dashboard
- US-05 · Como usuário, quero visualizar gráficos dos meus gastos
- US-06 · Como usuário, quero um relatório mensal de receitas vs despesas
- US-07 · Como usuário, quero acessar pelo celular

---

# Contribuições de Cada Membro

| Membro | Contribuições |
|---|---|
| **Rafael Becker** | Definição do backlog · Modelagem do banco · Autenticação JWT · Deploy Vercel |
| **Arthur Rian** | Facilitação das sprints · Módulo de despesas · Dashboard + gráficos |
| **Leonardo Bion** | Módulo de receitas · Frontend responsivo · Relatórios |

<!-- ADAPTE ESTA TABELA COM AS CONTRIBUIÇÕES REAIS DE CADA UM -->

---

# Lições Aprendidas — Scrum

### O que funcionou bem
- Sprints curtas mantiveram o foco e a entrega contínua
- Daily scrums (mesmo assíncronos) ajudaram a identificar bloqueios cedo
- Priorizar o backlog evitou desperdício de tempo com funcionalidades não essenciais

### O que melhoraríamos
- Estimativas de tempo foram otimistas nas primeiras sprints
- A Definition of Done deveria ter sido definida antes do Sprint 1
- Testes automatizados deveriam ter entrado no backlog desde o início

---

# Resultados

| Métrica | Resultado |
|---|---|
| Sprints concluídas | 4 de 4 ✅ |
| Histórias entregues | 7 de 7 ✅ |
| MVP em produção | ✅ (Vercel) |
| Cobertura de testes | Manual |
| Responsividade | Mobile + Tablet + Desktop ✅ |

---

# Próximos Passos (v2.0)

- [ ] Testes automatizados com pytest
- [ ] CI/CD com GitHub Actions
- [ ] Importação de extratos bancários (CSV)
- [ ] Definição de metas financeiras mensais
- [ ] Notificações de gastos excessivos
- [ ] Exportação de relatório em PDF

---

<!-- _class: capa -->

# Obrigado!

<br>

**Repositório:** github.com/Twoopia/Calculadora-de-gastos

**Produto:** calculadora-de-gastos.vercel.app

<br>

_Dúvidas?_
