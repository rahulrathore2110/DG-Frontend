import { redirect } from "react-router-dom";

const baseURL = "http://localhost:8088";

export const loadCustomerData = async () => {
  const data = await fetch(`${baseURL}/customer/all`);
  const result = data.json();

  return result;
};

export const loadLoanData = async () => {
  const data = await fetch(`${baseURL}/loan/`);
  const result = data.json();

  return result;
};

export const loadRunningLoanData = async () => {
  const data = await fetch(`${baseURL}/loan/running`);
  const result = data.json();

  return result;
};

export const loadClosedLoanData = async () => {
  const data = await fetch(`${baseURL}/loan/closed`);
  const result = data.json();

  return result;
};

export const loadSettledLoanData = async () => {
  const data = await fetch(`${baseURL}/loan/settled`);
  const result = data.json();

  return result;
};
export const loadApproveLoanData = async () => {
  const data = await fetch(`${baseURL}/loan/approval`);
  const result = data.json();

  return result;
};

export const loadAllEmiData = async () => {
  const data = await fetch(`${baseURL}/emi/allEmi`);
  const result = data.json();

  return result;
};
export const loadAllPaidEmiData = async () => {
  const data = await fetch(`${baseURL}/emi/allPaid`);
  const result = data.json();

  return result;
};
export const loadAllPendingEmiData = async () => {
  const data = await fetch(`${baseURL}/emi/allPending`);
  const result = data.json();

  return result;
};
export const loadAllBounceEmiData = async () => {
  const data = await fetch(`${baseURL}/emi/allBounce`);
  const result = data.json();

  return result;
};
export const loadAllSettledEmiData = async () => {
  const data = await fetch(`${baseURL}/emi/settled`);
  const result = data.json();

  return result;
};
export const loadAllTransactionData = async () => {
  const data = await fetch(`${baseURL}/transaction/all`);
  const result = data.json();

  return result;
};
export const loadAccountDetailsData = async () => {
  const data = await fetch(`${baseURL}/mainAccount/accountDetails`);
  const result = data.json();

  return result;
};

export const activateAccount = () => {
  const requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  fetch(`${baseURL}/mainAccount/active`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

export const paidEmi = (emiId) => {
  const requestOptions = {
    method: "PUT",
    redirect: "follow",
  };

  fetch(`${baseURL}/emi/pay/${emiId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => alert(result));
};

export const approveLoan = (loanId) => {
  const requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  fetch(`${baseURL}/loan/approve/${loanId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => alert(result));
};

export const createLoan = (loanId,amount,tenure) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    principleAmount: amount,
    tenure: tenure,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`${baseURL}/loan/${loanId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => alert(result));
};

export const settleLoan = (loanId, amount) => {
 const requestOptions = {
   method: "PUT",
   redirect: "follow",
 };

 fetch(`${baseURL}/loan/settle/${loanId}/${amount}`, requestOptions)
   .then((response) => response.text())
   .then((result) => alert(result));
};


export const createCustomerData = async (data) => {
  const formData = await data.request.formData();
  const cData = Object.fromEntries(formData);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cData),
  };

  fetch("${baseURL}/customer/", requestOptions)
    .then((response) => response.text())
    .then((result) => alert(result));

  return redirect("/customer/create customer");
};

export const updateCustomerData = async (data) => {
  const formData = await data.request.formData();
  const cData = Object.fromEntries(formData);
  console.log(cData);

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cData),
  };

  fetch(`${baseURL}/customer/?remark=${cData.remark}`, requestOptions)
    .then((response) => response.text())
    .then((result) => alert(result));

  return redirect("/customer/update customer");
};

export const initiateTransactionData = async (data) => {
  const formData = await data.request.formData();
  const mData = Object.fromEntries(formData);

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mData),
  };

  fetch(
    `${baseURL}/mainAccount/${mData.type}?amount=${mData.amount}&particular=${mData.particular}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) =>
      alert(
        "Transaction successfull. Transaction Id is : " + result.transactionId
      )
    );

  return null;
};
