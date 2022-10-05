import fetchCurrencyInfo from '../../services/currencyAPI';

// Coloque aqui suas actions
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const GET_CURRENCY_INFO = 'GET_CURRENCY_INFORMATIONS';
export const CURRENCY_INFO_SUCCESS = 'CURRENCY_INFO_SUCCESS';
export const CURRENCY_INFO_FAIL = 'CURRENCY_INFO_FAIL';
export const CURRENT_CURRENCY_INFO_SUCCESS = 'CURRENT_CURRENCY_INFO_SUCCESS';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

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

export const actCurrentCurrencyInfoSuccess = (payload) => ({
  type: CURRENT_CURRENCY_INFO_SUCCESS,
  payload,
});

export const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export const fetchWithThunk = (
  successAction,
  customPayload,
) => async (dispatch) => {
  dispatch(actGetCurrencyInfo());
  try {
    const payload = await fetchCurrencyInfo();
    return successAction === actCurrencyInfoSuccess ? dispatch(successAction(payload))
      : dispatch(successAction({ ...customPayload,
        exchangeRates: payload,
      }));
  } catch (err) {
    dispatch(actCurrencyInfoFail());
  }
};
