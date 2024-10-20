import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getAllCertifications = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/certifications.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getAllCertifications;
