import React from 'react'
import { columns } from "../components/ETable";
import BasicTable from "../components/BasicTable";
import { useLoaderData } from "react-router-dom";

const AllEmi = () => {
   const emiData = useLoaderData();
  return (
    <>
      <BasicTable
        data={emiData}
        columns={columns}
        title="All EMIS"
      />
    </>
  );
}

export default AllEmi