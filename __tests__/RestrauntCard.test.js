import RestrauntCard from "../components/RestrauntCard";
import { render,screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

// restrauntDetails={}
test("should load header component with login button",()=>{
    
        render(
            <BrowserRouter>
                <RestrauntCard/>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole('button',{name:'Login'});
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole('button',{name:'Logout'});
        // console.log(loginButton)
        expect(logoutButton).toBeInTheDocument();
    
})