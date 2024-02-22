import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashBoard from "./pages/DashBoard";
import Settings from "./pages/Settings";
import MainAccount from "./pages/MainAccount";
import {
  createCustomerData,
  initiateTransactionData,
  loadAccountDetailsData,
  loadAllBounceEmiData,
  loadAllEmiData,
  loadAllPaidEmiData,
  loadAllPendingEmiData,
  loadAllSettledEmiData,
  loadAllTransactionData,
  loadApproveLoanData,
  loadClosedLoanData,
  loadCustomerData,
  loadLoanData,
  loadRunningLoanData,
  updateCustomerData,
} from "./components/ApiCalls";
import AllLoans from "./pages/AllLoans";
import RuningLoans from "./pages/RuningLoans";
import ClosedLoans from "./pages/ClosedLoans";
import ApprovalLoans from "./pages/ApprovalLoans";
import AllEmi from "./pages/AllEmi";
import AllCustomer from "./pages/AllCustomer";
import CreateCustomer from "./pages/CreateCustomer";
import UpdateCustomer from "./pages/UpdateCustomer";
import Transaction from "./pages/Transaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <DashBoard /> },
      {
        path: "/transaction",
        element: <Transaction />,
        loader: loadAllTransactionData,
      },
      {
        path: "/mainAccount",
        element: <MainAccount />,
        loader: loadAccountDetailsData,
        action:initiateTransactionData
      },
      { path: "/settings", element: <Settings /> },
      {
        path: "/customer/all customer",
        element: <AllCustomer />,
        loader: loadCustomerData,
      },
      {
        path: "/customer/create customer",
        element: <CreateCustomer />,
        action: createCustomerData,
      },
      {
        path: "/customer/update customer",
        element: <UpdateCustomer />,
        action: updateCustomerData,
      },
      { path: "/loans/all Loans", element: <AllLoans />, loader: loadLoanData },
      {
        path: "/loans/running Loans",
        element: <RuningLoans />,
        loader: loadRunningLoanData,
      },
      {
        path: "/loans/closed Loans",
        element: <ClosedLoans />,
        loader: loadClosedLoanData,
      },
      {
        path: "/loans/approval Loans",
        element: <ApprovalLoans />,
        loader: loadApproveLoanData,
      },
      { path: "/EMI/all emi", element: <AllEmi />, loader: loadAllEmiData },
      {
        path: "/EMI/pending emi",
        element: <AllEmi />,
        loader: loadAllPendingEmiData,
      },
      {
        path: "/EMI/bounce emi",
        element: <AllEmi />,
        loader: loadAllBounceEmiData,
      },
      {
        path: "/EMI/paid emi",
        element: <AllEmi />,
        loader: loadAllPaidEmiData,
      },
      {
        path: "/EMI/settled emi",
        element: <AllEmi />,
        loader: loadAllSettledEmiData,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
