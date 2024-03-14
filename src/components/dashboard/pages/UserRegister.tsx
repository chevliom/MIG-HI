"use client";

import { Button } from "@/components/ui/button";
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
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const UserRegister = () => {
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-4"
            >
              {/* register number name this one */}
              <div className="w-full flex gap-2">
                {/* This one */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-2/6">
                      <FormLabel>Овог</FormLabel>
                      <FormControl className="w-full">
                        <Input
                          placeholder="Овог оруулах..."
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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

                {/* Register number */}
                <FormField
                  control={form.control}
                  name="registerNumber"
                  render={({ field }) => (
                    <FormItem className="w-2/6">
                      <FormLabel>Регистрийн дугаар</FormLabel>
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

              {/* company number password */}
              <div className="w-full flex gap-2">
                {/* Company */}
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem className="w-2/6">
                      <FormLabel>Компани</FormLabel>
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

                {/* Phone number */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-2/6">
                      <FormLabel>Утасны дугаар</FormLabel>
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

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-2/6">
                      <FormLabel>Нууц үг</FormLabel>
                      <FormControl className="w-full">
                        <Input
                          type="password"
                          placeholder="Нууц үг оруулах..."
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Add button */}
              <div className="w-full flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#005F7E] hover:bg-[#005f7eed]"
                >
                  Нэмэх
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
