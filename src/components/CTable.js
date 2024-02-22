

export const columns = [
  {
    header: "ID",
    accessorKey: "cid",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Number",
    accessorKey: "number",
  },
  {
    header: "Aadhar",
    accessorKey: "aadhar",
  },
  {
    header: "Business Name",
    accessorKey: "businessName",
  },
  {
    header: "Monthly Income",
    accessorKey: "monthlyIncome",
  },
  {
    header: "All Loans",
    accessorKey: "allLoans",
    cell: (el) => el.getValue().length,
    
  },
];
