import React from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { GiReceiveMoney, GiPayMoney, GiProfit } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoReceipt, IoRefreshCircleSharp } from "react-icons/io5";
import { Form, Link, NavLink, useLoaderData } from "react-router-dom";
import { activateAccount } from "../components/ApiCalls";
const MainAccount = () => {
  const accountData = useLoaderData();
  return (
    <>
      {Object.keys(accountData).length < 7 ? (
        <Link to="/">
          <button
            className="bg-cyan-400 m-4 text-white p-4 rounded-md shadow-lg shadow-slate-700/70 tracking-wider font-medium"
            onClick={activateAccount}
          >
            Activate Account
          </button>
        </Link>
      ) : (
        <div className="py-6 px-2 md:p-6">
          <p className="text-red-600">
            *Click on Refresh button to load Updated data.
          </p>

          <Link to="/mainAccount">
            <button className="bg-cyan-400 m-4 text-white px-4  py-2 rounded-md shadow-lg shadow-slate-700/70 tracking-wider font-medium flex items-center gap-4">
              Refresh
              <IoRefreshCircleSharp className="text-3xl" />
            </button>
          </Link>
          <div className=" flex items-center flex-wrap gap-6">
            <div>
              <div className="grid gap-4 bg-sky-500 max-w-52 text-white p-4 rounded-md shadow-lg shadow-slate-700/70 tracking-wider">
                <h1>Main Account Balance</h1>
                <div className="flex items-center justify-between ">
                  <MdOutlineAccountBalanceWallet className="text-4xl" />
                  <h2 className="bg-white text-blue-800 px-2 py-1 rounded-tl-lg rounded-br-lg  text-xl font-medium">
                    {accountData.mainAccount}
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-4 bg-violet-500 max-w-52 text-white p-4 rounded-md shadow-lg shadow-slate-700/70 tracking-wider">
                <h1>Capital Account Balance</h1>
                <div className="flex items-center justify-between ">
                  <GiReceiveMoney className="text-4xl" />
                  <h2 className="bg-white text-blue-800 px-2 py-1 rounded-tl-lg rounded-br-lg  text-xl font-medium">
                    {accountData.capital}
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-4 bg-rose-900 max-w-52 text-white p-4 rounded-md shadow-lg shadow-slate-700/70 tracking-wider">
                <h1>Drawing Account Balance</h1>
                <div className="flex items-center justify-between  ">
                  <GiPayMoney className="text-4xl" />
                  <h2 className="bg-white text-blue-800 px-2 py-1 rounded-tl-lg rounded-br-lg  text-xl font-medium">
                    {accountData.drawing}
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-4 bg-blue-500 max-w-52 text-white p-4 rounded-md shadow-lg shadow-slate-700/70 tracking-wider">
                <h1>Payment Account Balance</h1>
                <div className="flex items-center justify-between ">
                  <RiSecurePaymentFill className="text-4xl" />
                  <h2 className="bg-white text-blue-800 px-2 py-1 rounded-tl-lg rounded-br-lg  text-xl font-medium">
                    {accountData.payment}
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-4 bg-orange-500 max-w-52 text-white p-4 rounded-md shadow-lg shadow-slate-700/70 tracking-wider">
                <h1>Receipt Account Balance</h1>
                <div className="flex items-center justify-between">
                  <IoReceipt className="text-4xl" />
                  <h2 className="bg-white text-blue-800 px-2 py-1 rounded-tl-lg rounded-br-lg  text-xl font-medium">
                    {accountData.receipts}
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-4 bg-green-500 max-w-52 text-white p-4 rounded-md shadow-lg shadow-slate-700/70 tracking-wider">
                <h1>P & L Account Balance</h1>
                <div className="flex items-center justify-between ">
                  <GiProfit className="text-4xl" />
                  <h2 className="bg-white text-blue-800 px-2 py-1 rounded-tl-lg rounded-br-lg  text-xl font-medium">
                    {accountData.profitLoss}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <Form
            method="post"
            className="mx-auto mt-12 p-6  grid shadow-lg shadow-slate-700/70 bg-transparent border-2 text-white max-w-md rounded-lg tracking-wider"
          >
            <h1 className="text-center mb-6 text-2xl">
              Initiate Your Transaction
            </h1>

            <div className="grid gap-4">
              <label className="grid gap-2 font-medium ">
                Transaction Type :
                <select
                  name="type"
                  id="type"
                  placeholder="Choose Your Transaction Type"
                  className="p-2 border-b-2 border-l-2 
                  bg-gray-900 border-r-2 focus:outline-none rounded-md"
                >
                  <option value="" disabled selected >
                    Select your option
                  </option>
                  <option value="capital">Capital</option>
                  <option value="drawing">Drawing</option>
                  <option value="payment">Payment</option>
                  <option value="receipt">Receipt</option>
                </select>
              </label>
              <label className="grid gap-2 font-medium">
                Amount :
                <input
                  type="Number"
                  name="amount"
                  id="amount"
                  placeholder="Enter Your Amount"
                  className="p-2 border-b-2 bg-transparent border-l-2 border-r-2 focus:outline-none rounded-md"
                />
              </label>
              <label className="grid gap-2 font-medium">
                particular :
                <input
                  type="text"
                  name="particular"
                  id="particular"
                  placeholder="Enter Your Remarks"
                  className="p-2 border-b-2 bg-transparent border-l-2 border-r-2 focus:outline-none rounded-md"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 bg-cyan-400 p-2 text-white rounded-md font-medium"
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </>
  );
};

export default MainAccount;
