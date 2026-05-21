import App from "../App";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Home from "../pages/Home";
import Job from "../pages/Job";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Saved from "../pages/Saved";
import About from "../pages/About";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export default function Router(){

  const {authReady,user}=useContext(AuthContext);

  const isAuthenticated=!!user

  const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '',
        element: isAuthenticated ? <Home/> : <Navigate to='/login'/>
      },
      {
        path: '/job',
        element: isAuthenticated ? <Job/> : <Navigate to='/login'/>
      },
      {
        path: '/register',
        element: !isAuthenticated ? <Register/> : <Navigate to='/'/>
      },
      {
        path: '/login',
        element: !isAuthenticated ? <Login/> : <Navigate to='/'/>
      },
      {
        path: '/saved',
        element: isAuthenticated ? <Saved/> : <Navigate to='/login'/>
      },
      {
        path: '/about',
        element: isAuthenticated ? <About/> : <Navigate to='/login'/>
      }
    ]
  },
]);

return (
  authReady && <RouterProvider router={router} />
)

}


 