import config from '../config';

async function getAllCategories() {
  const JSON_SERVER_URL = `${config.URL_BACKEND}/categories`;
  const response = await fetch(JSON_SERVER_URL);

  if (response.ok) {
    return response.json();
  }
  throw new Error('Não foi possível buscar os dados');
}

async function getAllCategoriesWithVideos() {
  const JSON_SERVER_URL = `${config.URL_BACKEND}/categories?_embed=videos`;
  const response = await fetch(JSON_SERVER_URL);

  if (response.ok) {
    return response.json();
  }
  throw new Error('Não foi possível buscar os dados');
}

export default {
  getAllCategories,
  getAllCategoriesWithVideos,
};
