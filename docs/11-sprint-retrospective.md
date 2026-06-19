# Sprint Retrospective — SmartExpense

> Retrospectives realizadas ao final de cada Sprint usando o formato **Start · Stop · Continue**.  
> Objetivo: inspecionar como o time trabalhou e criar um plano de melhoria para a próxima Sprint.

---

## Retrospective — Sprint 1

**Data:** 26/04/2026 (após a Sprint Review)  
**Facilitador:** Arthur Rian (Scrum Master)  
**Duração:** 30 minutos  

### Start (O que devemos começar a fazer?)

| Item                                                                 | Responsável |
|----------------------------------------------------------------------|-------------|
| Criar testes manuais documentados para cada endpoint antes do merge  | Leonardo    |
| Usar PR templates com checklist de Definition of Done                | Arthur      |
| Nomear branches seguindo padrão: `feat/nome-da-feature`              | Todos       |

### Stop (O que devemos parar de fazer?)

| Item                                                                 | Responsável |
|----------------------------------------------------------------------|-------------|
| Commitar diretamente na branch `develop` sem PR                      | Leonardo    |
| Deixar imports circulares se acumularem sem resolver na hora         | Rafael      |

### Continue (O que está funcionando bem?)

| Item                                                                 |
|----------------------------------------------------------------------|
| Dailys assíncronas via WhatsApp — rápidas e eficazes                |
| Divisão de tarefas clara por User Story                              |
| Uso do Swagger para testar endpoints antes de integrar ao frontend   |
| Padrão de Conventional Commits mantido por todos                     |

### Action Items

| Ação                                      | Responsável | Prazo       |
|-------------------------------------------|-------------|-------------|
| Criar template de PR no GitHub            | Arthur      | 28/04/2026  |
| Configurar branch protection em `develop` | Rafael      | 28/04/2026  |

### Sentimento da Equipe

| Membro    | Nota (1–5) | Comentário                                               |
|-----------|------------|----------------------------------------------------------|
| Rafael    | ⭐⭐⭐⭐⭐     | "Ótimo início! A arquitetura em camadas funcionou bem."  |
| Arthur    | ⭐⭐⭐⭐      | "Precisamos melhorar o processo de PR."                  |
| Leonardo  | ⭐⭐⭐⭐      | "Aprendi muito sobre FastAPI e SQLAlchemy."              |

---

## Retrospective — Sprint 2

**Data:** 24/05/2026 (após a Sprint Review)  
**Facilitador:** Arthur Rian (Scrum Master)  
**Duração:** 30 minutos  

### Start

| Item                                                                         | Responsável |
|------------------------------------------------------------------------------|-------------|
| Testar o sistema no celular físico, não só no DevTools                       | Todos       |
| Criar utilitário `escHtml()` para prevenir XSS antes de inserir HTML no DOM  | Leonardo    |

### Stop

| Item                                                                         |
|------------------------------------------------------------------------------|
| Reabrir o modal após erro sem limpar os campos — confunde o usuário          |
| Criar estilos inline no JavaScript — usar classes CSS                        |

### Continue

| Item                                                                         |
|------------------------------------------------------------------------------|
| Design system no CSS centralizado — facilitou muito criar páginas novas      |
| `utils.js` compartilhado entre todas as páginas — código DRY                 |
| Feedback do usuário (toast + alert inline) em todas as ações                 |
| Responsividade como requisito, não como "nice to have"                       |

### Action Items

| Ação                                               | Responsável | Prazo       |
|----------------------------------------------------|-------------|-------------|
| Adicionar `escHtml()` em todos os renders de tabela| Leonardo    | 26/05/2026  |
| Limpar campos do modal ao fechar                   | Arthur      | 26/05/2026  |
| Testar em celular físico                           | Todos       | 30/05/2026  |

### Sentimento da Equipe

| Membro    | Nota (1–5) | Comentário                                                             |
|-----------|------------|------------------------------------------------------------------------|
| Rafael    | ⭐⭐⭐⭐⭐     | "Ver o dashboard com os gráficos funcionando foi muito satisfatório!"  |
| Arthur    | ⭐⭐⭐⭐⭐     | "Chart.js + tema escuro ficou melhor do que esperávamos."              |
| Leonardo  | ⭐⭐⭐⭐      | "Responsividade deu mais trabalho do que o planejado, mas valeu."      |

---

## Retrospective — Sprint 3 (Final)

**Data:** 21/06/2026 (após a Sprint Review)  
**Facilitador:** Arthur Rian (Scrum Master)  
**Duração:** 45 minutos  

### Start (Recomendações para projetos futuros)

| Item                                                                              |
|-----------------------------------------------------------------------------------|
| Adicionar testes automatizados desde o início (pytest para a API)                 |
| Implementar CI/CD no GitHub Actions para rodar testes a cada push                 |
| Documentar decisões arquiteturais em um Architecture Decision Record (ADR)        |
| Usar ambiente de staging separado do desenvolvimento                              |

### Stop

| Item                                                                              |
|-----------------------------------------------------------------------------------|
| Deixar a documentação Scrum para a última sprint — deveria ser feita em paralelo  |
| Estimar tasks técnicas (setup, config) com 0 pontos — tudo tem custo              |

### Continue

| Item                                                                              |
|-----------------------------------------------------------------------------------|
| Framework Scrum com Sprints e metas claras — manteve o foco                       |
| Conventional Commits — histórico de git limpo e legível                           |
| Arquitetura em 4 camadas — facilitou dividir o trabalho e isolar responsabilidades|
| Design system centralizado — consistência visual em todas as páginas              |
| Daily Scrums assíncronas — funcionaram muito bem para a dinâmica acadêmica        |

### Retrospectiva Final do Projeto

**O que aprendemos:**
- Scrum funciona mesmo em equipes pequenas de 3 pessoas
- Entregas incrementais (Sprint 1 API, Sprint 2 UI, Sprint 3 Relatórios) evitaram o acúmulo de dívida técnica
- A separação de responsabilidades (layered architecture) facilita o trabalho paralelo
- CSS bem estruturado com design system poupa tempo nas sprints seguintes

**O que mudaríamos:**
- Começar os testes automatizados desde a Sprint 1
- Fazer a documentação Scrum em paralelo com o desenvolvimento, não só no final

**Resultado geral:**

| Critério                | Avaliação |
|-------------------------|-----------|
| Funcionalidade          | ✅ 35/35 User Stories entregues |
| Qualidade do código     | ✅ Arquitetura limpa, sem duplicação |
| Interface               | ✅ Design profissional e responsivo |
| Documentação Scrum      | ✅ 15 artefatos completos |
| Trabalho em equipe      | ✅ Colaboração eficiente |
| Aplicação do Scrum      | ✅ Cerimônias realizadas, artefatos produzidos |

### Sentimento Final da Equipe

| Membro    | Nota (1–5) | Comentário                                                                  |
|-----------|------------|-----------------------------------------------------------------------------|
| Rafael    | ⭐⭐⭐⭐⭐     | "Projeto mais completo que já fizemos. Scrum foi essencial para conseguirmos entregar tudo." |
| Arthur    | ⭐⭐⭐⭐⭐     | "Aprendi mais neste projeto do que em qualquer outro semestre."              |
| Leonardo  | ⭐⭐⭐⭐⭐     | "SmartExpense virou um portfólio real. Muito orgulhoso do resultado."        |
