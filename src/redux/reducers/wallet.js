// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCY_INFO,
  CURRENCY_INFO_SUCCESS,
  CURRENCY_INFO_FAIL,
  CURRENT_CURRENCY_INFO_SUCCESS,
  REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  error: null,
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY_INFO:
    return { ...state, isLoading: true };
  case CURRENCY_INFO_SUCCESS:
    return { ...state,
      currencies: Object.keys(action.payload).filter((key) => key !== 'USDT'),
      isLoading: false,
      error: null,
    };
  case CURRENCY_INFO_FAIL:
    return { ...state,
      error: 'Tivemos um problema =/',
      isLoading: false,
    };
  case CURRENT_CURRENCY_INFO_SUCCESS:
    return { ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REMOVE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((e) => e.id !== parseInt(action.payload, 10)),
    };
  default:
    return state;
  }
};

export default wallet;
