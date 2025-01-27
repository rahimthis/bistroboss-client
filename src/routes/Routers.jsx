import { createBrowserRouter } from "react-router";
import Home from "../pages/Homes/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { 
        path: "/Shop", element :<> This is shop page</>,
      },
      
      { 
        path: "/", element :<> This is shop page</>,
      },
      
      { 
        path: "/", element :<> This is shop page</>,
      },
      
      ],
  },
]);

export default router;
