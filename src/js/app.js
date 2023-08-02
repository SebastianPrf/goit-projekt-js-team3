import { fetchMovies, loadMovies, renderMoviesCards } from './fetch-data.js';
import { fetchMoviesByTitle } from './search-movies.js';
import { updatePagination, normalizeBeforeAfterPages, currentPage } from './pagination';

let totalPages;
let movieTitle = null;

const searchBtn = document.querySelector('.search-form__button');
const input = document.querySelector('.search-form__input');
const errorMsg = document.querySelector('.error-message');
const galleryOfMovies = document.querySelector('.movie-gallery');

///////////////////////////////
// ŁADOWANIE POPULARNYCH FILMÓW
///////////////////////////////
document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchMovies(1);
  await loadMovies(1);
  totalPages = 500;
  normalizeBeforeAfterPages();
  updatePagination();
});

///////////////////////////////
// WYSZUKIWARKA FILMÓW
///////////////////////////////
async function searchMovies(e) {
  e.preventDefault();
  if (input.value === '' && galleryOfMovies.innerHTML !== '') {
    errorMsg.style.display = 'flex';
    errorMsg.textContent = 'What are we looking for?';
    return;
  } else {
    errorMsg.style.display = 'none';
    movieTitle = input.value.trim();
    const data = await fetchMoviesByTitle(1, movieTitle);
    renderMoviesCards(data.results);
    totalPages = data.total_pages;
    normalizeBeforeAfterPages(true);
    updatePagination();
  }
}

searchBtn.addEventListener('click', searchMovies);

export { totalPages, movieTitle };
