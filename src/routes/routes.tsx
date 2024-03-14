"use client";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import { Sign_In, Sign_Up } from "@/components/auth/forms";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  ChangeForm,
  Compensation,
  FrequentlyAskedQuestions,
  InsuranceContract,
  UserList,
  UserRegister,
} from "@/components/dashboard/pages";

const routes = () => {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/sign-in" element={<AuthLayout />}>
          <Route index element={<Sign_In />} />
        </Route>
        <Route path="/sign-up" element={<AuthLayout />}>
          <Route index element={<Sign_Up />} />
        </Route>

        {/* private routes */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" index element={<UserRegister />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/insurance-contract" element={<InsuranceContract />} />
          <Route path="/compensation" element={<Compensation />} />
          <Route path="/faq" element={<FrequentlyAskedQuestions />} />
          <Route path="/ChangeForm" element={<ChangeForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default routes;
