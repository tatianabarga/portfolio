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

const getResume = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/links/resume.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getInstagram = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/links/instagram.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// const getProjectLinks = ({ project }) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/links/${project}.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

export {
  getLinkedin,
  getGithub,
  getResume,
  getInstagram,
  // getProjectLinks,
};
