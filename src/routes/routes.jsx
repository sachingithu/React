import { createBrowserRouter } from "react-router-dom";
import { FoodIndex } from "../food-delivery/food-index";
import { NotFoud } from "../food-delivery/not-found";
import { FoodMenu } from "../food-delivery/food-menu";
import { MenuDetails } from "../food-delivery/menu-details";
import { FoodHome } from "../food-delivery/food-home";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<FoodIndex/>,
        errorElement:<NotFoud/>
    },
    {
        path:"/home",
        element:<FoodHome/>
    },
    {
        path:'/menu',
        element:<FoodMenu/>,
        children:[
            {
                index:true,
                // path:'',
                element:<MenuDetails/>
            }
        ]
    },
    {
        path:"*",
        element:<NotFoud/>
    }
])