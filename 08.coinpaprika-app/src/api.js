import axios from 'axios';

export async function getCoin() {
  try {
    const response = await axios.get('https://api.coinpaprika.com/v1/tickers');
    return response.data.filter(v => v.rank < 100);
  } catch (err) {
    console.log(err);
  }
}

export async function getExRate() {
  try {
    const response = await axios.get(
      'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=l5z31lZyXfhjW8Bugj7l3zR0DPQmRDO0&searchdate=20250312&data=AP01'
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getHeadLine() {
  try {
    const response = await axios(
      'https://newsdata.io/api/1/latest?apikey=pub_7003575f4e6d07e8068f6002d1976b40d6cf3&language=ko'
    );
    return response.data.results;
  } catch (err) {
    console.log(err);
  }
}

export function addComma(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function changeText(text) {
    return text.toString().replace(/^(.{30}).+$/, "$1...")
}
