import { Link, Outlet, useLocation } from "react-router-dom";
import "@/components/Employees/pages/employeeCustomScroller.css";
import { useState } from "react";

const InsuranceContract = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  const handleTabClick = (path: string) => {
    setActiveTab(path);
  };

  return (
    <>
      <div className="my-3 mx-6">
        {/* tab on top */}
        <div className="w-full flex items-center gap-2">
          {/* Insurer */}
          <Link
            to={"/insurance-contract/registration-contracts"}
            onClick={() =>
              handleTabClick("/insurance-contract/registration-contracts")
            }
            className={`${
              activeTab === "/insurance-contract/registration-contracts"
                ? "bg-[#FFFFFF]"
                : "bg-[#F9F9F9]"
            } hover:bg-[#FFFFFF] rounded-t-2xl p-3`}
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Даатгуулагч
              {/* Insurer */}
            </h4>
          </Link>

          {/* Company */}
          <Link
            to={"/insurance-contract/list-contracts"}
            onClick={() => handleTabClick("/insurance-contract/list-contracts")}
            className={`${
              activeTab === "/insurance-contract/list-contracts"
                ? "bg-[#FFFFFF]"
                : "bg-[#F9F9F9]"
            } hover:bg-[#FFFFFF] rounded-t-2xl p-3`}
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Компани
              {/* Company */}
            </h4>
          </Link>
        </div>

        {/* body div */}
        <div className="flex bg-[#FFFFFF] w-full px-6 py-9 h-[580px] overflow-y-scroll custom-scroller-design">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default InsuranceContract;
