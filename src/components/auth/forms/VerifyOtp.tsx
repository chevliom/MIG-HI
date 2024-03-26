import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", ""]);

  const handleInputChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;

    if (value && index < otpValues.length - 1) {
      const nextIndex = index + 1;
      const nextInputRef = document.getElementById(
        `otpInput-${nextIndex}`
      ) as HTMLInputElement;
      nextInputRef.focus();
    } else if (!value && index > 0) {
      const prevIndex = index - 1;
      const prevInputRef = document.getElementById(
        `otpInput-${prevIndex}`
      ) as HTMLInputElement;
      prevInputRef.focus();
    }

    setOtpValues(newOtpValues);
  };

  const handleKeyPress = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key >= "0" && event.key <= "9") {
      handleInputChange(index, event.key);
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="bg-[#FFFFFF] rounded-2xl p-4 w-1/2">
        <div className="flex gap-6 flex-col items-center justify-center w-full">
          <img src="/assets/signInAndUp/EmailBox.svg" alt="EmailBox" />
          <p className="text-center text-[#6D6F70] font-normal text-md">
            Таны и-мэйл хаягт илгээсэн 4 оронтой кодыг оруулна уу.
          </p>
        </div>

        {/* Email */}
        <div className="flex gap-8 flex-col items-center justify-center mt-8">
          <Label className="font-normal text-[#8CAAB1] text-md">
            Имэйл хаяг: ***@gmail.com
          </Label>
          <div className="flex gap-4 items-center justify-center">
            {otpValues.map((value, index) => (
              <Input
                key={index}
                id={`otpInput-${index}`}
                type="text"
                placeholder="."
                className="placeholder:text-4xl placeholder:text-[#DADADA] text-[#6D6F70] w-12 text-center"
                value={value}
                maxLength={1}
                onChange={(event) =>
                  handleInputChange(index, event.target.value)
                }
                onKeyPress={(event) => handleKeyPress(index, event)}
              />
            ))}
          </div>
        </div>

        {/* Get a new code */}
        <div className="flex items-center w-full mt-12">
          <Button
            onClick={() => navigate("/employee/employee-registration")}
            className="text-[#FFFFFF] font-bold text-2xl bg-[#005F7E] hover:bg-[#006F8F] w-full"
          >
            Шинэ код авах
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
