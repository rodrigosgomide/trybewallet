import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ButtonSubmit extends Component {
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

ButtonSubmit.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handlerButton: PropTypes.func.isRequired,
};

export default ButtonSubmit;
