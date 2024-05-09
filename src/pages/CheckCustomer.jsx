import React, { useState } from "react";
import "./pages.css";
import { Link } from "react-router-dom";

const CheckCustomer = () => {
  const [customer, setCustomer] = useState({ key: "val" });
  const [reqType, setReqType] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChangeType = (e) => {
    setReqType(e.target.value);
  };

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleLocalStroge = () => {
    localStorage.setItem("customer", JSON.stringify(customer.cid));
  };

  const submitBtn = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `http://localhost:8088/customer/${reqType}/${inputValue}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setCustomer(result))
      .catch((error) => console.error(error));
  };

  return (
    <div className="text-white grid gap-4 customerTable">
      <h1>Find Customer</h1>
      {console.log(customer.customerId)}

      <form className="flex gap-2">
        <select
          name="findCustomer"
          onChange={handleChangeType}
          className=" w-52"
        >
          <option>Select Search Type</option>
          <option value="aadhar">Aadhar</option>
          <option value="number">Number</option>
          <option value="customerId">Customer ID</option>
          <option value="pancard">Pancard</option>
        </select>
        <input type="text" onChange={handleChangeValue} />
      </form>
      <button onClick={submitBtn}>Submit</button>

      <table className="w-full ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Aadhar</th>
            <th>Pancard</th>
            <th>Loans</th>
            <th>Income</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(customer).length > 3 ? (
            <tr>
              <td>{customer.name}</td>
              <td>{customer.number}</td>
              <td>{customer.aadhar}</td>
              <td>{customer.pancard}</td>
              <td>{customer.allLoans.length}</td>
              <td>{customer.monthlyIncome}</td>
              <td>
                <Link to="/loans/createLoan" onClick={handleLocalStroge}>
                  Create Loan
                </Link>
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="6">
                {customer.key ? "Search Customer" : customer.message}
              </td>
              <td className="text-center" colSpan="6">
                {customer.key ? (
                  "-"
                ) : (
                  <Link to="/customer/create customer">Create Customer</Link>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CheckCustomer;
