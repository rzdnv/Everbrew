import type { RouteObject } from "react-router-dom";
import CreateOrder from "@/feature/CreateOrder";
import Login from "@/feature/Login";
import Home from "@/feature/Home";
import Orders from "@/feature/Orders";
import Welcome from "@/feature/welcome";
import ProtectedRoute from "./ProtectedRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders",
    element: (
      <ProtectedRoute>
        <Orders />
      </ProtectedRoute>
    ),
  },
  {
    path: "/create",
    element: (
      <ProtectedRoute>
        <CreateOrder />
      </ProtectedRoute>
    ),
  },
];

export default routes;
