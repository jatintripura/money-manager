import { History, LayoutDashboard, Wallet } from "lucide-react";

import { Logo } from "../logo.component";
import { Navlink } from "./navlink.component";

export const DashboardSidebar = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto">
        <Logo />
      </div>
      <div className="flex justify-center  items-center">
        <ul className="flex flex-col gap-y-4 mx-auto">
          <Navlink icon={<LayoutDashboard />} title={"Dashboard"} link={"/"} />
          <Navlink icon={<History />} title={"History"} link={"/history"} />
          <Navlink icon={<Wallet />} title={"Accounts"} link={"/accounts"} />
        </ul>
      </div>
    </div>
  );
};
