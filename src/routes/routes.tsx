"use client";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import { Sign_In, Sign_Up } from "@/components/auth/forms";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  Compensation,
  Employee,
  EmployeeRegistration,
  InsuranceContract,
  ListEmployees,
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
          {/* Nested routes for Employee */}
          <Route path="/" element={<Employee />}>
            <Route
              path="/employee-registration"
              element={<EmployeeRegistration />}
            />
            <Route path="list-employees" element={<ListEmployees />} />
          </Route>

          <Route path="insurance-contract" element={<InsuranceContract />} />
          <Route path="compensation" element={<Compensation />} />
        </Route>
      </Routes>
    </>
  );
};

export default routes;
