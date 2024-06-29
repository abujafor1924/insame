
import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../app/main/Main";
import Error from "../app/error/Error";


 export const router = createBrowserRouter([
     {
       path: "/",
       element:<Main /> ,
       errorElement:<Error />
     },
   ]);