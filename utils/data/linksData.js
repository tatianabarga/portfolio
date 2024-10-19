import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getLinkedin = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/links/LinkedIn.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getGithub = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/links/GitHub.json`, {
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
  getLinkedin,
  getGithub,
};
