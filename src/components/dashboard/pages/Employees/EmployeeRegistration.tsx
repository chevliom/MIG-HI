import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import * as React from "react";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const EmployeeRegistration = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex gap-4 items-center px-3">
          <div className="relative">
            <img
              src="/assets/employee/searchIcon.svg"
              alt="searchIcon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-[16px] h-[16px]"
            />
            <Input
              type="search"
              placeholder="Хайх утга оруулах..."
              className="pl-8"
            />
          </div>

          <hr className="border border-[#C2D1D9] w-[32px] rotate-90" />

          {/* Sort by date... */}
          <div className="my-3 mx-6">
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex">
                  <Input
                    type="search"
                    className="rounded-r-none"
                    value={date ? format(date, "PPP") : "Огноогоор шүүх..."}
                    readOnly
                  />
                  <Button
                    type="submit"
                    className="bg-[#005F7E] hover:bg-[#014F6f] rounded-l-none"
                  >
                    <img
                      src="/assets/employee/sortDate.svg"
                      alt="sortDate"
                      className="w-[16px] h-[16px]"
                    />
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex gap-3 items-center w-full h-auto bg-[#E8EEEF] rounded-md">
          <div className="w-1/2 flex gap-2 px-3 py-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Овог
              </label>
              <Input />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Нэр
              </label>
              <Input />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Имэйл
              </label>
              <Input />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Утасны дугаар
              </label>
              <Input />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeRegistration;
