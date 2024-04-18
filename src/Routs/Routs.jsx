import { createBrowserRouter } from "react-router-dom";
import Roots from "../Pages/Roots";
import Home from "../Pages/Home";
import EstateDetails from "../Pages/EstateDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserProfile from "../Pages/UserProfile";
import Review from "../Pages/Review";
import ErrorPage from "../Pages/ErrorPage";
import ProtectedRoute from "../Pages/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/residential.json"),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <UserProfile></UserProfile>
          </ProtectedRoute>
        ),
      },
     
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "residential/:id",
        loader: () => fetch("/residential.json"),
        element: (
              <ProtectedRoute> <EstateDetails></EstateDetails>
              </ProtectedRoute>
           
        ),
      },
      {
        path: "/review",
        element: (
          <ProtectedRoute>
            <Review></Review>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
export default router;
