import { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";


const VITE_API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
}

export interface MovieProp{
  id:string
  title: string;
  vote_average: number
  poster_path: string
  release_date: string
  original_language:string
}

const App = () => {

  

  const [searchTerm, setSearchTerm] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [movies, setMovies] = useState<MovieProp[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")

  useDebounce(()=>setDebouncedSearchTerm(searchTerm),500,[searchTerm])

  const fetchMovies = async (query ='') => {
    setIsLoading(true);
    setErrorMessage('')
    try {
      const endpoint = query
        ? `${VITE_API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${VITE_API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS)
      
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (!Array.isArray(data.results)) {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovies([]);
        return
      }

      setMovies(data.results || [])
      
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later")
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      },2000)
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2 className="mt-[40px] ">All Movies</h2>
          {isLoading ? (
            <Spinner/>
          ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
                <ul>
                  {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </ul>
          )}
        </section>

      </div>
    </main>
  );
}

export default App;
