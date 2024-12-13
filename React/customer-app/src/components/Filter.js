function Filter(props){

    let searchCust=(evt)=>{
        console.log(evt.target.value);
        props.searchEvent(evt.target.value);
      }

    return <div class="card-search">
        Search Customer <input type="text" onKeyUp={searchCust}></input>
        <i class="bi bi-search"></i>
    </div> 
}
export default Filter;