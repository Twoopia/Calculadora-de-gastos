# Plano de Gerenciamento do Projeto — SmartExpense

**Versão:** 1.0  
**Data:** 16/03/2026  
**Baseado em:** Guia Scrum 2020 + PMBOK 7ª edição  

---

## 1. Visão Geral do Gerenciamento

O SmartExpense é gerenciado utilizando o framework **Scrum**, com cerimônias adaptadas à realidade de uma equipe acadêmica de 3 pessoas. O projeto segue um ciclo iterativo e incremental de 3 Sprints (além da Sprint 0 de planejamento), com entregas a cada 4–6 semanas.

---

## 2. Papéis e Responsabilidades

| Papel              | Pessoa           | Responsabilidades                                           |
|--------------------|------------------|-------------------------------------------------------------|
| **Product Owner**  | Rafael Becker    | Gerenciar e priorizar o Product Backlog; aceitar ou rejeitar entregas; representar os interesses do "cliente" (Professor Ezyo) |
| **Scrum Master**   | Arthur Rian      | Facilitar cerimônias Scrum; remover impedimentos; proteger o time de distrações externas; garantir que Scrum seja aplicado corretamente |
| **Dev Team**       | Rafael, Arthur, Leonardo | Entregar incrementos funcionais a cada Sprint; auto-organização; responsabilidade coletiva pelo código |

---

## 3. Planejamento de Tempo

### Cronograma de Sprints

| Sprint | Período                  | Duração    | Meta Principal                         |
|--------|--------------------------|------------|----------------------------------------|
| 0      | 16/03 → 29/03/2026       | 2 semanas  | Planejamento, setup, backlog           |
| 1      | 16/03 → 26/04/2026       | 6 semanas  | Backend completo (API + Banco)         |
| 2      | 27/04 → 24/05/2026       | 4 semanas  | Frontend + Dashboard                   |
| 3      | 25/05 → 21/06/2026       | 4 semanas  | Relatórios + Finalização               |
| Review | 22/06 → 01/07/2026       | 1,5 semanas| Revisão geral + Apresentação           |
| **Entrega** | **02/07/2026**     | —          | **Apresentação ao Professor Ezyo**     |

### Disponibilidade da Equipe

| Membro    | Horas/semana (estimado) | Dias de trabalho             |
|-----------|--------------------------|------------------------------|
| Rafael    | 8–10h                    | Segunda, Quarta, Sábado      |
| Arthur    | 8–10h                    | Terça, Quinta, Sábado        |
| Leonardo  | 6–8h                     | Segunda, Sexta, Sábado       |

---

## 4. Planejamento de Escopo

O escopo é gerenciado pelo Product Backlog, mantido pelo Product Owner (Rafael Becker). Qualquer alteração de escopo deve ser:

1. Proposta por qualquer membro durante a Sprint Review ou Sprint Planning
2. Avaliada pelo PO quanto à prioridade e viabilidade
3. Adicionada ao Product Backlog com estimativa
4. Incorporada ao Sprint Backlog somente na próxima Sprint Planning

**Mudanças de escopo durante uma Sprint ativa são proibidas**, exceto em casos críticos aprovados por todos os membros.

---

## 5. Gerenciamento de Comunicação

### Canais e Frequência

| Canal          | Propósito                              | Frequência               |
|----------------|----------------------------------------|--------------------------|
| WhatsApp (grupo) | Daily Scrums assíncronas; dúvidas rápidas | Diário (dias úteis)   |
| GitHub Issues  | Registro de bugs e impedimentos        | Quando necessário        |
| GitHub PRs     | Revisão de código e integração         | A cada feature completa  |
| Presencial/online | Sprint Planning, Review, Retro       | 1x por Sprint            |

### Protocolo de Daily Scrum

Cada membro responde às 3 perguntas no grupo do WhatsApp até as **20h** de cada dia útil:

```
📌 Daily [DD/MM]
✅ Ontem: [o que fiz]
🎯 Hoje: [o que farei]
🚧 Impedimentos: [nenhum / descrição do bloqueio]
```

---

## 6. Gerenciamento de Qualidade

### Práticas de Qualidade

