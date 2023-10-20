import { createBrowserRouter } from "react-router-dom";
import Root from "../Layoutes/Root";
import Home from "../pages/home/Home";
import Login from "../pages/home/Login/Login";
import Register from "../pages/home/Register/Register";

const router =createBrowserRouter([

    
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
              path:'/',
              element:<Home></Home> 
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
        
    }
])
export default router;