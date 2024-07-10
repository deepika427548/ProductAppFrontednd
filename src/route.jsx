import { createBrowserRouter, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Myloginpage from "./pages/Myloginpage";
import Formpage from "./pages/Formpage";
import { userAuthStore } from "./store/authstore";

const PrivateRoute = ({ children }) => {
  const { isAuth } = userAuthStore();
  return isAuth ? children : <Navigate to="/login" />;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Homepage />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Myloginpage />,
  },
  {
    path: "/signup",
    element: (
      <PrivateRoute>
        <Myloginpage />
      </PrivateRoute>
    ),
  },
  {
    path: "/addproduct",
    element: (
      <PrivateRoute>
        <Formpage />
      </PrivateRoute>
    ),
  },
  {
    path: "/editproduct/:id",
    element: (
      <PrivateRoute>
        <Formpage />
      </PrivateRoute>
    ),
  },
]);
export default router;
