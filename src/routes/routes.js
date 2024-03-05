import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import  Login  from "../components/auth/login";
import SignUp from "../components/auth/signup";
import CreateBook from "../components/admin/CreateBook";
import UpdateBook from "../components/admin/UpdateBook";
import Main from "../components/admin/main";

export const router = createBrowserRouter([
  {
      path:'/',
      element:<App />,
      children:[
        {path:'', element:<Login/>},
        {path:'signup', element:<SignUp/>},
        {path:'CreateBooks', element:<CreateBook/>},
        {path:'UpdateBooks', element:<UpdateBook/>},
        {path: 'admin', element: <Main/>}
      ]
  }
])
