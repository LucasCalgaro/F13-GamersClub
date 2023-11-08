import { createBrowserRouter, Navigate } from "react-router-dom";
// Protected Route
//import ProtectedRoute   from './auth/ProtectedRoute';
// Layouts
import MainMenu         from "./layouts/MainMenu";
//import GuestLayout      from "./layouts/GuestLayout";
// Cummons Views
//import Login            from "./views/Login";
//import Signup           from "./views/Signup";
//import ForgotPassword   from "./views/ForgotPassword";
//import ResetPassword    from "./views/ResetPassword";
import UserProfile      from "./views/UserProfile";
import NotFound         from './views/NotFound';
import AccessDenied     from "./views/AccessDenied"; // Importe o componente

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
    children: [
      {
        path: '/',
        element: <NotFound />
      },
      /*{
        path: "/",
        element: (
          <ProtectedRoute access={["user"]}>
            <Analyzes />
          </ProtectedRoute>
        ),
      },*/
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/access-denied",
        element: <AccessDenied />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  /* Router when has Auth-User System */
  /*
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password/:token",
        element: <ResetPassword />,
      },
      
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },*/
]);

export default router;
