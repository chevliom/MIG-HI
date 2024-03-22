import { Link, useLocation } from "react-router-dom";
import EmployeeRegistration from "./Employees/EmployeeRegistration";
import ListEmployees from "./Employees/ListEmployees";
import { useState } from "react";

const UserRegister = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<string>(() => {
    return location.pathname === "/list-employees" ? "list" : "registration";
  });

  // Function to handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="my-3 mx-6">
        {/* tab on top */}
        <div className="w-full flex items-center gap-2">
          {/* Employee registration */}
          <Link
            to={"/employee-registration"}
            className={`bg-[#F9F9F9] hover:bg-[#FFFFFF] rounded-t-2xl p-3 ${
              activeTab === "registration" && "bg-[#FFFFFF]"
            }`}
            onClick={() => handleTabChange("registration")}
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Ажилтны бүртгэл
              {/* Employee registration */}
            </h4>
          </Link>

          {/* List of employees */}
          <Link
            to={"/list-employees"}
            className={`bg-[#F9F9F9] hover:bg-[#FFFFFF] rounded-t-2xl p-3 ${
              activeTab === "list" && "bg-[#FFFFFF]"
            }`}
            onClick={() => handleTabChange("list")}
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Ажилчдын жагсаалт
              {/* List of employees */}
            </h4>
          </Link>
        </div>

        <div className="bg-[#FFFFFF] w-full h-[580px] px-6 py-9 flex">
          {activeTab === "registration" ? (
            <ListEmployees />
          ) : (
            <EmployeeRegistration />
          )}
        </div>
      </div>
    </>
  );
};

export default UserRegister;
