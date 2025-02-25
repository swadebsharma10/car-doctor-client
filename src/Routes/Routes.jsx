import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>    
      },
      {
        path: '/booking',
        element: <PrivetRoute><Bookings/> </PrivetRoute>
      },
      {
        path: '/login',
        element: <Login/>    
      },
      {
        path: '/signUp',
        element: <SignUp/>    
      },
      {
        path: '/checkout/:id',
        element: <CheckOut/>,
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)  
      },
    ]
  },
]);

export default router;
