import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApiService from "../services/ApiService";
import { getAllMovies } from "../redux/MovieAction"
import { Link } from "react-router-dom";
function Movies() {
  let apiService = new ApiService();
  //let [movies,setMovies]=useState([]);
  const dispatch = useDispatch();

  //useSelector ==> consume the data from the store
  const movies = useSelector(state => state.movies);
  console.log("---------------------")
  console.log("---" + movies)
  console.log(movies)

  useEffect(() => {

    dispatch(getAllMovies());

  }, []);
  return <div class="container">
    <h1>Movies</h1>

    {movies.map(m => <div class="myMovieCard card">
      <div class="card-header">
        {m.movieId}
      </div>
      <div class="card-body">
        <h5 class="card-title">  {m.movieName}</h5>
        <p class="card-text">  {m.genre}</p>
        <Link to={"/addMovie/" + m.movieId}>Edit</Link>
      </div>
    </div>)

    }

  </div>
}

export default Movies;