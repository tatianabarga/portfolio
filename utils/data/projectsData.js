import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getAllProjects = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/projects.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getAllProjects;
