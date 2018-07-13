import React, { Component } from 'react';
import '../App.css';
import LoadingMessage from '../components/LoadingMessage';
import MoviesList from '../components/MoviesList';
import NoResultsFound from '../components/NoResultsFound';

import { debounce } from 'throttle-debounce';


// No real way/need to hide API KEY according to TMDB moderator
// https://www.themoviedb.org/talk/582744abc3a3683601019dcc?language=en
const API_KEY = '6b5c227f1b91880f22aa63f77c55a068';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      loading: false,
      page: null,
      totalPages: null,
      moviesResults: null,
      totalResults: null,
    };
    this.autocompleteSearchDebounced = debounce(500, this.autocompleteSearch);
  }

  //sources on debouncing:
      //https://css-tricks.com/debouncing-throttling-explained-examples/
      //https://www.peterbe.com/plog/how-to-throttle-and-debounce-an-autocomplete-input-in-react
  handleOnChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
      loading: true
    }, () => {
      this.autocompleteSearchDebounced(this.state.searchTerm);
    }
  )}

  autocompleteSearch = (autoQuery) => {
    this._fetchMovieResults(autoQuery);
  }

  _fetchMovieResults = (autoQuery) => {

    const query = encodeURIComponent(autoQuery);

    this.setState({
      loading: true,
    });

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(response => response.json())
      .then(queryResults => {
        this.setState({
          page: queryResults.page,
          totalResults: queryResults.total_results,
          totalPages: queryResults.total_pages,
          moviesResults: queryResults.results,
          loading: false,
        });
      });
  }

  loadMoreMovies = (event) => {
    event.preventDefault();
    const query = encodeURIComponent(this.state.searchTerm);
    let currentPage = this.state.page;
    let requestedPage = currentPage + 1;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${requestedPage}`)
      .then(response => response.json())
      .then(queryResults => {
        this.setState({
          page: queryResults.page,
          moviesResults: this.state.moviesResults.concat(queryResults.results),
        });
      });
  }

  render() {
    const { searchTerm, loading, page, totalResults, totalPages, moviesResults } = this.state;

    let displayMoviesList = null;

    if (loading) {
      displayMoviesList = (
        <LoadingMessage />
      );
    } else if (moviesResults && moviesResults.length > 0) {
      displayMoviesList = (
        <MoviesList
          page={page}
          searchTerm={searchTerm}
          totalResults={totalResults}
          totalPages={totalPages}
          moviesResults={moviesResults}
          loadMoreMovies={this.loadMoreMovies}
        />
      );
    } else if (moviesResults && moviesResults.length === 0) {
      displayMoviesList = (
        <NoResultsFound
          searchTerm={searchTerm}
        />
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Curology Cucumbers</h1>
          <div className="search-container">
            <form>
              <input
                placeholder="Search movies by title..."
                type="text"
                value={searchTerm}
                onChange={this.handleOnChange}
              />
            </form>
          </div>
        </header>

        <div className="App-body">
          <div className="filler">
            {displayMoviesList}
          </div>
        </div>

        <footer>
          <a href="https://github.com/kevinYCKim33/cucumber" target="_blank" rel="noopener noreferrer" title="Github"><i className="fa fa-github-square"></i></a>
        </footer>
      </div>
    );
  }
}

export default App;
