import {BaseUrl, BaseUrl1} from '../service/NetworkUrl';

const get = urlOptions => {
  return fetch(BaseUrl + urlOptions, {
    headers: {
      'content-type': 'application/json',
      authorization: 'apikey 3LClSZgQMygoikmiodmpRN:21',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};
const post = (urlOption, body) => {
  return fetch(BaseUrl1 + urlOption, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'apikey 3LClSZgQMygoikmiodmpRN:21',
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

export {get, post};
