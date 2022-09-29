import React from 'react';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import SubmitButton from '../components/SubmitButton';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isButtonDisable: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { password } = this.state;
    if (prevState.password !== password) {
      this.setState({ isButtonDisable: this.isButtonDisable() });
    }
  }

  isButtonDisable = () => {
    const { password } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    return password.length < MIN_PASSWORD_LENGTH;
  };

  handlerEmail = ({ target: { value } }) => {
    this.setState({ email: value });
  };

  handlerPassword = ({ target: { value } }) => {
    this.setState({ password: value });
  };

  render() {
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
          <SubmitButton
            isDisabled={ this.state.isButtonDisable }
          />
        </form>
      </div>
    );
  }
}

export default Login;
