import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addNewMovie, updateMovie } from "../redux/MovieAction";
import ApiService from "../services/ApiService";
function AddMovie(){
let [movie,setMovie]=useState ( {} );
let {id}=useParams();
let navigate=useNavigate();
const dispatch=useDispatch();

let [todo,setTodo]=useState("Add Movie");
let apiService=new ApiService();
useEffect( ()=>{
  if (id!=0){
    apiService.getMovieById(id).
    then((res)=>{
      setMovie(res.data);
      setTodo("Update Movie")
    }
    );
  }
},[] );
let movieIdHandler=(evt)=>{
movie.movieId=evt.target.value;
setMovie( (prevState)=>{ return { ...prevState, movieId:evt.target.value} } );

console.log(movie.movieId )
}
let movieNameHandler=(evt)=>{
 // movie.movieName=evt.target.value;
  //console.log(movie.movieName);
  //setMovie( (prevState)=>{ return { ...prevState, movie:movie.movieName}   } );
  setMovie( (prevState)=>{ return { ...prevState, movieName:evt.target.value} } );
}
  let movieGenreHandler=(evt)=>{
    movie.genre=evt.target.value;
    setMovie( (prevState)=>{ return { ...prevState, genre:evt.target.value} } );

 }
  let movieLanguageHandler=(evt)=>{
      movie.language=evt.target.value;
      setMovie( (prevState)=>{ return { ...prevState, language:evt.target.value} } );
   }
let [valid,setValid]=useState(true);
let [movieNameError,setMovieNameError]=useState();
let validation= ()=>{
  if(movie.movieName=="" || movie.movieName==undefined){
   valid=false;
      setMovieNameError("Please enter movie Name");
  }
}
   let submitHandler=(evt)=>{
    //to avoid refreshing the page while submiting
    evt.preventDefault();
    validation();
    if(valid){
      if(id==0)
      dispatch(addNewMovie(movie));  
      else
      dispatch(updateMovie(movie,id));
  }

   }
   return <div class="container">
  <form onSubmit={submitHandler}>
     <label class="form-label">Enter Movie Code</label>
     <input type="text" value={movie.movieId}  class="form-control" onChange={movieIdHandler} >

     </input>
     <label  class="form-label">Enter Movie Name</label>
     <input type="text" value={movie.movieName}   class="form-control" onChange={movieNameHandler}></input>
     <div class="error"> {movieNameError}</div>
         <label  class="form-label">Genre</label>
      <select value={movie.genre}  class="form-control" onChange={movieGenreHandler}>
         <option></option>
         <option>Comedy</option>
         <option>Drama</option>
         <option>Action</option>
         <option>Romance</option>
         <option>Thriller</option>
      </select>
           <label  class="form-label">Language</label>
         <select value={movie.language}  class="form-control" onChange={movieLanguageHandler}>
         <option></option>
         <option>English</option>
         <option>Tamil</option>
         <option>Hindi</option>
         <option>Kannada</option>
         <option>Telugu</option>
         <option>Malayalam</option>
      </select>
<button type="submit"class="btn btn-primary">{todo}</button>
  </form>
   </div>
}

export default AddMovie;