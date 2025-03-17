import axios from 'axios';

export async function getData() {
  try {
    const response = await axios.get('http://localhost:3000');
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function createData(data) {
  axios
    .post('http://localhost:3000/movie', {
      title: data.get('title'),
      body: data.get('body'),
      poster: data.get('poster'),
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
