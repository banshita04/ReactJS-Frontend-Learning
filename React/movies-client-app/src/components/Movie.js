import { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import DisplayMovies from "./DisplayMovies";

function Movie() {
    let apiService = new ApiService();
    let [movies,setMovies] = useState([]);
    useEffect(() => {
        apiService.getAllMovies().then(
            (res) => {
                console.log("Response is ready ...");
                console.log(res.data);
                setMovies(res.data);
            },
            (err)=>{console.log("Error: "+err)}
        );
    },[]);
    
    return <div>
        <h1>Movies</h1>
        {
            movies.map(m =><DisplayMovies movie={m}/>)
        }
    </div>

    }
export default Movie;