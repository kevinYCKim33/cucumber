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

        <div className="App-body">
          <div className="filler">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
