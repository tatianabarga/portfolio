import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getSoftSkills = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/skills/softSkills.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getTechSkills = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/skills/tech.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getJobSkills = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/skills/jobSkills.json`, {
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
  getSoftSkills,
  getTechSkills,
  getJobSkills,
};
