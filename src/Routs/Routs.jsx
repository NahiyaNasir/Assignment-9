
import { createBrowserRouter } from "react-router-dom";
import Roots from "../Pages/Roots";
import Home from "../Pages/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
loader:()=>fetch('residential.json')
        }
      ]
    },
  ]);
  export default router