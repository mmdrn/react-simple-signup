import { createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
