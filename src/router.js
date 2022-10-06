import { createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
