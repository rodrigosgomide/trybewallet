// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SUCCESS_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};

function login(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUCCESS_LOGIN:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default login;
