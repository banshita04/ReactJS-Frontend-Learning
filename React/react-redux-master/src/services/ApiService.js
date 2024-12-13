import axios from "axios";
const baseURL = "http://localhost:9999/movies";
let config={
   headers:{
      Authorization:"Bearer "+localStorage.getItem("token")
   }
}
class ApiService{  
   authenticate(login){
      return axios.post("http://localhost:9999/login",login)
   }
    getAllMovies(){
       
        return axios.get(baseURL,config)
    }
  


   getMovieById(id) {
      console.log(typeof id)
      console.log(id);
      return axios.get(baseURL + "/" + id);
   }
   updateMovie(movie, id) {
      console.log("id : " + id)
      console.log(typeof id)
      console.log(`${baseURL / id}`);
      return axios.put(baseURL + "/" + id, movie)
   }
   addNewMovie(movie) {
      return axios.post(baseURL, movie);
   }
   
}
export default ApiService;