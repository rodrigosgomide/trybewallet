import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Loading from '../components/Loading';
import WalletForm from '../components/WalletForm';
import { fetchWithThunk } from '../redux/actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWithThunk());
  }

  render() {
    const { user, wallet, isLoading } = this.props;
    return (
      <div>
        <Header
          userEmail={ user.email }
          total={ 0 }
        />
        {isLoading ? <Loading /> : <WalletForm currencies={ wallet.currencies } />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Wallet);
