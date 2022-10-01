import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ButtonSubmit extends Component {
  render() {
    const { isDisabled, handlerButton } = this.props;
    return (
      <button
        type="submit"
        disabled={ isDisabled }
        onClick={ handlerButton }
      >
        Entrar
      </button>
    );
  }
}

export default ButtonSubmit;
