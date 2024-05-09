export const columns = [
  {
    header: "ACTION",
    accessorKey: "",
    Cell: (props) => (
      props.emiId
    )
  },
  {
    header: "EID",
    accessorKey: "emiId",
  },
  {
    header: "LID",
    accessorKey: "loan.lid",
  },
  {
    header: "Date",
    accessorKey: "emiDate",
  },
  {
    header: "EMI Amount",
    accessorKey: "emiAmount",
  },
  {
    header: "Penalty",
    accessorKey: "emiPenalty",
  },
  {
    header: "Status",
    accessorKey: "emiStatus",
  },
];
