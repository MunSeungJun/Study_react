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
      'https://m.search.naver.com/p/csearch/content/qapirender.nhn?key=calculator&pkid=141&q=%ED%99%98%EC%9C%A8&where=m&u1=keb&u6=standardUnit&u7=0&u3=USD&u4=KRW&u8=down&u2=1'
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

export async function getFlash() {
  try {
    const response = await axios(
      'https://newsdata.io/api/1/latest?apikey=pub_7003575f4e6d07e8068f6002d1976b40d6cf3&q=coin'
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
  return text.toString().replace(/^(.{150}).+$/, '$1...');
}
