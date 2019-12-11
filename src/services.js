const axios = require('axios');

export const like = (reviewId) => {
  return axios({
    method: 'put',
    url: `http://35.246.56.181:30090/reviews/${reviewId}/like`
  })
  .then(data => console.log('like', data))
}

export const doComment = (reviewId, data) => {
  return axios({
    method: 'post',
    url: `http://35.246.56.181:30090/reviews/${reviewId}/comment`,
    data: data
  })
  .then(data => console.log('like', data))
}