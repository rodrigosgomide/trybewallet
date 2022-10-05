import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  render() {
    const { currencies, handlerInput, expenseValue, description } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            value={ expenseValue }
            type="text"
            id="value"
            data-testid="value-input"
            onChange={ handlerInput }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            data-testid="currency-input"
            name="select"
            onChange={ handlerInput }
          >
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
          <select data-testid="method-input" id="method" onChange={ handlerInput }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select data-testid="tag-input" id="tag" onChange={ handlerInput }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descrição
          <input
            value={ description }
            type="text"
            id="description"
            data-testid="description-input"
            onChange={ handlerInput }
          />
        </label>

      </form>
    );
  }
}

WalletForm.propTypes = {
  handlerInput: PropTypes.func.isRequired,
  expenseValue: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currencies: PropTypes.instanceOf(Array).isRequired,
};

export default WalletForm;
