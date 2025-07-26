import React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import App from "./components/App";
import About from './components/About';
import Contact from './components/Contact';
// import Cart from './components/Cart';
import Error from './components/Error'
import RestrauntMenu from './components/RestrauntMenu';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Restraunts from './components/Restraunts';
const Cart = lazy(() => {
    console.log("cart bundle requested");
    return import('./components/Cart')
});

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element: <Restraunts  />,
                errorElement: <Error/>
            },
            {
                path: "/about",
                element: <About/>,
                errorElement: <Error/>
            },
            {
                path:"/contact",
                element: <Contact/>,
                errorElement: <Error/>
            },
            {
                path: "/cart",
                element: <Suspense fallback={<h1> your cart is loading...</h1>}> <Cart/></Suspense>,
                errorElement: <Error/>
            },
            {
                path:"/restraunts/:id",
                element: <RestrauntMenu/>,
                errorElement: <Error/>
            }
        ]
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
