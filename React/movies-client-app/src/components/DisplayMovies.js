import ApiService from "../services/ApiService";

function DisplayMovies(props) {
  let apiService = new  ApiService();
  let image = "images/" + props.movie.movieName + ".jpg";
  //console.log(image);
  
  let delMovie = (mid) => {
    apiService.deleteMovie(mid).then((res) => alert("Deleted movie"))
  }
  return <div class="container col-sm-8">
    <div class="card">
      <i class="remIcon bi bi-trash" onClick={() => { delMovie(props.movie.movieId) }} align="right" ></i>
      <div class="card-body">
        <img src={image} width="200px" align="left" alt=""></img>
        <br></br>
        <div align="right">
        <h5 class="card-title">Movie Name: {props.movie.movieName}</h5>
        <p class="card-text">Movie Id: {props.movie.movieId}</p>
        <p class="card-text">Movie genre: {props.movie.genre}</p>
        <p class="card-text">Movie language: {props.movie.language}</p>
        <p class="card-text">Release Date: {props.movie.releaseDate}</p>
        <br></br>
        <a href={"/addMovie/" + props.movie.movieId}><i class="bi bi-pencil-square"></i></a>
        <br></br>
        <br></br>
        <a href={"/reviews/" + props.movie.movieId} class="btn btn-primary">Review</a>
        </div>
      </div>
    </div>
  </div>
}
export default DisplayMovies;