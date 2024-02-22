import Sidebar from "./sidebar";
import React from "react";

function RootLayout({ children }) {
  return (
    <div className="flex gap-5 bg-gray-900">
      <Sidebar />
      <main className=" flex-1 py-8 md:p-8  min-h-screen h-screen  overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-sky-500 ">
        {children}
      </main>
    </div>
  );
}

export default RootLayout;
