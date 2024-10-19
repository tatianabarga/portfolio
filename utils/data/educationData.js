import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getAllEducation = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/education.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const rr = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/aboutme/email.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllEducation,
  rr,
};
