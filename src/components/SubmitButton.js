import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class SubmitButton extends Component {
  render() {
    const { isDisabled } = this.props;
    return (
      <button
        type="submit"
        disabled={ isDisabled }
      >
        Entrar
      </button>
    );
  }
}

export default SubmitButton;
