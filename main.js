const filmsRequest = fetch('https://ghibliapi.herokuapp.com/films'),
      peopleRequest = fetch('https://ghibliapi.herokuapp.com/people');
const app = document.getElementById('app');
const movies = document.createElement('div');
movies.setAttribute('class', 'movies');
app.appendChild(movies);