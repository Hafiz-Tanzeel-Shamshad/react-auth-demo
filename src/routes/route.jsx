import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from "../pages/authentication/Signin";
import SignUp from "../pages/authentication/Signup";



const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <Signin />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router