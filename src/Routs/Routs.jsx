
import { createBrowserRouter } from "react-router-dom";
import Roots from "../Pages/Roots";
import Home from "../Pages/Home";
import EstateDetails from "../Pages/EstateDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserProfile from "../Pages/UserProfile";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
loader:()=>fetch('/residential.json')
        },        
        {
          path:"/profile",
          element:<UserProfile></UserProfile>
        },
        {
          path:"residential/:id",
          loader:()=>fetch('/residential.json'),
          element:<EstateDetails></EstateDetails>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);
  export default router