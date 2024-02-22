import React, { useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import BasicTable from "../components/BasicTable";
import { columns } from "../components/CTable";

const AllCustomer = () => {
  const userData = useLoaderData();

  const cdata = useMemo(() => userData, []);
  return (
    <>
      <BasicTable data={userData} columns={columns} title="All Customers" />
    </>
  );
};

export default AllCustomer;
