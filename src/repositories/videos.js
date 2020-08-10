import config from '../config';

async function create(video) {
  const JSON_SERVER_URL = `${config.URL_BACKEND}/videos`;
  const response = await fetch(JSON_SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(video),
  });

  if (response.ok) {
    return response.json();
  }
  throw new Error('Não foi possível inserir os dados');
}

export default {
  create,
};
