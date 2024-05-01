import { createBrowserRouter } from "react-router-dom";

import { AccountsPage, HistoryPage, HomePage, NotFoundPage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "/accounts",
    element: <AccountsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
