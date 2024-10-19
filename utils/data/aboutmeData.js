import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getEmail = () => new Promise((resolve, reject) => {
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

const getDescription = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/aboutme/description.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getPhone = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/aboutme/phone.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getTitle = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/aboutme/title.json`, {
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
  getEmail,
  getDescription,
  getPhone,
  getTitle,
};
