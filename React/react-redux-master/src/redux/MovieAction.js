import ApiService from '../services/ApiService';

export const READ_ALL_MOVIES="READ_ALL_MOVIES";
export const ADD_MOVIE ="ADD_MOVIE";
export const UPDATE_MOVIE ="UPDATE_MOVIE";

let apiService= new ApiService();

export const getAllMovies =()=>{
    console.log("*****in action*****");
    return async function (dispatch){
        apiService.getAllMovies().then((res)=>{
        console.log(res.data);
        dispatch({type:READ_ALL_MOVIES,payload:res.data});
    })
}
}

export const addNewMovie =(movie)=>{
    console.log("****new action****");
    return async function (dispatch){
        apiService.addNewMovie(movie).then((res)=>{
        console.log(res.data);
        dispatch({type:ADD_MOVIE,payload:movie});
    })
}
}

export const updateMovie =(movie,id)=>{
    console.log("****new action****");
    return async function (dispatch){
        apiService.updateMovie(movie,id).then((res)=>{
        console.log(res.data);
        dispatch({type:UPDATE_MOVIE,payload:movie});
    })
}
}