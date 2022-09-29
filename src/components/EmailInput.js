import PropTypes from 'prop-types';
import React, { Component } from 'react';

class EmailInput extends Component {
  render() {
    const { stateEmail, testId } = this.props;
    return (
      <input
        type="email"
        placeholder="Email"
        required
        data-testid={ testId }
        onChange={ stateEmail }
      />
    );
  }
}

export default EmailInput;
