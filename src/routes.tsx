import { createBrowserRouter } from "react-router-dom";

import { AccountsPage, HistoryPage, HomePage, NotFoundPage } from "@/pages";

import { DashboardLayout } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "accounts",
        element: <AccountsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
