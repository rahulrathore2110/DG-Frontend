import React from 'react'

import { columns } from "../components/TTable";
import BasicTable from "../components/BasicTable";
import { useLoaderData } from "react-router-dom";

const Transaction = () => {
  const transData = useLoaderData()
  return (
    <>
      <BasicTable data={transData} columns={columns} title="All Transactions" />
    </>
  );
}

export default Transaction