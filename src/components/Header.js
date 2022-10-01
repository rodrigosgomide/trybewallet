import React, { Component } from 'react';

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

export default Header;
