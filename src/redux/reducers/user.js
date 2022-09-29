// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '', // string que armazena o email da pessoa usuária
  },
};

function login(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUCCESS_LOGIN:
    return { ...state, email: action.payload.email };
  default:
    return state;
  }
}

export default login;
