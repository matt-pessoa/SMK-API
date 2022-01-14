const API_ROOT = 'https://api.smk.dk/api/v1';
const ENDPOINT_ART_SEARCH = '/art/search/';

const scrollContainer = document.querySelector('#artwork-search');

scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

function getSelectedArtwork() {
  const selected = document.querySelector('.selected');
  return selected;
}

function addArtwork() {
  const artworkField = document.querySelector('#artwork-field');
  const artwork = getSelectedArtwork().cloneNode(true);
  artwork.classList.add('art-focus');
  artwork.classList.remove('item');
  artwork.firstElementChild.classList.remove('art-thumb');

  artworkField.appendChild(artwork);
}

//   <section>
//   <h3>Title</h3>
//   <p>titulo da obra (1800 - 1900)</p>
//   <h3>Artist</h3>
//   <p>nome do artista</p>
//   <h3>Techiniques</h3>
//   <p>pintura a oleo</p>
//   <h3>Color</h3>
//   <p>cores</p>
// </section>

function createCard({
  id,
  artist, // array | artist[0]
  colors, // array
  image_thumbnail, // string
  titles, // titles['0']['title']
  production, // array | production[0] --> info about the artist (sex, name, birth, death)
  production_date, // array | production_date[0].period --> date of production
  techniques,
}) {
  const card = document.createElement('section');
  card.setAttribute('id', 'artwork-info');

  // Title
  const artworkTitle = document.createElement('h3');
  artworkTitle.textContent = `${titles[0]['title']} (${production_date[0]['period']})`;
  card.appendChild(artworkTitle);

  //

  return card;
}

async function addArtInfo() {
  const artwork = document.querySelector('.art-focus');
  const artworkField = document.querySelector('#artwork-field');

  const search = document.querySelector('#art-search').value;

  const response = await fetch(
    `${API_ROOT}${ENDPOINT_ART_SEARCH}/?keys=${search}&offset=0&rows=2000&lang=en`
  );
  const { items } = await response.json();

  const artworkById = items.filter(
    (obj) => obj.id === artwork.getAttribute('id')
  )[0];

  artworkField.appendChild(createCard(artworkById));
}

function removeClass(field, className) {
  const artworkArray = Array.from(document.querySelector(`${field}`).children);
  artworkArray.forEach((item) => item.classList.remove(className));
}

function switchArtFocus() {
  const artworkField = document.querySelector('#artwork-field');
  artworkField.innerHTML = '';
  if (artworkField.children.length !== 0) {
    artworkField.removeChild(document.querySelector('.artwork-section'));
  }
}

function handleArtClick(event) {
  removeClass('#artwork-search', 'selected');

  switchArtFocus();

  const selected = event.target;
  selected.closest('.artwork-section').classList.add('selected');

  addArtwork();
  addArtInfo();
}

function createElement({
  id,
  artist, // array | artist[0]
  colors, // array
  image_thumbnail, // string
  titles, // titles['0']['title']
  production, // array | production[0] --> info about the artist (sex, name, birth, death)
  production_date, // array | production_date[0].period --> date of production
  techniques, // array
}) {
  const artworkSearch = document.querySelector('#artwork-search');
  const artworkSection = document.createElement('section');
  artworkSearch.appendChild(artworkSection);
  artworkSearch.firstElementChild.classList.add('selected');
  artworkSection.classList.add('artwork-section', 'item');
  artworkSection.setAttribute('id', `${id}`);
  artworkSection.addEventListener('click', handleArtClick);

  const thumbnail = document.createElement('img');
  thumbnail.classList.add('art-thumb');
  thumbnail.src = `${image_thumbnail}`;
  thumbnail.classList.add('rounded');
  artworkSection.appendChild(thumbnail);
}

async function searchArt(key) {
  const response = await fetch(
    `${API_ROOT}${ENDPOINT_ART_SEARCH}/?keys=${key}&offset=0&rows=2000&lang=en`
  );
  const { items } = await response.json();
  const imagesOnly = items.filter((obj) => obj.has_image === true);

  imagesOnly.forEach((obj) => createElement(obj));

  return imagesOnly;
}

function handleSearchClick() {
  const artworkSearch = document.querySelector('#artwork-search');
  artworkSearch.innerHTML = '';
  const search = document.querySelector('#art-search').value;

  searchArt(search);
}

function handleSearch() {
  const searchBtn = document.querySelector('#search-btn');

  searchBtn.addEventListener('click', handleSearchClick);
}

window.onload = () => {
  handleSearch();
};
