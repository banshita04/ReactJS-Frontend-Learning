import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";


function Login() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [login, setLogin] = useState({});
    let navigate = useNavigate();
    let userNameHandler = (evt) => {
        login.username = evt.target.value;
    }
    let passwordHandler = (evt) => {
        login.password = evt.target.value;
    }
    let [valid, setValid] = useState(true);
    let [usernameError, setUsernameError] = useState("");
    let [passwordError, setPasswordError] = useState("");
    let validation = () => {
        if (login.username === "" || login.username === undefined) {
            console.log("Validation failed !!!!")
            valid = false;
            setUsernameError("Please enter username");
        }
        if (login.password === "" || login.password === undefined) {
            valid = false;
            setPasswordError("Please enter password");
        }
    }
    let signIn = (evt) => {
        evt.preventDefault();
        validation();
        if (valid === true) {
            new ApiService().authenticate(login).then(
                (res) => {
                    // console.log(res.data);
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("role", res.data.role);
                    localStorage.setItem("user", login.username);
                    localStorage.setItem("loggedIn", "true");
                    navigate("../movies");
                },
                (err) => {
                    handleShow();
                    // alert("Invalid credentials " + err.response.status)
                }
            );
        }
    }
    return <div class="container col-md-6">

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Invalid Credentials</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please check username and password</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Ok
                </Button>
                {/* <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button> */}
            </Modal.Footer>
        </Modal>

        <form onSubmit={signIn}>
            <label class="form-label">
                Enter user name
            </label>
            <input class="form-control" type="text" onChange={userNameHandler} placeholder="Enter username">

            </input>
            <div data-testid="usrnameError">{usernameError}</div>
            <label class="form-label">
                Enter Password
            </label>
            <input class="form-control" type="password" onChange={passwordHandler} placeholder="Enter password"></input>
            <div data-testid="usrnameError">{passwordError}</div>

            <br></br>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>


}
export default Login;
