import { Link } from "react-router-dom";

const InsuranceContract = () => {
  return (
    <>
      <div className="my-3 mx-6">
        {/* tab on top */}
        <div className="w-full flex items-center gap-2">
          {/* Insurer */}
          <Link
            to={"/"}
            className="bg-[#F9F9F9] hover:bg-[#FFFFFF] rounded-t-2xl p-3"
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Даатгуулагч
              {/* Insurer */}
            </h4>
          </Link>

          {/* Company */}
          <Link
            to={"/"}
            className="bg-[#F9F9F9] hover:bg-[#FFFFFF] rounded-t-2xl p-3"
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Компани
              {/* Company */}
            </h4>
          </Link>

          {/* Reimbursement Physician */}
          <Link
            to={"/"}
            className="bg-[#F9F9F9] hover:bg-[#FFFFFF] rounded-t-2xl p-3"
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Нөхөн төлбөрийн эмч
              {/* Reimbursement Physician */}
            </h4>
          </Link>

          {/* Director of Compensation */}
          <Link
            to={"/"}
            className="bg-[#F9F9F9] hover:bg-[#FFFFFF] rounded-t-2xl p-3"
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Нөхөн төлбөрийн захирал
              {/* Director of Compensation */}
            </h4>
          </Link>

          {/* Compensation Manager */}
          <Link
            to={"/"}
            className="bg-[#F9F9F9] hover:bg-[#FFFFFF] rounded-t-2xl p-3"
          >
            <h4 className="text-[16px] leading-[16px] text-[#424B5A] font-medium">
              Нөхөн төлбөрийн менежер
              {/* Compensation Manager */}
            </h4>
          </Link>
        </div>

        {/* body div */}
        <div className="bg-[#FFFFFF] w-full h-[580px] px-6 py-9 flex">
          <h1>InsuranceContract</h1>
        </div>
      </div>
    </>
  );
};

export default InsuranceContract;
