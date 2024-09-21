# EnergyCalc

**EnergyCalc** é uma aplicação web que calcula o consumo energético de um produto baseado em seus dados de uso. O objetivo é fornecer uma estimativa de quanto será gasto na conta de energia elétrica com o uso de um determinado produto.

## Funcionalidades

- O usuário pode inserir o nome do produto e os seguintes dados:
  - Consumo energético do produto (em Kilowatts, W/100)
  - Tempo de uso diário (em horas)
  - Número de dias de uso no mês
  - Custo da energia (em R$/kWh)
- A aplicação calcula e exibe o valor aproximado do gasto mensal com o produto.
- Possibilidade de consultar um novo produto após o cálculo.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização e layout.
- **JavaScript**: Manipulação de dados e interação com o DOM.

## Como Usar

1. Clone este repositório:

   ```bash
   git clone https://github.com/sthefanny/energycalc.git
   ```

2. Abra o arquivo `index.html` no navegador para rodar a aplicação localmente.

3. Insira os seguintes dados no formulário:

   - **Nome do produto**: O nome do produto que você deseja calcular o gasto.
   - **Consumo energético do produto**: Insira o consumo energético do produto em kilowatts.
   - **Quantas horas de uso?**: Informe quantas horas por dia você usa o produto.
   - **Quantos dias, durante o mês você usa?**: Quantos dias no mês você usa o produto.
   - **Quanto você paga pela energia (R$/kWh)**: O custo da sua energia elétrica (em R$/kWh).

4. Clique em **Enviar** para ver o resultado do cálculo.

5. Caso deseje realizar uma nova consulta, clique em **Consultar novo produto**.

## Exemplo de Uso

Ao inserir as seguintes informações:

- Nome do produto: **Geladeira**
- Consumo energético: **150** watts
- Horas de uso: **24** horas por dia
- Dias de uso: **30** dias no mês
- Custo de energia: **0.85** R$/kWh

O sistema irá calcular e exibir o consumo mensal da geladeira, fornecendo o valor aproximado em reais.

---

Isso é um projeto simples de fim acadêmico. Esse `README.md` fornece uma visão clara do propósito e funcionamento da aplicação, além de instruções sobre como utilizá-la.
