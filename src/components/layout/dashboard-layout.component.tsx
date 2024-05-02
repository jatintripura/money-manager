import { Outlet } from "react-router-dom";

import { DashboardNavbar } from "./navbar.component";
import { DashboardSidebar } from "./sidebar.component";

export const DashboardLayout = () => {
  return (
    <div className="container mx-auto max-w-[1200px] font-primary">
      <div className="grid min-h-screen grid-cols-[200px_auto] ">
        <DashboardSidebar />
        <div>
          <DashboardNavbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
