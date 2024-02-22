import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Settings = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl mb-8 underline underline-offset-8 ">
        STILL IN PROGRESS
      </h1>
      <ul className="grid gap-4 tracking-wider">
        <li className="flex gap-6 items-center">
          <FaRegArrowAltCircleRight className="text-2xl" />
          Logout Button
        </li>
        <li className="flex gap-6 items-center">
          <FaRegArrowAltCircleRight className="text-2xl" />
          Show and Hide DashBoard Functions
        </li>
        <li className="flex gap-6 items-center">
          <FaRegArrowAltCircleRight className="text-2xl" />
          Show and Hide Main Account Cards
        </li>
        <li className="flex gap-6 items-center">
          <FaRegArrowAltCircleRight className="text-2xl" />
          Change Password
        </li>
        <li className="flex gap-6 items-center">
          <FaRegArrowAltCircleRight className="text-2xl" />
          Theme Change for 5 colors
        </li>
        <li className="flex gap-6 items-center">
          <FaRegArrowAltCircleRight className="text-2xl" />
          User Roles and responsiblity
        </li>
        <li className="flex gap-6 items-center">
          <FaRegArrowAltCircleRight className="text-2xl" />
          Hide submenu for users Otherthan Admin ( Protected Routes )
        </li>
        <li className="flex gap-6 items-center">
          <FaRegArrowAltCircleRight className="text-2xl" />
          Spring Security Implemantation (JWT)
        </li>
      </ul>
    </div>
  );
};

export default Settings;
