import Steps from "./Steps";
function Ingredient(props) {
    let g = "images/" + props.ing.name + ".jpg";
    return (
        <div class="container" align="center">
            <div class="card ">
                <div class="card-body">
                    <img src={g} width="200px" align="center"></img>
                    <p class="card-text">
                        <table border="3" class="cardtable" align="left">

                            <th class="cardborder">Name</th>
                            <th class="cardborder">Ingredients</th>
                            <th class="cardborder">Amount</th>
                            <th class="cardborder">Measurement</th>
                            <br></br>


                            <tr align="center">
                                <td class="cardborder">{props.ing.name}</td>
                                <td class="cardborder">{props.ing.ingredients.map(c => <tr>{c.name}</tr>)}</td>
                                <td class="cardborder">{props.ing.ingredients.map(c => <tr>{c.amount}</tr>)}</td>
                                <td class="cardborder">{props.ing.ingredients.map(c => <tr>{c.measurement}</tr>)}</td>



                            </tr>

                        </table>
                        <div class="card">
                            <div class="card-header">
                                <h6><b>Steps</b></h6>
                            </div>
                            <ul class="list-group list-group-flush">
                                {
                                    props.ing.steps.map(j => <Steps s={j} />)
                                }
                            </ul>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Ingredient;