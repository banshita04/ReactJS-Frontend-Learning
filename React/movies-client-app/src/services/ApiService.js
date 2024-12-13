import axios from "axios";
const movieURL="http://localhost:9999/movies";
const reviewURL="http://localhost:9999/review";

class ApiService{ 
   getConfig() {
      let config={
         headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
         }
      }
      return config;
   }
   authenticate(login){
      return axios.post("http://localhost:9999/login",login)
   }
    getAllMovies(){
         //Promise object .....
        return axios.get(movieURL,this.getConfig());
    }

    getAllReviews(){
        return axios.get(reviewURL+"/allreviews",this.getConfig());
    }

    getReviewById(ids){
        return axios.get(reviewURL+"/searchbymovieid/"+ids,this.getConfig())
    }
    
    addNewMovies(movie){
        return axios.post(movieURL,movie,this.getConfig());
    }
    

    getMovieById(id){
        console.log(typeof id)
        console.log(id);
        return axios.get(movieURL+"/"+id,this.getConfig());
     }

     deleteMovie(id){
        console.log(id);
        return axios.delete(movieURL+"/removemovie/"+id,this.getConfig());
     }

     addNewReview(review,id){
         return axios.post(reviewURL+"/addreview/"+id,review,this.getConfig())
     }
}
export default ApiService;