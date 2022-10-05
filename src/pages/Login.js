import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import ButtonSubmit from '../components/ButtonSubmit';
import { addEmail } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isButtonDisable: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { password, email } = this.state;
    if (prevState.password !== password || prevState.email !== email) {
      this.setState({ isButtonDisable: this.isButtonDisable() });
    }
  }

  isButtonDisable = () => {
    const { password, email } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    return !(email !== '' && password.length >= MIN_PASSWORD_LENGTH);
  };

  handlerEmail = ({ target: { value } }) => {
    const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return value.match(validate) ? this.setState({ email: value })
      : this.setState({ email: '' });
  };

  handlerPassword = ({ target: { value } }) => {
    this.setState({ password: value });
  };

  handlerButton = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  render() {
    const { isButtonDisable } = this.state;
    return (
      <div>
        <form>
          <EmailInput
            stateEmail={ this.handlerEmail }
            testId="email-input"
          />
          <PasswordInput
            testId="password-input"
            statePassword={ this.handlerPassword }
          />
          <ButtonSubmit
            isDisabled={ isButtonDisable }
            handlerButton={ this.handlerButton }
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
