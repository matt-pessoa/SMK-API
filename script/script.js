const API_ROOT = 'https://api.smk.dk/api/v1';
const ENDPOINT_ART_SEARCH = '/art/search/';

function createElement({
  artist, // array | artist[0]
  colors, // array
  image_thumbnail, // string
  titles, // titles['0']['title']
  production, // array | production[0] --> info about the artist (sex, name, birth, death)
  production_date, // array | production_date[0].period --> date of production
  techniques, // array
}) {
  const artworkSearch = document.querySelector('#artwork-search');
  const newP = document.createElement('p');
  artworkSearch.appendChild(newP);
  newP.innerText = artist;
}

async function searchArt(key) {
  const response = await fetch(
    `${API_ROOT}${ENDPOINT_ART_SEARCH}/?keys=${key}&offset=0&rows=2000&lang=en`
  );
  const { items } = await response.json();
  const imagesOnly = items.filter((obj) => obj.has_image === true);

  imagesOnly.forEach((obj) => createElement(obj));

  // return imagesOnly;
}

function handleSearch() {
  const searchBtn = document.querySelector('#search-btn');
  searchBtn.addEventListener('click', () => {
    const val = document.querySelector('#art-search').value;
    searchArt(val);
  });
}

window.onload = () => {
  handleSearch();
};
