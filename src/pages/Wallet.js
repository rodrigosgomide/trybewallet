import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { fetchWithThunk,
  actCurrencyInfoSuccess,
  actCurrentCurrencyInfoSuccess } from '../redux/actions';
// import { fetchCurrencyInfo, fatchCurrentCurrencyInfo } from '../services/currencyAPI';

class Wallet extends React.Component {
  state = {
    id: null,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWithThunk(actCurrencyInfoSuccess));
    this.expenseId();
  }

  expenseId = () => {
    const { wallet: { expenses } } = this.props;
    this.setState({ id: expenses.length });
  };

  handlerInput = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  handlerButton = (event) => {
    event.preventDefault();
    console.log(this.props);
    const { dispatch } = this.props;
    const { id } = this.state;
    dispatch(fetchWithThunk(
      actCurrentCurrencyInfoSuccess,
      this.state,
    ));
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      id: id + 1,
    });
  };

  total = () => {
    const { wallet: { expenses } } = this.props;
    return (expenses.reduce((total, atual) => {
      total += atual.value * atual.exchangeRates[atual.currency].ask;
      return total;
    }, 0)).toFixed(2);
  };

  render() {
    const { user, wallet } = this.props;
    console.log(wallet);
    const { value, description } = this.state;
    return (
      <div>
        <Header
          userEmail={ user.email }
          total={ this.total() }
        />
        <WalletForm
          currencies={ wallet.currencies }
          handlerInput={ this.handlerInput }
          expenseValue={ value }
          description={ description }
        />
        <button
          type="submit"
          onClick={ this.handlerButton }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Wallet);
