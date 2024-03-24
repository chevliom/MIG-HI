import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const RegistrationContracts = () => {
  // here define the valu type
  const formSchema = z.object({
    firstName: z.string().min(2, {
      message: "first name must be at least 2 characters.",
    }),

    lastName: z.string().min(2, {
      message: "first name must be at least 2 characters.",
    }),

    registerNumber: z
      .string()
      .min(6, { message: "Regester Number must be at least 6 characters." }),

    companyName: z
      .string()
      .min(3, { message: "Company Name must be at least 3 characters." }),

    phoneNumber: z
      .string()
      .min(10, { message: "Phone Number must be at least 10 characters." }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  });

  // here all fom fields
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      registerNumber: "",
      companyName: "",
      phoneNumber: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle file selection here
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            {/* Organization register */}
            <div className="w-full flex items-center gap-2">
              {/* Organization register */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-2/6">
                    <FormLabel>Байгууллагын регистр</FormLabel>
                    <FormControl className="w-full">
                      <Input
                        placeholder="Дугаар..."
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-1/2 flex gap-2 items-center mt-8">
                {/* Check */}
                <Button
                  type="submit"
                  className="bg-[#005F7E] hover:bg-[#005f7eed] text-lg font-semibold"
                >
                  Шалгах
                </Button>
              </div>

              {/* Name */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-2/6">
                    <FormLabel>Нэр</FormLabel>
                    <FormControl className="w-full">
                      <Input
                        placeholder="Нэр оруулах..."
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="registerNumber"
                render={({ field }) => (
                  <FormItem className="w-2/6">
                    <FormLabel>Имэйл</FormLabel>
                    <FormControl className="w-full">
                      <Input
                        placeholder="Регистрийн дугаар оруулах..."
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Phone number,  password */}
            <div className="w-full flex gap-2">
              {/* Phone number */}
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem className="w-2/6">
                    <FormLabel>Утасны дугаар</FormLabel>
                    <FormControl className="w-full">
                      <Input
                        placeholder="Компани сонгох ..."
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="w-2/6">
                    <FormLabel>Нууц үг</FormLabel>
                    <FormControl className="w-full">
                      <Input
                        placeholder="Утасны дугаар оруулах..."
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Excle Data entry, enter contact information, enter the annex to the contract */}
            <div className="w-full flex gap-2 my-3">
              {/* Excel data entry */}
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm text-[#424B5A]">
                  Excel мэдээлэл оруулах
                </span>
                <div
                  className="bg-[#E6EFF2] h-[96px] w-full max-w-sm flex flex-col justify-center items-center rounded-md p-2 relative cursor-pointer"
                  onClick={handleImageClick}
                  style={{ position: "relative" }}
                >
                  <label htmlFor="photoId" className="cursor-pointer">
                    <img
                      src="/assets/employee/uploadIcon.svg"
                      alt="uploadIcon"
                      className="absolute inset-0 m-auto"
                    />
                    <input
                      id="photoId"
                      type="file"
                      ref={inputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="text-xs text-[#005F7E] absolute bottom-4">
                    Хуулах
                  </span>
                </div>
              </div>

              {/* Enter contract information */}
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm text-[#424B5A]">
                  Гэрээний мэдээлэл оруулах
                </span>
                <div
                  className="bg-[#E6EFF2] h-[96px] w-full max-w-sm flex flex-col justify-center items-center rounded-md p-2 relative cursor-pointer"
                  onClick={handleImageClick}
                  style={{ position: "relative" }} // Add position relative to container
                >
                  <label htmlFor="drivingLicense" className="cursor-pointer">
                    <img
                      src="/assets/employee/uploadIcon.svg"
                      alt="uploadIcon"
                      className="absolute inset-0 m-auto"
                    />
                    <input
                      id="drivingLicense"
                      type="file"
                      ref={inputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="text-xs text-[#005F7E] absolute bottom-4">
                    Хуулах
                  </span>
                </div>
              </div>

              {/* Enter the annex to the contract */}
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm text-[#424B5A]">
                  Гэрээний хавсралт оруулах
                </span>
                <div
                  className="bg-[#E6EFF2] h-[96px] w-full max-w-sm flex flex-col justify-center items-center rounded-md p-2 relative cursor-pointer"
                  onClick={handleImageClick}
                  style={{ position: "relative" }} // Add position relative to container
                >
                  <label
                    htmlFor="vehicleCertificate"
                    className="cursor-pointer"
                  >
                    <img
                      src="/assets/employee/uploadIcon.svg"
                      alt="uploadIcon"
                      className="absolute inset-0 m-auto"
                    />
                    <input
                      id="vehicleCertificate"
                      type="file"
                      ref={inputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="text-xs text-[#005F7E] absolute bottom-4">
                    Хуулах
                  </span>
                </div>
              </div>
            </div>

            {/* check box section here */}
            <div className="flex flex-col gap-4 w-full my-3">
              {/* Choose an employee role */}
              <h3 className="text-[#005F7E]">Ажилтны үүргийг сонгох</h3>

              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  {/* Director of Compensation */}
                  <Checkbox id="director" />
                  <label
                    htmlFor="director"
                    className="text-sm font-medium leading-none cursor-pointer peer-disabled:opacity-70"
                  >
                    Нөхөн төлбөрийн захирал
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Reimbursement Physician */}
                  <Checkbox id="reimbursement" />
                  <label
                    htmlFor="reimbursement"
                    className="text-sm font-medium leading-none cursor-pointer peer-disabled:opacity-70"
                  >
                    Нөхөн төлбөрийн эмч
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Insurance manager */}
                  <Checkbox id="insurance" />
                  <label
                    htmlFor="insurance"
                    className="text-sm font-medium leading-none cursor-pointer peer-disabled:opacity-70"
                  >
                    Даатгалын менежер
                  </label>
                </div>
              </div>
            </div>

            {/* Excel template download */}
            <div className="w-full flex justify-end">
              <Button type="submit" className="bg-[#217346] hover:bg-[#217237]">
                Excel загвар татах
              </Button>
            </div>
          </form>
        </Form>
        {/* Register button */}
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            className="bg-[#005F7E] hover:bg-[#005f7eed] w-full mt-16 mb-5"
          >
            Бүртгэх
          </Button>
        </div>
      </div>
    </>
  );
};

export default RegistrationContracts;
