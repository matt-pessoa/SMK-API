const API_ROOT = 'https://api.smk.dk/api/v1';
const ENDPOINT_ART_SEARCH = '/art/search/';

async function getArtSearch(key) {
  const response = await fetch(
    `${API_ROOT}${ENDPOINT_ART_SEARCH}/?keys=${key}&offset=0&rows=2000&lang=en`
  );
  const { items } = await response.json();
  const imagesOnly = items.filter((obj) => obj.has_image === true);

  console.log(imagesOnly);
}

function searchArt() {
  const searchBtn = document.querySelector('#search-btn');
  searchBtn.addEventListener('click', () => {
    const val = document.querySelector('#art-search').value;
    getArtSearch(val);
  });
}

function createElement({
  artist,
  colors,
  image_thumbnail,
  titles,
  production,
  production_date,
  techiniques,
}) {}

window.onload = () => {
  searchArt();
};
