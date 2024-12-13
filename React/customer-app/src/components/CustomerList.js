import { useEffect, useState } from "react";
import Customer from "./Customer";
import Filter from "./Filter";
function CustomerList() {
    //Assume these data we got from REST api

    // let customers = [
    //     { id: "103", name: "Shradha", gender: "female" },
    //     { id: "106", name: "Harry", gender: "male" },
    //     { id: "104", name: "Mansi", gender: "female" },
    //     { id: "105", name: "Siddharth", gender: "male" }
    // ];

    let [original, setOriginal] = useState([
        { id: "103", name: "Shradha", gender: "female" },
        { id: "106", name: "Harry", gender: "male" },
        { id: "104", name: "Mansi", gender: "female" },
        { id: "105", name: "Siddharth", gender: "male" },
        { id: "102", name: "Sania", gender: "female" },
        { id: "101", name: "Aaron", gender: "male" },
        { id: "107", name: "Tanmay", gender: "male" },
        { id: "108", name: "Banshita", gender: "female" },
        { id: "100", name: "Akshata", gender: "female" }

    ]);

    let [customers, setCustomers] = useState([]);
    useEffect(() => {
        setCustomers(original);
    }, [])

    let filterCustomer = (custName) => {
        console.log("filtering")
        let custs = original.filter(c => c.name.startsWith(custName))
        setCustomers(custs);
    }

    let deleteCustomer = (custId) => {
        console.log("deleting")
        let c = original.filter(cu=>cu.id!==custId)
        setCustomers(c);
    }

    return <div>
        <Filter searchEvent={(f) => filterCustomer(f)} />
        <h1>CustomerList component</h1>
        {
            // customers.map(c => <Customer cust={c} />)
            customers.map(c => <Customer cust={c} del={(c)=>deleteCustomer(c)}/>)
        }
    </div>
}
export default CustomerList;