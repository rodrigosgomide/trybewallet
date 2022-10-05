import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';
import mockData from './mockData';

describe('Testa o componente Wallet', () => {
  it('A pagina renderiza um input de email', async () => {
    const INITIAL_STATE = {
      initialState: {
        user: { email: 'rodrigo@rodrigo.com' },
        wallet: {
          currencies: [],
          expenses: [],
          editor: false,
          idToEdit: 0,
          error: null,
          isLoading: false,
        },
      },
    };
    const { history, store } = renderWithRouterAndRedux(<App />, INITIAL_STATE);
    const currencies = [
      'USD', 'CAD', 'GBP',
      'ARS', 'BTC', 'LTC',
      'EUR', 'JPY', 'CHF',
      'AUD', 'CNY', 'ILS',
      'ETH', 'XRP', 'DOGE',
    ];
    act(() => {
      history.push('/carteira');
    });

    const email = screen.getByTestId('email-field');
    const total = screen.getByTestId('total-field');
    const currency = screen.getByTestId('header-currency-field');
    const currencyInput = screen.getByTestId('currency-input');
    const tagInput = screen.getByTestId('tag-input');
    const methodInput = screen.getByTestId('method-input');
    const descriptionInput = screen.getByTestId('description-input');
    const valueInput = screen.getByTestId('value-input');
    const buttonSubmit = screen.getByText('Adicionar despesa');

    expect(email).toHaveTextContent('rodrigo@rodrigo.com');
    expect(total).toHaveTextContent('0.00');
    expect(currency).toHaveTextContent('BRL');

    await waitFor(() => expect(store.getState().wallet.currencies).toEqual(currencies));

    expect(currencyInput).toHaveLength(15);
    expect(tagInput).toHaveLength(5);
    expect(methodInput).toHaveLength(3);
    expect(descriptionInput).toBeInTheDocument();
    expect(valueInput).toBeInTheDocument();

    userEvent.type(valueInput, '100');
    userEvent.type(descriptionInput, 'teste');
    userEvent.click(buttonSubmit);
    expect(buttonSubmit).toBeInTheDocument();
    await waitFor(() => expect(store.getState().wallet.expenses).toHaveLength(1));
  });

  it('O total é atualizado quando adicionado uma despesa', () => {
    const INITIAL_STATE = {
      initialState: {
        user: { email: '' },
        wallet: {
          currencies: [],
          expenses: [
            {
              id: 0,
              value: '100',
              description: 'ifood',
              currency: 'USD',
              method: 'Dinheiro',
              tag: 'Alimentação',
              exchangeRates: mockData,
            },
            {
              id: 1,
              value: '50',
              description: 'Bar',
              currency: 'USD',
              method: 'Cartão de crédito',
              tag: 'Lazer',
              exchangeRates: mockData,
            },
          ],
          editor: false,
          idToEdit: 0,
          error: null,
          isLoading: false,
        },
      },
    };
    const { history, store } = renderWithRouterAndRedux(<App />, INITIAL_STATE);
    act(() => {
      history.push('/carteira');
    });
    const total = screen.getByTestId('total-field');
    expect(total).toHaveTextContent(712.97);
    expect(store.getState().wallet.expenses[0].id).toBe(0);
    expect(store.getState().wallet.expenses[1].id).toBe(1);
  });
});
