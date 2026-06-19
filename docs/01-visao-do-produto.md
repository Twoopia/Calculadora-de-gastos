# Visão do Produto — SmartExpense

**Projeto:** SmartExpense — Sistema de Controle Financeiro Pessoal  
**Instituição:** IFSC — Instituto Federal de Santa Catarina  
**Disciplina:** Gerência de Projetos  
**Professor:** Ezyo Lamarca  
**Semestre:** 2026/1  
**Integrantes:** Rafael Becker · Arthur Rian · Leonardo Bion  

---

## 1. Declaração de Visão

> **Para** jovens adultos e estudantes que precisam controlar suas finanças pessoais,  
> **Que** não conseguem acompanhar seus gastos e receitas de forma organizada,  
> **O SmartExpense** é um sistema web de controle financeiro pessoal,  
> **Que** permite cadastrar, visualizar e analisar receitas e despesas com gráficos e relatórios intuitivos,  
> **Diferente de** planilhas complexas e aplicativos pagos,  
> **O nosso produto** oferece uma interface moderna, simples e gratuita, acessível em qualquer dispositivo.

---

## 2. Objetivo do Produto

Desenvolver uma aplicação web full-stack que permita ao usuário:

- Registrar entradas (receitas) e saídas (despesas) financeiras
- Categorizar despesas por tipo (Alimentação, Transporte, Moradia etc.)
- Visualizar o saldo atual e o histórico financeiro
- Analisar gastos por categoria e por período com gráficos interativos
- Acessar relatórios mensais de receitas vs. despesas

---

## 3. Problema a Resolver

Muitas pessoas não têm controle sobre seus gastos mensais, resultando em:

- Dívidas inesperadas no final do mês
- Impossibilidade de poupar dinheiro
- Falta de visibilidade sobre para onde o dinheiro vai
- Dificuldade em planejar compras ou investimentos futuros

---

## 4. Público-Alvo

| Perfil          | Descrição                                                       |
|-----------------|-----------------------------------------------------------------|
| Estudantes      | Que precisam gerenciar bolsas, estágios e gastos pessoais       |
| Jovens adultos  | Iniciando vida financeira e querendo criar hábitos saudáveis    |
| Qualquer pessoa | Que deseja ter visibilidade sobre receitas e despesas mensais   |

---

## 5. Escopo do Produto

### Incluído (In-scope)
- Autenticação de usuários (cadastro, login, logout)
- CRUD completo de receitas
- CRUD completo de despesas com categorização
- Dashboard com resumo financeiro (saldo, totais, contagens)
- Gráficos: pizza por categoria, barras mensais, linha de saldo
- Relatórios: gastos por categoria, receitas vs. despesas, resumo mensal
- Filtros: por período, categoria e descrição
- API REST documentada com Swagger (FastAPI)
- Interface responsiva (mobile, tablet, desktop)

### Não incluído (Out-of-scope)
- Integração com bancos ou cartões de crédito
- Importação de extratos (OFX/CSV)
- Sistema multiusuário com compartilhamento
- Aplicativo móvel nativo (iOS/Android)
- Pagamentos ou assinaturas

---

## 6. Critérios de Sucesso

| Critério                          | Métrica                                     |
|-----------------------------------|---------------------------------------------|
| Sistema funcional                 | Todas as funcionalidades operando sem erros |
| Interface intuitiva               | Navegação clara, sem necessidade de manual  |
| Código organizado                 | Arquitetura em camadas respeitada           |
| Documentação Scrum completa       | Todos os 15 artefatos entregues             |
| Apresentação para o professor     | Demonstração ao vivo em 02/07/2026          |

---

## 7. Restrições e Premissas

**Restrições:**
- Prazo: entrega em 02/07/2026
- Time: 3 integrantes com carga acadêmica paralela
- Tecnologias definidas pelo escopo do trabalho

**Premissas:**
- O ambiente de execução será local (localhost)
- Não há necessidade de deploy em servidor de produção
- O banco de dados SQLite é suficiente para o escopo acadêmico

---

## 8. Partes Interessadas (Stakeholders)

| Parte interessada | Papel                             |
|-------------------|-----------------------------------|
| Rafael Becker     | Product Owner + Desenvolvedor     |
| Arthur Rian       | Scrum Master + Desenvolvedor      |
| Leonardo Bion     | Desenvolvedor                     |
| Ezyo Lamarca      | Professor / Cliente / Avaliador   |
| IFSC              | Instituição financiadora do curso |
