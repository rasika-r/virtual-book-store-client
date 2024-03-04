import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import  Login  from "../components/auth/login";
import SignUp from "../components/auth/signup";
import Home from "../Home";

export const router = createBrowserRouter([
  {
      path:'/',
      element:<App />,
      children:[
        {path:'', element:<Login/>},
        {path:'signup', element:<SignUp/>},
        {path: 'Home', element: <Home />}
      ]
  }
])
