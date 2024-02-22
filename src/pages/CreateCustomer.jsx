import React from "react";
import { Form } from "react-router-dom";

const CreateCustomer = () => {
  const formFeilds = [
    {
      nameFeild: "Name",
      type: "text",
      name: "name",
    },
    {
      nameFeild: "Email",
      type: "email",
      name: "email",
    },
    {
      nameFeild: "Number",
      type: "number",
      name: "number",
    },
    {
      nameFeild: "Alternate Number",
      type: "number",
      name: "alternateNumber",
    },
    {
      nameFeild: "Address",
      type: "text",
      name: "address",
    },
    {
      nameFeild: "Aadhar",
      type: "number",
      name: "aadhar",
    },
    {
      nameFeild: "Pancard",
      type: "text",
      name: "pancard",
    },
    {
      nameFeild: "Business Name",
      type: "text",
      name: "businessName",
    },
    {
      nameFeild: "Business Address",
      type: "text",
      name: "businessAddress",
    },
    {
      nameFeild: "Monthly Income",
      type: "number",
      name: "monthlyIncome",
    },
  ];
  return (
    <div className="text-white">
      <h1 className="text-center text-4xl m-6 ">Create Customer</h1>

      <Form method="post" className="grid gap-4 p-4 text-white">
        <div className="grid gap-4 py-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {formFeilds.map((feilds) => (
            <label
              className="grid gap-2 font-medium text-md "
              key={feilds.nameFeild}
            >
              {feilds.nameFeild} :
              <input
                type={feilds.type}
                name={feilds.name}
                placeholder={"Enter Your " + feilds.name}
                required
                className="p-1 rounded-md bg-transparent border border-blue-300 hover:border-blue-700 "
              />
            </label>
          ))}
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">
          Create Customer
        </button>
      </Form>
    </div>
  );
};



export default CreateCustomer;
