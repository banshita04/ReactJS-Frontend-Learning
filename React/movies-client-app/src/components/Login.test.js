import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

test("test login ",()=>{
    // render(<App />);
    render(   <BrowserRouter><Login/> </BrowserRouter>)
     const btnElement = screen.getByText("Login");
     expect(btnElement).toBeInTheDocument();     
   })

   test("test login2",()=>{
    render(   <BrowserRouter><Login/> </BrowserRouter>)
    const usrNameInput=screen.getByPlaceholderText("Enter username");
    expect(usrNameInput).toBeInTheDocument();
   })
   
   test("test validation",()=>{
    render(   <BrowserRouter><Login/> </BrowserRouter>)
    const usrNameInput=screen.getByPlaceholderText("Enter username");
    const btnElement = screen.getByText("Login");
   // console.log(screen.getByTestId("usrnameError").innerHTML)
    fireEvent.click(btnElement);
    expect(usrNameInput).toHaveTextContent("");
   // expect(spanElement).t
   expect(screen.getByText("Please enter username")).toBeInTheDocument()
   // console.log(screen.getByTestId("usrnameError").innerHTML)
   })
 