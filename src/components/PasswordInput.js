import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PasswordInput extends Component {
  render() {
    const { testId, statePassword } = this.props;

    return (
      <input
        type="password"
        placeholder="password"
        minLength={ 6 }
        required
        data-testid={ testId }
        onChange={ statePassword }
      />
    );
  }
}

export default PasswordInput;
