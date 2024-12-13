import { READ_ALL_MOVIES,ADD_MOVIE,UPDATE_MOVIE } from "./MovieAction";
const movies=[];
const initialState={movies:movies};
//const state=initialState;
export const MovieReducer=  (state=initialState,action)=>{
    switch(action.type){
        case READ_ALL_MOVIES:
            console.log("In reducer")
        return {...state.movies,movies:action.payload};

        case ADD_MOVIE:
            console.log("In reducer add movie")
            console.log(action.payload)
         return {...state.movies,movies:action.payload};


        case UPDATE_MOVIE:
            return {...state.movies,movies:action.payload}

        default:
            return state;
    }



} 