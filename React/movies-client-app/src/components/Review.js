import { useParams } from "react-router-dom";
import ApiService from "../services/ApiService";
import { useEffect, useState } from "react";

function Review() {
    let apiService = new ApiService();
    let { ids } = useParams();
    let [movie, setMovie] = useState({});
    let [reviews, setReviews] = useState([]);
    let [review1, setReview1] = useState([]);
    let img = "/images/" + movie.movieName + ".jpg";
    useEffect(() => {
        apiService.getMovieById(ids).then(
            (res) => {
                setMovie(res.data);
            },
            (err) => { console.log("Error: " + err) }
        );
    }, [])

    useEffect(() => {
        console.log(ids);
        apiService.getReviewById(ids).then(
            (res) => {
                console.log("Response is ready...");
                console.log(res.data);
                setReviews(res.data);
                console.log(reviews);
            },
            (err) => { console.log("Error: " + err) }
        );
    }, []);


    let reviewerNameHandler = (evt) => {
        setReview1((prevState) => { return { ...prevState, reviewerName: evt.target.value } })
    };


    let reviewHandler = (evt) => {
        setReview1((prevState) => { return { ...prevState, review: evt.target.value } });
    }

    let ratingHandler = (evt) => {
        setReview1((prevState) => { return { ...prevState, rating: evt.target.value } });
    }

    let submitHandler = (evt) => {
        // evt.preventDefault();
        apiService.addNewReview(review1, ids).then(
            (res) => {
                alert("Review Added")
            }
        );
    }

    return <div class="form-content col-md-6">
        <h1>Review</h1>
        <img src={img} alt="" width="150px" height="200px"></img>
        
        <div class="card" >

            <div class="card-body">
                <h5 class="card-title">{movie.movieName} </h5>
            </div>
            <table class="table table-striped  table-hover">
                <thead>
                    <tr>
                        <th>Reviewer Id</th>
                        <th>Reviewer Name</th>
                        <th>Review</th>
                        <th>Rating</th>
                    </tr>
                </thead>

                {reviews.map(r =>
                    <tbody>
                        <tr>
                            <td>{r.reviewId}</td>
                            <td>{r.reviewerName}</td>
                            <td>{r.review}</td>
                            <td>{r.rating}</td>
                        </tr>
                    </tbody>

                )}
            </table>
        </div>

        <br></br>
        <div class="form-content-add col-md-6">
            <h5>Add Review</h5>
            <br></br>
            <form onSubmit={submitHandler}>
                <label class="form-label">Enter Reviewer Name:</label>
                <input type="text" class="form-control" onChange={reviewerNameHandler} value={review1.reviewerName} placeholder="Enter reviewer name" required></input>
                <br></br>
                <label class="form-label">Enter review:</label>
                <input type="text" class="form-control" onChange={reviewHandler} value={review1.review} placeholder="Enter review" required></input>
                <br></br>
                <label class="form-label">Select rating:</label>
                <input type="number" class="form-control" step="0.5" min="0" max="5" placeholder="0:Bad 5:Excellent" onChange={ratingHandler} value={review1.rating} required></input>
                <br></br>
                <button type="submit" class="btn btn-primary mb-2" >Add Review</button>
            </form>
        </div>
    </div>
}
export default Review;