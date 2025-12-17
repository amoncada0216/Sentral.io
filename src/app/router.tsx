import { createBrowserRouter } from "react-router-dom";
// import AdminDashboard from "@/pages/AdminDashboard"
import MainLayout from "@/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [

    ]
  },
]);
