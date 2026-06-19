# Sprint 0 — Planejamento e Setup

**Período:** 16/03/2026 a 29/03/2026 (2 semanas)  
**Objetivo:** Preparar toda a estrutura do projeto antes de iniciar o desenvolvimento  

---

## Objetivos da Sprint 0

A Sprint 0 não é uma sprint de desenvolvimento — é uma sprint de preparação. O objetivo é garantir que o time esteja alinhado, o ambiente configurado e o planejamento concluído antes de começar a produzir código.

---

## Atividades Realizadas

### 1. Definição do Projeto
- [x] Escolha do tema: Sistema de Controle Financeiro Pessoal
- [x] Definição do nome: **SmartExpense**
- [x] Elaboração da Visão do Produto (01-visao-do-produto.md)
- [x] Elaboração do Termo de Abertura (02-termo-de-abertura.md)

### 2. Definição de Papéis Scrum
- [x] **Product Owner:** Rafael Becker — responsável pelo backlog e priorização
- [x] **Scrum Master:** Arthur Rian — responsável pelas cerimônias e remoção de impedimentos
- [x] **Time de Desenvolvimento:** Rafael Becker, Arthur Rian, Leonardo Bion

### 3. Criação do Product Backlog
- [x] Mapeamento de todas as User Stories (35 ao total)
- [x] Estimativa em pontos de história (Story Points)
- [x] Priorização das US pelo Product Owner
- [x] Organização em épicos e sprints

### 4. Setup do Ambiente
- [x] Criação do repositório no GitHub
- [x] Configuração das branches `main` e `develop`
- [x] Adição do `.gitignore` (Python + Node)
- [x] Instalação do Python 3.12 e pip
- [x] Criação e ativação do ambiente virtual (`venv`)
- [x] Instalação das dependências: FastAPI, SQLAlchemy, Uvicorn, Passlib, python-jose
- [x] Criação do arquivo `requirements.txt`
- [x] Setup inicial da estrutura de pastas (backend/ e frontend/)

### 5. Definição de Arquitetura
- [x] Decisão pela arquitetura em camadas (routers → services → repositories → models)
- [x] Definição da stack: FastAPI + SQLAlchemy + SQLite + HTML/CSS/JS + Chart.js
- [x] Diagrama de arquitetura esboçado
- [x] Definição dos endpoints da API

### 6. Acordos de Trabalho (Working Agreements)
- [x] Dailys via mensagem no grupo WhatsApp (assíncronas — 3 perguntas padrão)
- [x] Commits seguindo Conventional Commits (`feat:`, `fix:`, `docs:`, etc.)
- [x] PRs para a branch `develop`; merge em `main` somente ao final de cada sprint
- [x] Revisão de código obrigatória antes do merge (pelo menos 1 aprovação)

### 7. Planejamento das Sprints
- [x] Sprint 1: Backend completo (16/03 a 26/04)
- [x] Sprint 2: Frontend e Dashboard (27/04 a 24/05)
- [x] Sprint 3: Relatórios e finalização (25/05 a 21/06)
- [x] Apresentação final: 02/07/2026

---

## Definition of Done (acordada na Sprint 0)

Uma User Story é considerada "Done" quando:
1. O código está implementado e funcional
2. Testado manualmente (fluxo feliz e cenários de erro)
3. Integrado à branch `develop` via Pull Request aprovado
4. Documentado (comentários no código onde necessário)
5. Sem erros conhecidos ou bugs críticos

---

## Resultado da Sprint 0

✅ **Sprint 0 concluída com sucesso.**

Todos os objetivos de preparação foram atingidos. O time está alinhado, o ambiente configurado e o Product Backlog priorizado. O projeto está pronto para iniciar o desenvolvimento na Sprint 1.

---

## Retrospectiva Rápida da Sprint 0

**O que funcionou bem:**
- Alinhamento rápido sobre a escolha do tema
- Todos conseguiram configurar o ambiente sem problemas

**O que pode melhorar:**
- Estimativas podem ser imprecisas — ajustar nas primeiras dailys da Sprint 1
- Manter comunicação diária mesmo sem cerimônias formais
