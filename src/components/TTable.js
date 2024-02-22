import { DateTime } from "luxon";



export const columns = [
  {
    header: "TID",
    accessorKey: "transactionId",
  },
  {
    header: "Date",
    accessorKey: "transactionDate",
    cell: info => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATETIME_MED)
  },
  {
    header: "Particular",
    accessorKey: "particular",
  },
  {
    header: "Type",
    accessorKey: "transType",
  },
  {
    header: "Debit",
    accessorKey: "debitAmount",
  },
  {
    header: "Credit",
    accessorKey: "creditAmount",
  },
];
