import React, { Component } from 'react';

class MovieDescription extends Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
    }
  }

  toggleDescription = (event) => {
    event.preventDefault();

    const { showMore } = this.state;

    this.setState({
      showMore: !showMore,
    });
  }

  render() {
    let synopsis = this.props.description;
    let showMoreOrLess;

    if (synopsis && synopsis.length > 100) {
      if (this.state.showMore) {
        showMoreOrLess = "Show less";
      } else {
        showMoreOrLess = "Show more";
        synopsis = synopsis.slice(0, 100) + "...";
      }
    }

    return (
      <div>
        <p>
          {synopsis}
        </p>
        <button
          onClick={this.toggleDescription}
          className="no-style-button"
        >
         {showMoreOrLess}
        </button>
      </div>
    )
  }
}

export default MovieDescription;
