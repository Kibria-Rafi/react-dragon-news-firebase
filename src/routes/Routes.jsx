import { createBrowserRouter } from "react-router-dom";
import Root from "../Layoutes/Root";

const routes =createBrowserRouter([

    
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
              path:'/',
              element:  
            }
        ]
        
    }
])