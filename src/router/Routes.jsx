import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home/Home'
import Root from "../Root/Root";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import PageError from "../Pages/PageError/PageError";
import AppDetails from "../Pages/AppDetails/AppDetails";
import AppError from "../Pages/AppError/AppError";
import PageLoader from "../Components/LoadingPage/LoadingPage";
export const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    errorElement:<PageError></PageError>,
    children:[
        {
            index:true,
            loader: () => fetch("/apps.json")
            .then(res => res.json()),
            Component:Home
        },
        {
          path:"/apps",
          Component:Apps,           
          loader: () => fetch("/apps.json")
          .then(res => res.json()),
        },{
         path:"/installation",
           loader: () => fetch("/apps.json")
          .then(res => res.json()),
            Component:Installation
        },
        {
          path:'/apps/:id',
          errorElement:<AppError></AppError>,
           loader: () => fetch("/apps.json")
          .then(res => res.json()),
           Component:AppDetails
        },{
          path:"/loading",
          Component: PageLoader
        }
    ]

  }
])