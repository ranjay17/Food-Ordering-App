import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./Body";
import Error from "./components/Error";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import{createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
//import Grocery from "./components/Grocery";


const Grocery = lazy(()=>import("./components/Grocery"))
const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet />
            
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
        {
        path: "/about",
        element: <About />
    },
    {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
    },
    {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
    }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)