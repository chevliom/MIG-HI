"use client";
import { Outlet } from "react-router-dom";
import { SideNavbar, TopNavbar } from "./pages";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex w-full min-h-screen bg-[#E6EFF2] relative">
        <div className="sticky top-0 opacity-100 z-50 max-h-screen">
          <SideNavbar />
        </div>

        <div className="w-full flex flex-col flex-1">
          <TopNavbar />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
