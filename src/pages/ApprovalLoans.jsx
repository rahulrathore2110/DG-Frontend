import React from 'react'
import { columns } from "../components/LTable";
import BasicTable from "../components/BasicTable";
import { useLoaderData } from "react-router-dom";

const ApprovalLoans = () => {
  const loanData = useLoaderData();
  return (
    <>
      <BasicTable data={loanData} columns={columns} title="All Approval Loans" />
    </>
  );
}

export default ApprovalLoans;