import fatchCurrencyInfo from '../../services/currencyAPI';

// Coloque aqui suas actions
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const GET_CURRENCY_INFO = 'GET_CURRENCY_INFORMATIONS';
export const CURRENCY_INFO_SUCCESS = 'CURRENCY_INFO_SUCCESS';
export const CURRENCY_INFO_FAIL = 'CURRENCY_INFO_FAIL';

export const addEmail = (payload) => ({
  type: SUCCESS_LOGIN,
  payload,
});

export const actGetCurrencyInfo = () => ({
  type: GET_CURRENCY_INFO,
});

export const actCurrencyInfoSuccess = (payload) => ({
  type: CURRENCY_INFO_SUCCESS,
  payload,
});

export const actCurrencyInfoFail = () => ({
  type: CURRENCY_INFO_FAIL,
});

export const fetchWithThunk = () => async (dispatch) => {
  dispatch(actGetCurrencyInfo());
  try {
    const payload = await fatchCurrencyInfo();
    dispatch(actCurrencyInfoSuccess(payload));
  } catch (err) {
    console.log(err);
    dispatch(actCurrencyInfoFail());
  }
};
