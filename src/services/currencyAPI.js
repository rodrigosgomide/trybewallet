const endpoint = 'https://economia.awesomeapi.com.br/json/all';

const fatchCurrencyInfo = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
};

export default fatchCurrencyInfo;
