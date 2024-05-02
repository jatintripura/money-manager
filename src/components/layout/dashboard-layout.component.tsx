import { DashboardNavbar } from "./navbar.component";
import { DashboardSidebar } from "./sidebar.component";

export const DashboardLayout = () => {
  return (
    <div>
      <DashboardNavbar />
      <DashboardSidebar />
    </div>
  );
};
