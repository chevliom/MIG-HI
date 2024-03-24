import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "@/components/Employees/pages/employeeCustomScroller.css";

const CompensationLayout = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  const handleTabClick = (path: string) => {
    setActiveTab(path);
  };

  return (
    <>
      <div className="my-3 mx-6">
        {/* Send compensation materials, Reimbursement history */}
        <div className="w-full flex items-center gap-2">
          {/* Send compensation materials */}
          <Link
            to={"/compensation/compensation-materials"}
            onClick={() =>
              handleTabClick("/compensation/compensation-materials")
            }
            className={`${
              activeTab === "/compensation/compensation-materials"
                ? "bg-[#FFFFFF]"
                : "bg-[#F9F9F9]"
            } hover:bg-[#FFFFFF] rounded-t-2xl p-3`}
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Нөхөн төлбөрийн матерал илгээх
              {/* Send compensation materials */}
            </h4>
          </Link>

          {/* Reimbursement history */}
          <Link
            to={"/compensation/reimbursement-history"}
            onClick={() =>
              handleTabClick("/compensation/reimbursement-history")
            }
            className={`${
              activeTab === "/compensation/reimbursement-history"
                ? "bg-[#FFFFFF]"
                : "bg-[#F9F9F9]"
            } hover:bg-[#FFFFFF] rounded-t-2xl p-3`}
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Нөхөн төлбөрийн түүх
              {/* Reimbursement history */}
            </h4>
          </Link>

          {/* Compensation list */}
          <Link
            to={"/compensation/compensation-list"}
            onClick={() => handleTabClick("/compensation/compensation-list")}
            className={`${
              activeTab === "/compensation/compensation-list"
                ? "bg-[#FFFFFF]"
                : "bg-[#F9F9F9]"
            } hover:bg-[#FFFFFF] rounded-t-2xl p-3`}
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Нөхөн төлбөрийн жагсаалт
              {/* Compensation list */}
            </h4>
          </Link>
        </div>

        {/* body div */}
        <div className="flex bg-[#FFFFFF] px-6 py-9 w-full h-[580px] overflow-y-scroll custom-scroller-design">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CompensationLayout;
