import NavBar from "../components/NavBar";
import { render,screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

test("should load header component with login button",()=>{
    
        render(
            <BrowserRouter>
                <NavBar/>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole('button',{name:'Login'});
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole('button',{name:'Logout'});
        // console.log(loginButton)
        expect(logoutButton).toBeInTheDocument();
    
})