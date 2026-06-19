# Definition of Done — SmartExpense

**Acordada em:** Sprint 0 (16/03/2026)  
**Aprovada por:** Rafael Becker (PO), Arthur Rian (SM), Leonardo Bion (Dev)  

> A Definition of Done (DoD) é o acordo entre o Time Scrum sobre os critérios que devem ser cumpridos para que um item do backlog seja considerado **"Pronto"** (Done).  
> Nenhuma User Story pode ser marcada como concluída sem satisfazer todos os critérios abaixo.

---

## Critérios Gerais (aplicam-se a qualquer item)

| # | Critério                                                              | Verificação              |
|---|-----------------------------------------------------------------------|--------------------------|
| 1 | O código está implementado e funcional                                | Teste manual             |
| 2 | O fluxo principal (happy path) foi testado sem erros                 | Teste manual             |
| 3 | Os cenários de erro foram testados (dados inválidos, não autorizado)  | Teste manual             |
| 4 | O código está commitado na branch correta (`feat/` → `develop`)      | Git log                  |
| 5 | O Pull Request foi aberto, revisado e aprovado por pelo menos 1 membro| GitHub PR                |
| 6 | Não há bugs conhecidos não registrados                               | Revisão do time          |
| 7 | A funcionalidade não quebrou nenhuma funcionalidade existente        | Teste de regressão manual|

---

## Critérios para User Stories de Backend (API)

| # | Critério                                                              | Verificação              |
|---|-----------------------------------------------------------------------|--------------------------|
| 8 | O endpoint está documentado no Swagger (/docs)                       | Acessar /docs            |
| 9 | Retorna os códigos HTTP corretos (200, 201, 400, 401, 404, 409)       | Teste via Swagger        |
|10 | A validação Pydantic rejeita dados inválidos com mensagem clara       | Teste com dados errados  |
|11 | Operações que requerem autenticação retornam 401 sem token            | Teste sem Authorization  |
|12 | O banco de dados é atualizado corretamente                            | Verificar SQLite         |

---

## Critérios para User Stories de Frontend (UI)

| # | Critério                                                              | Verificação              |
|---|-----------------------------------------------------------------------|--------------------------|
|13 | A interface está funcional no Chrome (versão atual)                  | Teste manual             |
|14 | O layout está responsivo (mobile 375px, tablet 768px, desktop 1440px)| DevTools → Device toolbar|
|15 | Elementos interativos têm tap target mínimo de 44×44px               | Inspecionar no DevTools  |
|16 | O usuário recebe feedback visual após cada ação (toast ou alert)      | Teste manual             |
|17 | Mensagens de erro são claras e em português                           | Revisão de texto         |
|18 | Não há strings hardcoded em inglês visíveis ao usuário                | Revisão de código        |

---

## Critérios para User Stories de Autenticação

| # | Critério                                                              | Verificação              |
|---|-----------------------------------------------------------------------|--------------------------|
|19 | Senha é armazenada como hash bcrypt (nunca em texto plano)            | Inspeção do código       |
|20 | Token JWT expirado é rejeitado corretamente (401)                     | Teste com token expirado |
|21 | Logout limpa token e redireciona para login                           | Teste manual             |
|22 | Acesso a páginas protegidas sem token redireciona para login          | Navegar sem autenticação |

---

## Critérios para Gráficos e Relatórios

| # | Critério                                                              | Verificação              |
|---|-----------------------------------------------------------------------|--------------------------|
|23 | O gráfico exibe corretamente quando há dados                          | Com dados cadastrados    |
|24 | O gráfico exibe estado vazio quando não há dados                      | Com banco vazio          |
|25 | Instâncias anteriores do Chart.js são destruídas antes de recriar     | Inspeção do código       |
|26 | Filtros de período atualizam os dados do gráfico corretamente         | Teste com filtros        |

---

## Processo de Verificação

**Antes de abrir o PR:**
- [ ] Todos os critérios gerais (1–7) foram verificados pelo autor
- [ ] Critérios específicos do tipo (backend/frontend/auth/gráficos) foram verificados

**Durante o review do PR:**
- [ ] Revisor confirma que os critérios estão satisfeitos
- [ ] Revisor testa a funcionalidade localmente quando possível

**Após o merge:**
- [ ] Item marcado como **Done** no Sprint Backlog

---

## Exceções e Débito Técnico

Qualquer critério não satisfeito deve ser registrado como:
1. **Bug** no GitHub Issues, se for um erro não intencional
2. **Dívida técnica** no Product Backlog, se for uma escolha deliberada de simplificação

Itens com débito técnico podem ser marcados como Done **somente** se o PO (Rafael Becker) aprovar explicitamente a exceção.