| Prática                             | Aplicação                                      |
|-------------------------------------|------------------------------------------------|
| Code Review por PR                  | Mínimo 1 aprovação antes do merge              |
| Conventional Commits                | feat:, fix:, docs:, refactor:, style:          |
| Definition of Done                  | 26 critérios definidos (ver 12-definition-of-done.md) |
| Teste manual de regressão           | Antes de cada Sprint Review                    |
| Validação de dados no backend       | Pydantic validators em todos os schemas        |

### Padrões de Código

```
# Nomenclatura
- Funções Python:  snake_case
- Classes Python:  PascalCase
- Constantes:      UPPER_SNAKE_CASE
- Variáveis JS:    camelCase
- IDs HTML:        camelCase
- Classes CSS:     kebab-case

# Comprimento máximo de linha: 100 caracteres
# Encoding: UTF-8
# Indentação: 4 espaços (Python), 2 espaços (HTML/CSS/JS)
```

---

## 7. Gerenciamento de Riscos

| ID | Risco                                         | Prob. | Impacto | Severidade | Resposta                                   |
|----|-----------------------------------------------|-------|---------|------------|--------------------------------------------|
| R1 | Atraso por sobreposição com provas/trabalhos  | Alta  | Médio   | Alta       | Sprints com folga de 1 semana; buffer final |
| R2 | Conflito de merge no Git                      | Média | Baixo   | Baixa      | Branches por feature, rebase frequente     |
| R3 | Membro da equipe com problema de saúde        | Baixa | Alto    | Média      | Redistribuição de tarefas, escopo reduzido |
| R4 | Dificuldade técnica não prevista              | Média | Médio   | Média      | Pesquisa e documentação; pair programming  |
| R5 | Perda de dados (disco, acidente)              | Baixa | Alto    | Média      | Git + GitHub como backup remoto            |
| R6 | Mudança de requisito pelo professor           | Baixa | Alto    | Média      | Escopo documentado no Termo de Abertura    |

---

## 8. Gerenciamento de Configuração e Código

### Fluxo Git (GitFlow simplificado)

```
main           ← branch de produção (merge após Sprint Review)
  └── develop  ← branch de integração (base para PRs)
        ├── feat/us-01-auth-register
        ├── feat/us-06-income-crud
        ├── feat/us-20-dashboard
        └── docs/sprint-1-documentation
```

### Conventional Commits

```
feat: add income CRUD endpoints
fix: correct date filter comparison type
docs: add sprint 1 documentation
refactor: extract auth logic to service layer
style: update sidebar colors for dark theme
test: add manual test cases for auth endpoints
chore: update requirements.txt
```

### Regras de Branch

- `main`: protegida, merge apenas via PR com aprovação
- `develop`: integração contínua, merge via PR
- Feature branches: deletadas após merge
- Nomenclatura: `feat/nome-da-feature`, `fix/descricao-do-bug`, `docs/nome-do-doc`

---

## 9. Cerimônias Scrum

| Cerimônia            | Quando                    | Duração | Participantes      |
|----------------------|---------------------------|---------|---------------------|
| Sprint Planning      | 1º dia da Sprint          | 1–2h    | PO + SM + Dev Team  |
| Daily Scrum          | Diariamente (assíncrono)  | ~5 min  | Dev Team            |
| Sprint Review        | Último dia da Sprint      | 45–60 min | PO + SM + Dev Team |
| Sprint Retrospective | Após Sprint Review        | 30 min  | SM + Dev Team       |
| Backlog Refinement   | Mid-Sprint (semanal)      | 30 min  | PO + Dev Team       |

---

## 10. Métricas e Acompanhamento

| Métrica                | Ferramenta        | Frequência   |
|------------------------|-------------------|--------------|
| Velocity (pontos/sprint) | Sprint Backlog  | Por Sprint   |
| Bugs abertos           | GitHub Issues     | Semanal      |
| Commits por semana     | GitHub Insights   | Semanal      |
| % do backlog concluído | Product Backlog   | Por Sprint   |

**Velocity histórica:**
- Sprint 1: 38 pontos
- Sprint 2: 38 pontos
- Sprint 3: 21 pontos
- **Média:** 32,3 pontos/sprint
