import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/main-layout";
import Overview from "@/pages/overview";
import Analytics from "@/pages/analytics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: "analytics", element: <Analytics /> },
    ],
  },
])
