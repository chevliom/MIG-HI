import { Outlet } from "react-router-dom";
import AuthNavBar from "./forms/AuthNavBar";
import AuthFooter from "./forms/AuthFooter";

const AuthLayout = () => {
  return (
    <>
      <section className="flex flex-1 min-h-screen items-center flex-col">
        <AuthNavBar />

        <div className="flex flex-1 w-full">
          <div className="hidden md:block w-1/2 relative">
            <div className="absolute inset-0 w-full h-full bg-[#00ACE480] opacity-70 z-10 flex items-center justify-center">
              <p className="text-[#FFFFFF] text-center font-semibold text-3xl">
                МИГ даатгалын эрүүл <br /> мэндийн даатгалын <br /> системд
                тавтай морил
              </p>
            </div>

            <img
              src="/assets/signInAndUp/signInimg.png"
              alt="logo"
              className="object-cover bg-no-repeat absolute inset-0 w-full h-full"
            />
          </div>

          <div className="w-full md:w-1/2 bg-[#E6EFF2]">
            <Outlet />
          </div>
        </div>

        <AuthFooter />
      </section>
    </>
  );
};

export default AuthLayout;
