import {useState,useEffect} from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL =`http://www.omdbapi.com?apikey=94b001be`;

const App = () => {

 const [movies, setMovies] = useState([]);
 const [searchTerm,setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const respose= await fetch(`${API_URL}&s=${title}`);
        const data= await respose.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    },[]);

    return (
        <div className="app">
            <h1>Torr-Movie</h1>

            <div className="search">
                <input
                  value={searchTerm}
                  placeholder="Search for Movies"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                  src={searchIcon}
                  alt="search"
                  onClick={()=> searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container" > 
                       {/* <MovieCard movie1 = {movies[0]} /> */}
                       {movies.map((movie) => (
                          <MovieCard movie={movie}/>
                       ))}
                </div>
            ) : (
                <div className="empty"> 
                   <h2>No movies found</h2>
                </div>
            )
            }
        </div>
    );

}

export default App;