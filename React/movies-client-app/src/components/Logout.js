import { useNavigate } from "react-router-dom";

function Logout(){
    let navigate = useNavigate();
    let logout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("user");
        localStorage.setItem("loggedIn","false");
        alert("Logged out");
        navigate("../");
    }
return <div>
    {
        <button type="submit" class="btn btn-primary" onClick={logout}>Logout</button>
    }
</div>
}
export default Logout;