const filmsUrl = 'https://ghibliapi.herokuapp.com/films',
      peopleUrl = 'https://ghibliapi.herokuapp.com/people';

const app = document.getElementById('app'),
      movies = document.createElement('div');
      
movies.setAttribute('class', 'movies');
app.appendChild(movies);