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

EmailInput.propTypes = {
  testId: PropTypes.string.isRequired,
  stateEmail: PropTypes.func.isRequired,
};

export default EmailInput;
