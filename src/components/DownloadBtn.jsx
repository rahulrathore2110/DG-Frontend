import { IoMdCloudDownload } from "react-icons/io";
import * as XLSX from "xlsx/xlsx.mjs";
import React from "react";

const DownloadBtn = ({ data = [], fileName }) => {
  return (
    <button
      className="download-btn flex gap-4 bg-transparent border-2 p-2 rounded-md  items-center"
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
    >
      <IoMdCloudDownload className="text-2xl" />
      <p className="hidden md:block">Download</p>
    </button>
  );
};

export default DownloadBtn;
