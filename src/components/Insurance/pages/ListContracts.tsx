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

import insuranceDataJson from "../../../../json/insuranceData.json";
import "@/components/Employees/pages/employeeCustomScroller.css";

interface EmployeeData {
  name: string;
  userId: string;
  country: string;
  city: string;
  startDate: string;
  endDate: string;
  amount: string;
  status: string;
}

const ListContracts = () => {
  const [date, setDate] = React.useState<Date>();

  const [insuranceData, setInsuranceData] = React.useState<EmployeeData[]>([]);

  // if api come then in useEffect make a function and call that api and out of function call that function
  React.useEffect(() => {
    setInsuranceData(insuranceDataJson);
  }, []);

  return (
    <>
      <div className="flex flex-col w-full">
        {/* search & sort by date */}
        <div className="flex gap-4 items-center">
          <div className="relative">
            <img
              src="/assets/employee/searchIcon.svg"
              alt="searchIcon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-[16px] h-[16px]"
            />
            <Input
              type="search"
              placeholder="Хайх утга оруулах..."
              className="pl-8 placeholder:text-[#D1DDE0]"
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
                    className="rounded-r-none text-[#D1DDE0]"
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

        <div className="flex gap-8 flex-col items-center w-full">
          <div className="grid grid-cols-8 gap-2 px-3 py-4 h-auto bg-[#E8EEEF] rounded-md w-full">
            {/* Contract number */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Гэрээний дугаар
              </label>
              <Input />
            </div>

            {/* Start date */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Эхлэх огноо
              </label>
              <Input />
            </div>

            {/* End date */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Дуусах огноо
              </label>
              <Input />
            </div>

            {/* Overall rating */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Нийт үнэлгээ
              </label>
              <Input />
            </div>

            {/* Type */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Төрөл
              </label>
              <Input />
            </div>

            {/* File */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Файл
              </label>
            </div>
          </div>

          <div className="flex flex-col w-full gap-2 h-[45vh] overflow-y-auto custom-scroller-design">
            {insuranceData.map((insurance, index) => (
              <div
                key={index}
                className="grid grid-cols-8 items-center justify-start w-full px-3"
              >
                <span className="text-[#005F7E] underline underline-offset-4">
                  {insurance.userId}
                </span>
                <span className="text-[#424B5A]">{insurance.startDate}</span>
                <span className="text-[#424B5A]">{insurance.endDate}</span>
                <span className="text-[#424B5A]">{insurance.amount}</span>

                <div className="col-span-1 w-full">
                  <Button
                    className={`${
                      insurance.status === "Идэвхитэй"
                        ? "bg-[#00A27B29] hover:bg-[#00A27A37] text-[#00A27B] rounded-full"
                        : "bg-[#FF5C5E29] hover:bg-[#FF5C4F18] text-[#FF5C5E] rounded-full"
                    }`}
                  >
                    {insurance.status}
                  </Button>
                </div>

                <span className="text-[#005F7E] underline underline-offset-4">
                  Харах
                </span>

                <div className="flex items-center justify-between">
                  {/* <img src="/assets/employee/editIcon.svg" alt="editIcon" /> */}

                  <img src="/assets/employee/deleteIcon.svg" alt="deleteIcon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListContracts;
