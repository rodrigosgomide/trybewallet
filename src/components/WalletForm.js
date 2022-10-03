import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" data-testid="value-input" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency" data-testid="currency-input" name="select">
            {currencies.map((currency, index) => (
              <option
                key={ index }
                value={ currency }
              >
                {currency}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select data-testid="method-input" id="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito<">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select data-testid="tag-input" id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer<">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descrição
          <input type="text" id="description" data-testid="description-input" />
        </label>

      </form>
    );
  }
}

export default WalletForm;
