# Sprint 3 — Relatórios, Gráficos e Finalização

**Período:** 25/05/2026 a 21/06/2026 (4 semanas)  
**Scrum Master:** Arthur Rian  
**Meta da Sprint:** *Entregar a página de relatórios completa com 3 gráficos interativos, finalizar toda a documentação Scrum e preparar a apresentação final*

---

## Sprint Planning

**Data:** 25/05/2026  
**Duração:** 1 hora  

### Sprint Goal
> "Ao final desta Sprint, o SmartExpense estará 100% funcional com relatórios analíticos, documentação Scrum completa e pronto para apresentação no IFSC."

### Itens do Sprint Backlog

| ID    | User Story / Tarefa                          | Responsável  | Pontos |
|-------|----------------------------------------------|--------------|--------|
| US-26 | Relatório gastos por categoria com %         | Rafael       | 5      |
| US-27 | Gráfico pizza filtrado por período           | Arthur       | 5      |
| US-28 | Gráfico linha — evolução do saldo            | Arthur       | 5      |
| US-29 | Filtro de período na página relatórios       | Leonardo     | 3      |
| US-30 | Tabela resumo mensal (categoria/mês)         | Leonardo     | 3      |
| —     | Documentação Scrum (15 artefatos .md)        | Rafael/Arthur| —      |
| —     | README.md profissional                       | Rafael       | —      |
| —     | Organização final do repositório             | Arthur       | —      |
| —     | Apresentação final (slides/demo)             | Todos        | —      |
| **Total** |                                          |              | **21** |

---

## Funcionalidades Implementadas

### Página de Relatórios (`reports.html` + `reports.js`)

**Gráficos:**
1. **Pizza (Donut)** — Gastos por categoria, filtrado por período
   - Fonte de dados: `GET /api/reports/categories?start_date=...&end_date=...`
   - Cores: paleta de 8 cores (púrpura, verde, vermelho, amarelo...)
   
2. **Barras agrupadas** — Receitas × Despesas por mês
   - Fonte de dados: `GET /api/reports/monthly`
   - Verde para receitas, vermelho para despesas
   
3. **Linha** — Evolução do saldo mensal
   - Fonte de dados: `GET /api/reports/monthly` (campo `balance`)
   - Pontos verdes quando positivo, vermelhos quando negativo

**Tabela de categorias:**
- Lista ordenada por total (maior para menor)
- Exibe: categoria, total em R$, percentual
- Colorida com a mesma paleta do gráfico pizza

**Filtro de período:**
- Input de data inicial e final
- Atualiza o gráfico pizza e a tabela de categorias em tempo real
- O gráfico de barras e linha sempre mostram o histórico completo

---

## Endpoints de Relatórios

| Método | Endpoint                             | Parâmetros              |
|--------|--------------------------------------|-------------------------|
| GET    | /api/reports/categories              | ?start_date=&end_date=  |
| GET    | /api/reports/monthly                 | —                       |

**ReportService — Lógica de negócio:**
- `get_expenses_by_category()`: Agrupa despesas por categoria, calcula percentuais
- `get_monthly_summary()`: Mescla totais de receitas e despesas por ano/mês usando um mapa `{(ano, mês): {income, expense}}`

---

## Documentação Scrum Produzida

| Arquivo                       | Status |
|-------------------------------|--------|
| 01-visao-do-produto.md        | ✅     |
| 02-termo-de-abertura.md       | ✅     |
| 03-product-backlog.md         | ✅     |
| 04-sprint-backlog.md          | ✅     |
| 05-sprint-0.md                | ✅     |
| 06-sprint-1.md                | ✅     |
| 07-sprint-2.md                | ✅     |
| 08-sprint-3.md                | ✅     |
| 09-daily-scrums.md            | ✅     |
| 10-sprint-review.md           | ✅     |
| 11-sprint-retrospective.md    | ✅     |
| 12-definition-of-done.md      | ✅     |
| 13-kanban.md                  | ✅     |
| 14-plano-de-gerenciamento.md  | ✅     |
| 15-apresentacao-final.md      | ✅     |

---

## Preparação para Apresentação

- [x] Script de apresentação elaborado (15-apresentacao-final.md)
- [x] Sistema testado do zero (novo banco de dados limpo)
- [x] Fluxo demonstrado: cadastro → login → receitas → despesas → dashboard → relatórios
- [x] README.md revisado com instruções de instalação
- [x] Repositório GitHub organizado com commits history

---

## Resultados

✅ **Todos os 21 pontos entregues**  
✅ Página de relatórios com 3 gráficos Chart.js  
✅ Filtros por período funcionais  
✅ Documentação Scrum completa (15 artefatos)  
✅ Sistema pronto para apresentação em 02/07/2026  
