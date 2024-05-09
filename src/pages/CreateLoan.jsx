import React, { useState } from "react";
import { createLoan } from "../components/ApiCalls";

const CreateLoan = () => {
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const cid = JSON.parse(localStorage.getItem("customer"));
  console.log(cid)

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleChangeTenure = (event) => {
    setTenure(event.target.value);
  };

  return (
    <div>
      <div className="shadow-lg max-w-[37rem]  grid gap-4 text-center p-4 bg-transparent text-white ">
        <h1 className="text-2xl text-white">Create Loan</h1>
        <hr className="w-52 m-auto border-2 bg-transparent  border-cyan-500 " />

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
            createLoan(cid, amount, tenure);
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateLoan;
