"use client";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <>
      <div className="h-screen bg-[#005F7E] w-[268px] px-4 py-8 flex flex-col justify-between">
        <div>
          {/* top logo */}
          <div>
            <img
              src="/assets/logo/migLogo.svg"
              alt="migLogo"
              className="h-[24px]"
            />
          </div>

          {/* user register section */}
          <div className="mt-20 flex flex-col items-center gap-8">
            {/* user register */}
            <Link to={"/"} className="flex items-center gap-2 w-full">
              <img
                src="/assets/sidenavbar/sideUserRegister.svg"
                alt="sideUserRegister"
                className="w-[32px] h-[32px]"
              />
              <p className="text-[16px] leading-[16px] text-[#FFFFFF] font-normal">
                Хэрэглэгчийн бүртгэл
                {/* User registration */}
              </p>
            </Link>

            {/* user list */}
            <Link to={"/user-list"} className="flex items-center gap-2 w-full">
              <img
                src="/assets/sidenavbar/sideUserRegister.svg"
                alt="sideUserRegister"
                className="w-[32px] h-[32px]"
              />
              <p className="text-[16px] leading-[16px] text-[#FFFFFF] font-normal">
                Хэрэглэгчийн жагсаалт
                {/* User list */}
              </p>
            </Link>

            {/* Contact-1 excle */}
            <Link
              to={"/insurance-contract"}
              className="flex items-center gap-2 w-full"
            >
              <img
                src="/assets/sidenavbar/sideUserRegister.svg"
                alt="sideUserRegister"
                className="w-[32px] h-[32px]"
              />
              <p className="text-[16px] leading-[16px] text-[#FFFFFF] font-normal">
                Даатгалын гэрээ
                {/* Insurance contract */}
              </p>
            </Link>

            {/* user claims step-1 */}
            <Link
              to={"/compensation"}
              className="flex items-center gap-2 w-full"
            >
              <img
                src="/assets/sidenavbar/sideUserRegister.svg"
                alt="sideUserRegister"
                className="w-[32px] h-[32px]"
              />
              <p className="text-[16px] leading-[16px] text-[#FFFFFF] font-normal">
                Нөхөн төлбөр
                {/* Compensation */}
              </p>
            </Link>

            {/* admin register */}
            <Link to={"/faq"} className="flex items-center gap-2 w-full">
              <img
                src="/assets/sidenavbar/sideUserRegister.svg"
                alt="sideUserRegister"
                className="w-[32px] h-[32px]"
              />
              <p className="text-[16px] leading-[16px] text-[#FFFFFF] font-normal">
                Түгээмэл асуулт
                {/* Frequently asked questions */}
              </p>
            </Link>

            {/* Change form */}
            <Link to={"/ChangeForm"} className="flex items-center gap-2 w-full">
              <img
                src="/assets/sidenavbar/sideUserRegister.svg"
                alt="sideUserRegister"
                className="w-[32px] h-[32px]"
              />
              <p className="text-[16px] leading-[16px] text-[#FFFFFF] font-normal">
                Маягт солих
                {/* Change form */}
              </p>
            </Link>
          </div>
        </div>

        {/* logout section */}
        <div className="">
          <Link to={"/"} className="flex items-center gap-2">
            <img
              src="/assets/sidenavbar/sideNavLogOut.svg"
              alt="sideNavLogOut"
              className="w-[32px] h-[32px]"
            />
            <p className="text-[16px] leading-[16px] text-[#FFFFFF] font-normal">
              Гарах
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
