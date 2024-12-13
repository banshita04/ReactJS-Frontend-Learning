import { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import { useNavigate, useParams } from "react-router-dom";

function AddMovie() {
    let apiService = new ApiService();

    let [movie, setMovie] = useState({});
    //useParams() -> It is a type of hook, used to read the params from the URL.
    let { id } = useParams();

    let navigate = useNavigate();

    let [button, setButton] = useState("Add Movie");
    useEffect(() => {
        if (id != 0) {
            apiService.getMovieById(id).
                then((res) => {
                    setMovie(res.data);
                    setButton("Update Movie")
                }
                );
        }
    }, []);


    let movieIdHandler = (evt) => {
        // movie.movieId = evt.target.value;
        // console.log(movie.movieId)

        setMovie((prevState) => { return { ...prevState, movieId: evt.target.value } });


    }

    let movieNameHandler = (evt) => {

        // movie.movieName = evt.target.value;
        // setMovie((prevState) => {return { ...prevState, movie:evt.target.value }});

        // OR

        setMovie((prevState) => { return { ...prevState, movieName: evt.target.value } });
    }

    let movieGenreHandler = (evt) => {
        // movie.genre = evt.target.value;
        setMovie((prevState) => { return { ...prevState, genre: evt.target.value } });

    }

    let movieLanguageHandler = (evt) => {
        // movie.language = evt.target.value;
        setMovie((prevState) => { return { ...prevState, language: evt.target.value } });

    }

    let releaseDateHandler=(evt)=>{
        setMovie((prevState)=>{return {...prevState,releaseDate:evt.target.value}});
    }


    let submitHandler = (evt) => {
        console.log("in subhand")
        //In default, submit button will refresh the page
        //To avoid refreshing the page while submitting
        evt.preventDefault();
        validation();
        if (valid) {
            apiService.addNewMovies(movie).then(
                (res) => {
                    alert("Added...")
                    navigate("/movies")
                }
            );
        }
    }

    let [valid, setValid] = useState(true);
    let [movieNameError, setMovieNameError] = useState();

    let validation = () => {
        if (movie.movieName === "" || movie.movieName === undefined) {
            valid = false;
            setMovieNameError("Please enter movie Name");
        }
        else if(movie.movieId === "" || movie.movieId === undefined) {
            valid = false;
            setMovieNameError("Please enter movie ID");
        }
        else if(movie.genre === "" || movie.genre === undefined) {
            valid = false;
            setMovieNameError("Please enter movie genre");
        }
        else if(movie.language === "" || movie.language === undefined) {
            valid = false;
            setMovieNameError("Please enter movie language");
        }
        else if(movie.releaseDate === "" || movie.releaseDate === undefined){
            valid = false;
            setMovieNameError("Please select release date");
        }
    }

    return <div class="container col-md-6">
        <h1>Add Movie</h1>
        <br></br>
        <form onSubmit={submitHandler}>
            <label class="form-label">Enter Movie ID:</label>
            <input type="text" class="form-control" onChange={movieIdHandler} value={movie.movieId} placeholder="Enter movie ID"></input>
            <br></br>
            <label class="form-label">Enter Movie Name:</label>
            <input type="text" class="form-control" onChange={movieNameHandler} value={movie.movieName} placeholder="Enter movie name"></input>
            <div class="error"> {movieNameError}</div>
            <br></br>
            <label class="form-label">Enter Genre:</label>
            <select class="form-control" onChange={movieGenreHandler} value={movie.genre} >
                <option></option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Action</option>
                <option>Romance</option>
                <option>Thriller</option>
                <option>Horror</option>
                <option>Sci-Fi</option>
            </select>
            <br></br>
            <label class="form-label">Enter Language:</label>
            <select class="form-control" onChange={movieLanguageHandler} value={movie.language}>
                <option></option>
                <option>English</option>
                <option>Hindi</option>
                <option>Bengali</option>
                <option>Kannada</option>
                <option>Tamil</option>
                <option>Telugu</option>
                <option>Tamil</option>
                <option>Malayalam</option>
                <option>Japanese</option>
            </select>
            <br></br>
            <label class="form-label">Enter Release Date:</label>
            <input type="date" class="form-control" onChange={releaseDateHandler} value={movie.releaseDate}></input>
            <div class="error"> {movieNameError}</div>
            <br></br>
            <button type="submit" class="btn btn-primary mb-2" >{button}</button>
        </form>
    </div>
}
export default AddMovie;