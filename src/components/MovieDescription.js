import React, { Component } from 'react';

class MovieDescription extends Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
      cutoffPoint: null,
    }
  }

  updateWordCutOff = () => {
    if (window.innerWidth <= 450) {
      this.setState({
        cutoffPoint: 100
      });
    } else if (window.innerWidth <= 650) {
      this.setState({
        cutoffPoint: 250,
      });
    } else {
      this.setState({
        cutoffPoint: 350,
      });
    }
  }

  componentDidMount = () => {
    this.updateWordCutOff();
    window.addEventListener("resize", this.updateWordCutOff);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWordCutOff);
  }

  toggleDescription = (event) => {
    event.preventDefault();

    const { showMore } = this.state;

    this.setState({
      showMore: !showMore,
    });
  }

  render() {
    const { cutoffPoint } = this.state;
    let synopsis = this.props.description;
    let showMoreOrLess;

    if (synopsis && synopsis.length > cutoffPoint) {
      if (this.state.showMore) {
        showMoreOrLess = "Show less";
      } else {
        showMoreOrLess = "Show more";
        synopsis = synopsis.slice(0, cutoffPoint) + "...";
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
