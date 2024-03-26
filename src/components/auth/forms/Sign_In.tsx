import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const Sign_In = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center h-full w-full">
        <div className="bg-[#FFFFFF] rounded-2xl p-4 w-1/2">
          {/* Login */}
          <h1 className="text-[#195563] leading-3 font-bold text-2xl">
            Нэвтрэх
          </h1>

          {/* username */}
          <div className="flex gap-2 flex-col mt-8">
            <Label className="font-normal text-[#424B5A] text-md">
              Хэрэглэгчийн нэр
            </Label>
            <Input
              placeholder="Нэр"
              className="placeholder:text-[#B3CFD8] text-[#424B5A]"
            />
          </div>

          {/* Password */}
          <div className="flex gap-2 flex-col mt-4">
            <Label className="font-normal text-[#424B5A] text-md">
              Нууц үг
            </Label>
            <Input
              type="password"
              placeholder="Нэр"
              className="placeholder:text-[#B3CFD8] text-[#424B5A]"
            />
          </div>

          {/* Password recovery */}
          <div className="flex items-center justify-end w-full mt-4">
            <p
              onClick={() => navigate("/reset-password")}
              className="text-[#005F7E] text-md font-normal underline underline-offset-4 cursor-pointer"
            >
              Нууц үг сэргээх
            </p>
          </div>

          <div className="flex items-center w-full mt-4">
            <Button
              onClick={() => navigate("/employee/employee-registration")}
              className="text-[#FFFFFF] font-bold text-2xl bg-[#005F7E] hover:bg-[#006F8F] w-full"
            >
              Нэвтрэх
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_In;
