import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Curology Cucumbers</h1>
          <div className="search-container">
            <form>
              <input
                placeholder="Search movies by title..."
                type="text"
              />
            </form>
          </div>
        </header>
        <footer>
          <a href="https://github.com/kevinYCKim33/cucumber" target="_blank" rel="noopener noreferrer" title="Github"><i className="fa fa-github-square"></i></a>
        </footer>
      </div>
    );
  }
}

export default App;
