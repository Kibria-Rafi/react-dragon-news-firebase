import { createBrowserRouter } from "react-router-dom";
import Root from "../Layoutes/Root";
import Home from "../pages/home/Home";
import Login from "../pages/home/Login/Login";
import Register from "../pages/home/Register/Register";
import News from "../pages/News/News";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About";

const router =createBrowserRouter([

    
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
              path:'/',
              element:<Home></Home>,
              loader: ()=> fetch('/news.json')
            },
            {
              path:'/news/:id',
              element:<PrivateRoutes><News></News></PrivateRoutes>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/about',
                element: <About></About>
            }
        ]
        
    }
])
export default router;