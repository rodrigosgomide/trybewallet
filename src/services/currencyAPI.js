const fetchCurrencyInfo = async () => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
};

export default fetchCurrencyInfo;

// export const fatchCurrentCurrencyInfo = async (currency) => {
//   const endpoint = `https://economia.awesomeapi.com.br/last/${currency}-BRL`;
//   console.log(endpoint);
//   const response = await fetch(endpoint);
//   const data = response.json();

//   return data;
// };
