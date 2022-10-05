import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, total } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          {userEmail}
        </div>
        <div data-testid="total-field">
          {total}
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  total: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default Header;
