import './Customer.css'
function Customer(props) {
    //To access any param of props, u need to props.paramName
    let g = "images/" + props.cust.gender + ".jpg";
    let deleteCust = () => {
        console.log(props.cust.id)
        props.del(props.cust.id)
    }
    return <div class="container">

        <div class="customercard card col-md-4">
            <div class="card-name">
                <i class="remIcon bi bi-trash" onClick={deleteCust} align="right"></i>
                <h5>{props.cust.id}</h5>
            </div>
            <div class="card-gender">
                <img src={g} width="100px"></img>
            </div>
            <div class="card-id">
                <h6>ID : {props.cust.name}</h6>
            </div>
            <a href="#" class="btn btn-primary">Edit <i class="bi bi-pencil-square"></i></a>
        </div>
    </div>
}

export default Customer;