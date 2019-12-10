const axios = require('axios');

export const getInitialData = () => {
  return axios.get('http://localhost:8080/books')
    .then(data => console.log('poop', data))
}