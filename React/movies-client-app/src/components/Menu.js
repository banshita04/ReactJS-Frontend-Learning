import { Link, Route, Routes } from "react-router-dom";
import Movie from "./Movie";
import AddMovie from "./AddMovie";
import Review from "./Review";
import Login from "./Login";
import Logout from "./Logout";
import DisplayReviews from "./DisplayReviews";

function Menu() {
    return <div>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-primary"> */}
        <nav class="navbar navbar-expand-lg">

            <div class="container-fluid">
                <Link class="navbar-brand" href="#">MovieCentral</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        {
                            localStorage.getItem("loggedIn") === "true" && <>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" href="#">Home</Link>
                                </li>
                                <li class="nav-item">
                                    {/* Link tag is inbuilt component of react
          it does not refresh the page and helps in successful switching of tabs
          anchor tag refreshes the page and therefore we get error while switching tabs */}

                                    <Link class="nav-link" to="movies">Movies</Link>
                                </li>
                                <li class="nav-item">
                                    {
                                        // <a class="nav-link" href="addMovie/0">Add Movie</a>
                                    }
                                    <Link class="nav-link" to="addMovie/0">Add Movie</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="reviews">Reviews</Link>
                                </li>
                            </>
                        }
                        {
                            localStorage.getItem("loggedIn") === "true" && <>
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {localStorage.getItem("user").toUpperCase()}
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li><Link class="dropdown-item" href="#">
                                            <Link class="nav-link" to="logout">Logout</Link>
                                        </Link></li>
                                    </ul>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>


        <Routes>
            <Route path="/movies" element={<Movie />}></Route>
            <Route path="/addMovie/:id" element={<AddMovie />}></Route>
            <Route path="/reviews/:ids" element={<Review />}></Route>
            <Route path="/reviews" element={<DisplayReviews />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
        </Routes>

    </div>
}

export default Menu;