import { FC, ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";

type NavlinkProps = {
  title: string;
  link: string;
  icon: ReactElement;
};

export const Navlink: FC<NavlinkProps> = ({ title, link, icon }) => {
  const location = useLocation();

  return (
    <li className="">
      <Link
        to={link}
        className={cn(
          "flex duration-200 px-4 py-2 rounded-md gap-1.5 items-center hover:bg-primary-100 hover:text-white",
          link === location.pathname && " bg-primary-100 text-white",
        )}
      >
        {icon}
        <span className="text-lg">{title}</span>
      </Link>
    </li>
  );
};
