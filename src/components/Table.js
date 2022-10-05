import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Moeda de conversão</th>
            <th>Valor convertido</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>
                { expense.tag }
              </td>
              <td>
                { expense.method }
              </td>
              <td>
                { parseFloat(expense.value).toFixed(2) }
              </td>
              <td>
                { expense.exchangeRates[expense.currency].name }
              </td>
              <td>
                { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>
                { (parseFloat(expense.value)
                  * expense.exchangeRates[expense.currency].ask)
                  .toFixed(2) }
              </td>
              <td>
                Real
              </td>
              {/* <td>
                <button type="submit" onClick={ handlerEditRemoveButton }>
                  Editar/Excluir
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.instanceOf(Array).isRequired,
};

export default Table;
