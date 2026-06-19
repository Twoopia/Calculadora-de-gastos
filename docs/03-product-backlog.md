# Product Backlog — SmartExpense

**Product Owner:** Rafael Becker  
**Última atualização:** 16/03/2026  

> As User Stories seguem o formato: *Como [persona], quero [ação], para [benefício].*  
> Prioridade: **Crítica > Alta > Média > Baixa**  
> Estimativas em pontos de história (sequência Fibonacci: 1, 2, 3, 5, 8, 13)

---

## ÉPICO 1 — Autenticação e Conta

| ID    | User Story                                                                                 | Prioridade | Pontos | Sprint |
|-------|--------------------------------------------------------------------------------------------|------------|--------|--------|
| US-01 | Como usuário, quero criar uma conta com nome, e-mail e senha para acessar o sistema        | Crítica    | 3      | 1      |
| US-02 | Como usuário, quero fazer login com e-mail e senha para acessar minhas finanças            | Crítica    | 2      | 1      |
| US-03 | Como usuário, quero fazer logout para encerrar minha sessão com segurança                  | Alta       | 1      | 1      |
| US-04 | Como usuário, quero que minha sessão seja mantida após fechar o navegador (token)          | Alta       | 2      | 1      |
| US-05 | Como usuário, quero receber mensagens de erro claras ao inserir credenciais incorretas     | Média      | 2      | 1      |

---

## ÉPICO 2 — Gestão de Receitas

| ID    | User Story                                                                                  | Prioridade | Pontos | Sprint |
|-------|---------------------------------------------------------------------------------------------|------------|--------|--------|
| US-06 | Como usuário, quero cadastrar uma receita com descrição, valor e data para registrar entradas| Crítica   | 3      | 1      |
| US-07 | Como usuário, quero listar todas as minhas receitas para ter uma visão geral das entradas   | Crítica    | 3      | 1      |
| US-08 | Como usuário, quero editar uma receita existente para corrigir dados incorretos             | Alta       | 2      | 1      |
| US-09 | Como usuário, quero excluir uma receita para remover registros indevidos                    | Alta       | 2      | 1      |
| US-10 | Como usuário, quero filtrar receitas por período para analisar entradas de um mês específico| Média     | 3      | 2      |
| US-11 | Como usuário, quero buscar receitas por descrição para encontrar lançamentos rapidamente    | Média      | 2      | 2      |

---

## ÉPICO 3 — Gestão de Despesas

| ID    | User Story                                                                                       | Prioridade | Pontos | Sprint |
|-------|--------------------------------------------------------------------------------------------------|------------|--------|--------|
| US-12 | Como usuário, quero cadastrar uma despesa com descrição, categoria, valor e data                 | Crítica    | 3      | 1      |
| US-13 | Como usuário, quero listar todas as minhas despesas para controlar meus gastos                   | Crítica    | 3      | 1      |
| US-14 | Como usuário, quero editar uma despesa existente para corrigir informações                       | Alta       | 2      | 1      |
| US-15 | Como usuário, quero excluir uma despesa para remover lançamentos incorretos                      | Alta       | 2      | 1      |
| US-16 | Como usuário, quero filtrar despesas por categoria para entender onde mais gasto                 | Alta       | 3      | 2      |
| US-17 | Como usuário, quero filtrar despesas por período para analisar gastos mensais                    | Média      | 3      | 2      |
| US-18 | Como usuário, quero buscar despesas por descrição para localizar um gasto específico             | Média      | 2      | 2      |
| US-19 | Como usuário, quero que as despesas sejam categorizadas (Alimentação, Transporte etc.)           | Alta       | 2      | 1      |

---

## ÉPICO 4 — Dashboard

| ID    | User Story                                                                                       | Prioridade | Pontos | Sprint |
|-------|--------------------------------------------------------------------------------------------------|------------|--------|--------|
| US-20 | Como usuário, quero ver meu saldo atual (receitas − despesas) em destaque no dashboard           | Crítica    | 3      | 2      |
| US-21 | Como usuário, quero ver o total de receitas no dashboard para ter visão rápida das entradas      | Crítica    | 2      | 2      |
| US-22 | Como usuário, quero ver o total de despesas no dashboard para controlar os gastos totais         | Crítica    | 2      | 2      |
| US-23 | Como usuário, quero ver a quantidade de lançamentos no dashboard como indicador de uso           | Média      | 1      | 2      |
| US-24 | Como usuário, quero ver um gráfico de pizza de gastos por categoria no dashboard                 | Alta       | 5      | 2      |
| US-25 | Como usuário, quero ver um gráfico de barras de receitas vs despesas mensais                     | Alta       | 5      | 2      |

---

## ÉPICO 5 — Relatórios e Gráficos

| ID    | User Story                                                                                       | Prioridade | Pontos | Sprint |
|-------|--------------------------------------------------------------------------------------------------|------------|--------|--------|
| US-26 | Como usuário, quero um relatório de gastos por categoria com percentuais para entender meus hábitos | Alta    | 5      | 3      |
| US-27 | Como usuário, quero um gráfico de pizza de categorias filtrado por período                       | Alta       | 5      | 3      |
| US-28 | Como usuário, quero ver a evolução mensal do saldo em um gráfico de linha                       | Média      | 5      | 3      |
| US-29 | Como usuário, quero filtrar os relatórios por período (data inicial e final)                     | Alta       | 3      | 3      |
| US-30 | Como usuário, quero uma tabela de resumo mensal com receitas, despesas e saldo por mês           | Média      | 3      | 3      |

---

## ÉPICO 6 — Experiência e Qualidade

| ID    | User Story                                                                                       | Prioridade | Pontos | Sprint |
|-------|--------------------------------------------------------------------------------------------------|------------|--------|--------|
| US-31 | Como usuário, quero que a interface funcione bem no celular (responsividade)                     | Alta       | 5      | 2      |
| US-32 | Como usuário, quero receber feedback visual (toast) após salvar ou excluir um registro            | Média      | 2      | 2      |
| US-33 | Como usuário, quero que a API seja documentada no Swagger para facilitar testes                  | Baixa      | 1      | 1      |
| US-34 | Como usuário, quero que o banco de dados seja criado automaticamente na primeira execução        | Crítica    | 2      | 1      |
| US-35 | Como usuário, quero que dados inválidos sejam rejeitados com mensagens de erro claras            | Alta       | 3      | 1      |

---

## Resumo do Backlog

| Épico               | User Stories | Total de Pontos |
|---------------------|-------------|-----------------|
| Autenticação        | 5           | 10              |
| Receitas            | 6           | 15              |
| Despesas            | 8           | 20              |
| Dashboard           | 6           | 18              |
| Relatórios          | 5           | 21              |
| Experiência         | 5           | 13              |
| **Total**           | **35**      | **97**          |

---

## Velocidade Esperada por Sprint

| Sprint | Capacidade (pontos) | User Stories |
|--------|---------------------|--------------|
| 0      | — (planejamento)    | —            |
| 1      | 30                  | US-01 a US-09, US-12~15, US-19, US-33~35 |
| 2      | 28                  | US-10~11, US-16~18, US-20~25, US-31~32   |
| 3      | 21                  | US-26 a US-30                             |
