import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import  Login  from "../components/auth/login";
import SignUp from "../components/auth/signup";
import Home from "../Home";
import BookDetails from "../components/BookDetails";

import CreateBook from "../components/admin/CreateBook";
import UpdateBook from "../components/admin/UpdateBook";
import Main from "../components/admin/main";
import PdfViewer from "../components/PdfViewer";

export const router = createBrowserRouter([
  {
      path:'/',
      element:<App />,
      children:[
        {path:'', element:<Login/>},
        {path:'signup', element:<SignUp/>},
        {path: 'Home', element: <Home />},
        {path: 'bookdetails/', element: <BookDetails/>},
        {path: 'bookdetails/:id', element: <BookDetails/>},
        {path:'CreateBooks', element:<CreateBook/>},
        {path:'UpdateBooks', element:<UpdateBook/>},
        {path: 'admin', element: <Main/>},
        {path: 'rentedbooks/pdfview', element: <PdfViewer/>}
      ]
  }
])
