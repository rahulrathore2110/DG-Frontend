import React from 'react'

const PayEmiBtn = () => {
    const [emiId, setEmiId] = useState("");
  return (
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
  );
}

export default PayEmiBtn