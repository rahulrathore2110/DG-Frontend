import { useParams } from "react-router-dom";
import AllEmi from './AllEmi'
import PendingEmi from './PendingEmi'
import BounceEmi from "./BounceEmi";
import React from "react";
const EMI = () => {
  const { eID } = useParams();
  return (
    <>
      {eID == "All EMI" && <AllEmi/>}
      {eID == "Pending EMI" && <PendingEmi/>}
      {eID == "Bounce EMI" && <BounceEmi/>}
    </>
  );
};

export default EMI;
