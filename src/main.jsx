import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Settings from "./pages/Settings";
import MainAccount from "./pages/MainAccount";
import {
  createCustomerData,
  initiateTransactionData,
  loadAccountDetailsData,
  loadAllEmiData,
  loadAllPendingEmiData,
  loadAllTransactionData,
  loadApproveLoanData,
  loadCustomerData,
  loadLoanData,
  updateCustomerData,
} from "./components/ApiCalls";
import AllLoans from "./pages/AllLoans";
import ApprovalLoans from "./pages/ApprovalLoans";
import AllEmi from "./pages/AllEmi";
import AllCustomer from "./pages/AllCustomer";
import CreateCustomer from "./pages/CreateCustomer";
import UpdateCustomer from "./pages/UpdateCustomer";
import Transaction from "./pages/Transaction";
import CheckCustomer from "./pages/CheckCustomer";
import CreateLaon  from "./pages/CreateLoan"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/transaction",
        element: <Transaction />,
        loader: loadAllTransactionData,
      },
      {
        path: "/",
        element: <MainAccount />,
        loader: loadAccountDetailsData,
        action: initiateTransactionData,
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
      {
        path: "/loans/Request Loan",
        element: <CheckCustomer />,
        action: updateCustomerData,
      },
      { path: "/loans/all Loans", element: <AllLoans />, loader: loadLoanData },

      {
        path: "/loans/approval Loans",
        element: <ApprovalLoans />,
        loader: loadApproveLoanData,
      },
      {
        path: "/loans/createLoan",
        element: <CreateLaon />,
      },
      { path: "/EMI/all emi", element: <AllEmi />, loader: loadAllEmiData },
      {
        path: "/EMI/pending emi",
        element: <AllEmi />,
        loader: loadAllPendingEmiData,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
