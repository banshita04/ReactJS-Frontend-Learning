import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddMovie from "./AddMovie";
import Movies from "./Movies";
import Reviews from "./Reviews";
import Login from "./Login";
import Logout from "./Logout";

function Menu(props) {

  return <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">

          <ul class="navbar-nav">
            {
              localStorage.getItem("loggedIn") == "true" && <>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
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
            {/* <li class="nav-item">
              <Link class="nav-link" to="login">Login</Link>
            </li> */}
            {
              localStorage.getItem("loggedIn") == "true" && <>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {localStorage.getItem("user")}
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">
                      <Link class="nav-link" to="logout">Logout</Link>
                    </a></li>
                  </ul>
                </li>
              </>
            }

          </ul>

        </div>
      </div>
    </nav>
    {/* We are not using browser router here because it prevents the Link tag from working properly.
Link doesnt understand browser routing, anchor tag understands browser routing.
Now we are using it in the App.js */}
    <Routes>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/addMovie/:id" element={<AddMovie />}></Route>
      <Route path="/reviews" element={<Reviews />}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
    </Routes>


  </div>
}

export default Menu;