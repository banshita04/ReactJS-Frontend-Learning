import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";

function Login(){
    let [login,setLogin]=useState({});
    let navigate= useNavigate();
    let userNameHandler=(evt)=>{
        login.username=evt.target.value;
    }
   let  passwordHandler=(evt)=>{
        login.password=evt.target.value;
    }
   let signIn=(evt)=>{
    evt.preventDefault();
        new ApiService().authenticate(login).then(
            (res)=>{
                console.log(res.data);
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("role",res.data.role);
                localStorage.setItem("user",login.username);
                localStorage.setItem("loggedIn", "true");
                navigate("../movies");
            }
        );
    }
    return <div class="container">
    <form onSubmit={signIn}>
        <label  class="form-label">
    Enter user name
    </label>
     <input  class="form-control" type="text" onChange={userNameHandler}>

    </input>
    <label class="form-label">
    Enter Password 
    </label>
    <input class="form-control" type="password" onChange={passwordHandler}></input>
    <button type="submit"class="btn btn-primary">Login</button>
    </form>
</div>
       
    
}
export default Login;
