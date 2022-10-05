import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

describe('Testa o componente Login', () => {
  beforeEach(cleanup);
  it('A pagina renderiza um input de email', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
  });
  it('A pagina renderiza um input de password', () => {
    renderWithRouterAndRedux(<App />);
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
  });
  it('Renderiza um botão com o texto "Entrar" e este está desabilitado', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByText('Entrar');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
  it('O botão é habilitado quando passado email e password no formato correto e ao clicar o email é enviado a store e a pagina é redirecionada para "/carteira"', () => {
    const { history, store } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByText('Entrar');
    const validEmail = 'rodrigo@rodrigo.com';

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, '12345');

    expect(button).toBeDisabled();

    userEvent.clear(emailInput);
    userEvent.clear(passwordInput);
    userEvent.type(emailInput, 'rodrigo@rodrigo');
    userEvent.type(passwordInput, '123456');
    expect(button).toBeDisabled();

    userEvent.clear(emailInput);
    userEvent.clear(passwordInput);
    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, '123456');
    expect(button).toBeEnabled();

    userEvent.click(button);
    expect(history.location.pathname).toBe('/carteira');
    expect(store.getState().user.email).toBe(validEmail);
  });
});
