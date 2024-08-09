const movies = [
    {
      id: 0,
      imdbID: "tt10872600",
      title: "Spider-Man: No Way Home",
      year: 2021,
      director: "Jon Watts",
      genre: "Action",
      rating: 8.4,
      budgetInMillions: 200,
    },
    {
      id: 1,
      imdbID: "tt1160419",
      title: "Dune",
      year: 2021,
      director: "Denis Villeneuve",
      genre: "Sci-Fi",
      rating: 8.1,
      budgetInMillions: 165,
    },
    {
      id: 2,
      imdbID: "tt1877830",
      title: "The Batman",
      year: 2022,
      director: "Matt Reeves",
      genre: "Action",
      rating: 8.3,
      budgetInMillions: 185,
    },
    {
      id: 3,
      imdbID: "tt2382320",
      title: "No Time to Die",
      year: 2021,
      director: "Cary Joji Fukunaga",
      genre: "Action",
      rating: 7.3,
      budgetInMillions: 250,
    },
    {
      id: 4,
      imdbID: "tt10838180",
      title: "The Matrix Resurrections",
      year: 2021,
      director: "Lana Wachowski",
      genre: "Sci-Fi",
      rating: 5.7,
      budgetInMillions: 190,
    },
    {
      id: 5,
      imdbID: "tt9376612",
      title: "Shang-Chi and the Legend of the Ten Rings",
      year: 2021,
      director: "Destin Daniel Cretton",
      genre: "Action",
      rating: 7.4,
      budgetInMillions: 150,
    },
    {
      id: 6,
      imdbID: "tt2953050",
      title: "Encanto",
      year: 2021,
      director: "Byron Howard, Jared Bush",
      genre: "Animation",
      rating: 7.9,
      budgetInMillions: 120,
    },
    {
      id: 7,
      imdbID: "tt8847712",
      title: "The French Dispatch",
      year: 2021,
      director: "Wes Anderson",
      genre: "Comedy",
      rating: 7.2,
      budgetInMillions: 25,
    },
    {
      id: 8,
      imdbID: "tt11286314",
      title: "Don't Look Up",
      year: 2021,
      director: "Adam McKay",
      genre: "Comedy",
      rating: 7.2,
      budgetInMillions: 75,
    },
    {
      id: 9,
      imdbID: "tt6334354",
      title: "The Suicide Squad",
      year: 2021,
      director: "James Gunn",
      genre: "Action",
      rating: 7.2,
      budgetInMillions: 185,
    },
    {
      id: 10,
      imdbID: "tt6264654",
      title: "Free Guy",
      year: 2021,
      director: "Shawn Levy",
      genre: "Comedy",
      rating: 7.1,
      budgetInMillions: 100,
    },
    {
      id: 11,
      imdbID: "tt3228774",
      title: "Cruella",
      year: 2021,
      director: "Craig Gillespie",
      genre: "Comedy",
      rating: 7.4,
      budgetInMillions: 100,
    },
    {
      id: 12,
      imdbID: "tt9032400",
      title: "Eternals",
      year: 2021,
      director: "Chloé Zhao",
      genre: "Action",
      rating: 6.4,
      budgetInMillions: 200,
    },
    {
      id: 13,
      imdbID: "tt8332922",
      title: "A Quiet Place Part II",
      year: 2021,
      director: "John Krasinski",
      genre: "Horror",
      rating: 7.3,
      budgetInMillions: 61,
    },
    {
      id: 14,
      imdbID: "tt3480822",
      title: "Black Widow",
      year: 2021,
      director: "Cate Shortland",
      genre: "Action",
      rating: 6.7,
      budgetInMillions: 200,
    },
    {
      id: 15,
      imdbID: "tt0870154",
      title: "Jungle Cruise",
      year: 2021,
      director: "Jaume Collet-Serra",
      genre: "Adventure",
      rating: 6.6,
      budgetInMillions: 200,
    },
    {
      id: 16,
      imdbID: "tt4513678",
      title: "Ghostbusters: Afterlife",
      year: 2021,
      director: "Jason Reitman",
      genre: "Comedy",
      rating: 7.1,
      budgetInMillions: 75,
    },
    {
      id: 17,
      imdbID: "tt12801262",
      title: "Luca",
      year: 2021,
      director: "Enrico Casarosa",
      genre: "Animation",
      rating: 7.5,
      budgetInMillions: 50,
    },
    {
      id: 18,
      imdbID: "tt1321510",
      title: "In the Heights",
      year: 2021,
      director: "Jon M. Chu",
      genre: "Drama",
      rating: 7.3,
      budgetInMillions: 55,
    },
    {
      id: 19,
      imdbID: "tt11214590",
      title: "House of Gucci",
      year: 2021,
      director: "Ridley Scott",
      genre: "Drama",
      rating: 6.6,
      budgetInMillions: 75,
    },
  ];
  
  function App() {
    return <MoviePage />;
  }
  
  function MoviePage() {
    let [moviesList, setMoviesList] = React.useState(movies);
    return <MoviesList movies={moviesList} />;
  }
  
  function MoviesList({ movies }) {
    return (
      <div>
        {movies.map(
          (movies => (
            <div key={movies.id}>{movies.title}</div>
          ))
        )}
      </div>
    );
  }
  
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);