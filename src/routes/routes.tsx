"use client";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import {
  ResetPassword,
  Sign_In,
  Sign_Up,
  VerifyOtp,
} from "@/components/auth/forms";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import EmployeeLayout from "@/components/Employees/EmployeeLayout";
import {
  DetailsListEmployees,
  EmployeeRegistration,
  ListEmployees,
} from "@/components/Employees/pages";

import InsuranceContract from "@/components/Insurance/InsuranceContractLayout";
import {
  ListContracts,
  RegistrationContracts,
} from "@/components/Insurance/pages";
import CompensationLayout from "@/components/Compensation/CompensationLayout";
import {
  CompensationList,
  CompensationMaterials,
  ReimbursementHistory,
} from "@/components/Compensation/pages";

const routes = () => {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Sign_In />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/sign-up" element={<Sign_Up />} />
        </Route>

        {/* private routes */}
        <Route path="/" element={<DashboardLayout />}>
          {/* if any go to / then bydefault redirect to the /employee/employee-regestion page */}
          {/* <Route
            path="/"
            element={<Navigate to="/employee/employee-registration" />}
          /> */}
          {/* Nested routes for Employee */}
          <Route path="/employee" element={<EmployeeLayout />}>
            <Route
              path="employee-registration"
              element={<EmployeeRegistration />}
            />
            <Route path="list-employees" element={<ListEmployees />} />
            <Route
              path="detail-list-employees"
              element={<DetailsListEmployees />}
            />
          </Route>

          {/* Nested routes for insurance */}
          <Route path="/insurance-contract" element={<InsuranceContract />}>
            <Route
              path="registration-contracts"
              element={<RegistrationContracts />}
            />
            <Route path="list-contracts" element={<ListContracts />} />
          </Route>

          {/* Nested routes for insurance */}
          <Route path="/compensation" element={<CompensationLayout />}>
            <Route
              path="compensation-materials"
              element={<CompensationMaterials />}
            />

            <Route
              path="reimbursement-history"
              element={<ReimbursementHistory />}
            />

            <Route path="compensation-list" element={<CompensationList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default routes;
