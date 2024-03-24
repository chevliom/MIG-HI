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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import employeeDataJson from "../../../../json/employeeData.json";
import "./employeeCustomScroller.css";

interface EmployeeData {
  name: string;
  country: string;
  city: string;
  amount: number;
}

const ListEmployees = () => {
  const [date, setDate] = React.useState<Date>();

  const [employeeData, setEmployeeData] = React.useState<EmployeeData[]>([]);

  // if api come then in useEffect make a function and call that api and out of function call that function
  React.useEffect(() => {
    setEmployeeData(employeeDataJson);
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
          <div className="flex gap-2 px-3 py-4 h-auto bg-[#E8EEEF] rounded-md w-full">
            {/* This one */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Овог
              </label>
              <Input />
            </div>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Нэр
              </label>
              <Input />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Имэйл
              </label>
              <Input />
            </div>

            {/* Phone number */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#005F7E]">
                Утасны дугаар
              </label>
              <Input />
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 h-[18rem] overflow-y-auto custom-scroller-design">
            {employeeData.map((employee, index) => (
              <div
                key={index}
                className="grid grid-cols-8 items-center justify-start w-full"
              >
                <span>{employee.name}</span>
                <span>{employee.country}</span>
                <span>{employee.city}</span>
                <span>{employee.amount}</span>

                <div className="col-span-2 w-full">
                  <Select>
                    <SelectTrigger className="w-3/4 h-7 focus:outline-none focus:ring-0 focus:border-none rounded-full">
                      <SelectValue placeholder="Нөхөн төлбөрийн захирал" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <img src="/assets/employee/editIcon.svg" alt="editIcon" />

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

export default ListEmployees;
