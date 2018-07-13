# Curology Cucumbers

Curology Cucumbers is a React SPA that lets you browse through [The Movie Database API](https://www.themoviedb.org/).

Check out the working demo [here](https://curologycucumbers.netlify.com/).

![Cucumbers](https://i.imgur.com/Y903yi9.png)

## Installation

### Thing(s) you will need:

- [Node](https://nodejs.org/en/)

### Step(s)

Fork and clone the repo down to a local directory, `cd` into it, then run in the Terminal:

```
npm install
```

## Usage

Run the following command:

```
npm start
```

The browser should pop up to `localhost:3000`.

Start typing out what movie/franchise you'd like to know more about.  

## Challenges

### Implementing debounce

Because we wanted to display visual results as the user types, we couldn't settle for the classic "form-and-submit" button.  

Furthermore, since we did not want to make expensive API calls to TMDB every single time the user typed something, we had to implement a debounce function that sensed when the user was done typing his/her search query prior to making the API call.

These sources really helped out.

https://css-tricks.com/debouncing-throttling-explained-examples/

https://www.peterbe.com/plog/how-to-throttle-and-debounce-an-autocomplete-input-in-react

The first one had a solid set of examples and explanations on what debouncing and throttling is using jQuery, while the latter showed how to implement debounce in React.

### Edge cases with The Movie Database API

It took quite a bit of playing around with TMDB's API to realize that some movies do not list its release date, include any movie poster, or even provide any summary as to what the movie is.  

The solution itself was relatively simple use of declaring a variable then using if-else statements to check for edge cases like so:

```
let imageLink;
if (movie.poster_path) {
  imageLink = `https://image.tmdb.org/t/p/w92/${movie.poster_path}`;
} else {
  imageLink = defaultMoviePic
}

let releaseYear;
if (movie.release_date) {
  releaseYear = "(" + movie.release_date.slice(0,4) + ")";
}

let overview;
if (movie.overview) {
  overview = movie.overview;
}
```

Nevertheless, these got pretty tedious.

### Adding dynamic summary length

I really wanted to focus on creating an app that is mobile-friendly first, so I initially coded up my `<MovieDescription />` component to cut off the summary with a "Show more" button if the summary length was greater than 100 characters.

However, this looked rather awkward on desktop when the window width was medium to large size. Therefore, I tried to implement a dynamic cutoff point dependent on window size.

This ended up being a bit tricker than I had anticipated.  As React is all about *reacting* to changes, I thought I could just slip this line of code just under the `render()` function in my `<MovieDescription />`

```
render() {
  let cutoffPoint;
  if (window.innerWidth <= 450) {
    cutoffPoint = 100;
  } else if (window.innerWidth <= 650) {
    cutoffPoint = 250;
  } else {
    cutoffPoint = 350;
  }
  this.setState({
    cutoffPoint
  });
}

return (
  ...
  )
```
Unfortunately, this only triggered upon the first time `<MovieDescription />` mounted, and I had to do a bit of digging around the internet.

Thanks to this [blog post](https://www.hawatel.com/blog/handle-window-resize-in-react/), I now see that we had to add in an explicit window event listener when the component mounts onto the Virtual DOM like so:

```
updateWordCutOff = () => {
  let cutoffPoint;
  if (window.innerWidth <= 450) {
    cutoffPoint = 100;
  } else if (window.innerWidth <= 650) {
    cutoffPoint = 250;
  } else {
    cutoffPoint = 350;
  }
  this.setState({
    cutoffPoint
  });
}

componentDidMount = () => {
  this.updateWordCutOff();
  window.addEventListener("resize", this.updateWordCutOff);
}

componentWillUnmount = () => {
  window.removeEventListener("resize", this.updateWordCutOff);
}
```

## Design Decisions

I was really inspired by the way Rotten Tomatoes [handles](https://www.rottentomatoes.com/search/?search=Avengers) its queries and based my styling off it except my design was made with mobile experience first in mind.

Therefore, I did not choose pagination and opted to go with appending more movies when the user reaches the bottom of the page.  

## Future Improvements

### Add Tests
Though I've had several exposure to TDD with React apps through Flatiron School as well as writing a bit of Enzyme unit tests on my own on this [open-source project](https://github.com/austintackaberry/ydkjs-exercises/graphs/contributors), I would really like to get better at writing tests from ground-up, especially with mock-API calls that testing this app would heavily need.

### Infinite Scrolling
Right now when the user gets to the bottom, there is a modest 'Show More Movies' button.  I'd like to implement throttling and load more movies when the user is near the bottom of the screen.

### User Login
It would be nice to connect to a backend to store a user's favorite movie.

### Movie Show Page
Click on a movie, and we get routed to its show page, displaying additional information such as runtime, genre(s), and a bigger poster.


## Development

Developed by Kevin Y. Kim

## Contributing

Pull requests are welcome! Please follow the [Contributor's Code of Conduct](https://www.contributor-covenant.org/).
