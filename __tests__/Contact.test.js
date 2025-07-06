import Contact from "../components/Contact";
import '@testing-library/jest-dom';
import { render,screen } from '@testing-library/react';


// describe("",()=>{}) can be used to group test cases
// it is also an alias to keyword "test"

test("Should load contact us component",()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

