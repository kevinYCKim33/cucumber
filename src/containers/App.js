import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import LoadingMessage from '../components/LoadingMessage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      loading: false,
    }
  }

  handleOnChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
      loading: true
    }
  )}

  render() {
    const { searchTerm, loading } = this.state;

    let displayMoviesList = null;

    if (loading) {
      displayMoviesList = (
        <LoadingMessage />
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
