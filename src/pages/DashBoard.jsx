import React, { useState } from "react";
import { approveLoan, createLoan, paidEmi, settleLoan } from "../components/ApiCalls";

const DashBoard = () => {
  const [emiId, setEmiId] = useState("");
  const [loanId, setLoanId] = useState("");
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("");

  const handleChangeEmi = (event) => {
    setEmiId(event.target.value);
  };

  const handleChangeLoan = (event) => {
    setLoanId(event.target.value);
  };
  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleChangeTenure = (event) => {
    setTenure(event.target.value);
  };

  return (
    <div className="px-2 md:p-6 grid gap-6 text-xs sm:text-xl">
      <div className="flex flex-wrap gap-6">
        <div className="shadow-lg max-w-fit sm:min-w-72 grid gap-4 text-center p-2 sm:p-4  bg-transparent text-white border-2 rounded-md">
          <h1 className="text-2xl">Pay EMI</h1>
          <hr className="w-28 m-auto border-2  border-cyan-500 " />
          <input
            type="number"
            onChange={handleChangeEmi}
            required
            placeholder="Enter Your EMI Id"
            className="border-2 rounded-md p-2 bg-transparent border-cyan-500 my-4"
          />
          <button
            className="bg-cyan-400 p-2 rounded-md text-white font-bold text-lg"
            onClick={() => {
              paidEmi(emiId);
            }}
          >
            Pay
          </button>
        </div>

        {/* Approve Loan */}

        <div className="shadow-lg max-w-fit sm:min-w-72 grid gap-4 text-center p-2 sm:p-4   bg-transparent text-white border-2 rounded-md">
          <h1 className="text-2xl">Approve Loan</h1>
          <hr className="w-28 m-auto border-2 border-cyan-500 " />
          <input
            type="number"
            onChange={handleChangeLoan}
            required
            placeholder="Enter Your Loan Id"
            className="border-2 rounded-md p-2 bg-transparent border-cyan-500 my-4"
          />
          <button
            className="bg-cyan-400 p-2 rounded-md text-white font-bold text-lg"
            onClick={() => {
              approveLoan(loanId);
            }}
          >
            Approve
          </button>
        </div>
      </div>

      <div>
        <div className="shadow-lg max-w-[37rem]  grid gap-4 text-center p-4 bg-transparent text-white border-2 rounded-md">
          <h1 className="text-2xl">Create Loan</h1>
          <hr className="w-28 m-auto border-2 bg-transparent  border-cyan-500 " />
          <input
            type="number"
            onChange={handleChangeLoan}
            required
            placeholder="Enter Your customer Id"
            className="border-2 rounded-md p-2 bg-transparent  border-cyan-500 my-4"
          />
          <input
            type="number"
            onChange={handleChangeAmount}
            required
            placeholder="Enter Your Loan Amount"
            className="border-2 rounded-md p-2 bg-transparent  border-cyan-500 my-4"
          />
          <input
            type="number"
            onChange={handleChangeTenure}
            required
            placeholder="Enter Your Loan Tenure"
            className="border-2 rounded-md p-2 bg-transparent  border-cyan-500 my-4"
          />
          <button
            className="bg-cyan-400 p-2 rounded-md text-white font-bold text-lg"
            onClick={() => {
              createLoan(loanId, amount, tenure);
            }}
          >
            Approve
          </button>
        </div>
      </div>

      <div>
        <div className="shadow-lg max-w-[37rem]  grid gap-4 text-center p-4 bg-transparent rounded-md text-white border-2">
          <h1 className="text-2xl">Settled Loan</h1>
          <hr className="w-28 m-auto border-2 border-cyan-500 " />
          <input
            type="number"
            onChange={handleChangeLoan}
            required
            placeholder="Enter Your Loan Id"
            className="border-2 rounded-md p-2 bg-transparent border-cyan-500 my-4"
          />
          <input
            type="number"
            onChange={handleChangeAmount}
            required
            placeholder="Enter Your Loan Settlement Amount"
            className="border-2 rounded-md p-2 bg-transparent  border-cyan-500 my-4"
          />

          <button
            className="bg-cyan-400 p-2 rounded-md text-white font-bold text-lg"
            onClick={() => {
              settleLoan(loanId, amount);
            }}
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
