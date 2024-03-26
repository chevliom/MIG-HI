import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center h-full w-full">
        <div className="bg-[#FFFFFF] rounded-2xl p-4 w-1/2">
          {/* Password recovery */}
          <h1 className="text-[#195563] leading-3 font-bold text-2xl mt-4">
            Нууц үг сэргээх
          </h1>

          {/* Email */}
          <div className="flex gap-2 flex-col mt-8">
            <Label className="font-normal text-[#424B5A] text-md">Имэйл </Label>
            <Input
              type="email"
              placeholder="Имэйл оруулах"
              className="placeholder:text-[#B3CFD8] text-[#424B5A]"
            />
          </div>

          {/* Continue */}
          <div className="flex items-center w-full mt-8">
            <Button
              onClick={() => navigate("/verify-otp")}
              className="text-[#FFFFFF] font-bold text-2xl bg-[#005F7E] hover:bg-[#006F8F] w-full"
            >
              Үргэлжлүүлэх
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
