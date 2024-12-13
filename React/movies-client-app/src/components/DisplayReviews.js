import { useEffect, useState } from "react";
import ApiService from "../services/ApiService";

function DisplayReviews() {
    let apiService = new ApiService();
    let [movie, setMovie] = useState([]);
    useEffect(() => {
        apiService.getAllMovies().then(
            (res) => {
                console.log(movie)
                setMovie(res.data);
            },
            (err) => { console.log("Error: " + err) }
        )
    }, []);
    let [reviews, setReviews] = useState([]);
    useEffect(() => {
        apiService.getAllReviews().then(
            (res) => {
                setReviews(res.data);
            },
            (err) => {
                console.log("Error: " + err)
            }
        )
    },[])

    return <div>
        <h3>Reviews</h3>
        {movie.map(r =>
            <img src={"images/" + movie.movieName + ".jpg"} width="200px" align="left" alt=""></img>
        )}
    </div>
}
export default DisplayReviews;