import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getAllExperience = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/experience.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getAllExperience;
