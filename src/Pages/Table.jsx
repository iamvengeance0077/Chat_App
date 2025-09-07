import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DATA from "../Components/MOCK_DATA.json";
import { useState } from "react";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "first_name",
    header: "First name",
  },
  {
    accessorKey: "last_name",
    header: "Last name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "ip_address",
    header: "IP address",
  },
];
const Table = () => {
  const [data, setData] = useState(DATA);
  const [sorting,setSorting]=useState([]);
  const [filtering,setFiltering]=useState("");


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state:{
      sorting,
      globalFilter:filtering
    },
    onSortingChange:setSorting,
    onGlobalFilterChange:setFiltering,
    getSortedRowModel:getSortedRowModel(),
    getFilteredRowModel:getFilteredRowModel(),

  });
  console.log(table.getHeaderGroups());
  return (
    <div className="bg-white text-black h-screen w-full flex justify-center ">
      <input type="text" placeholder="Search"
      onChange={(e)=>setFiltering(e.target.value)}
      value={filtering} />
      <table className="w-[50%] border-2 border-blue-500">
        <thead>
          {table.getHeaderGroups().map((headergroup) => {
            return (
              <tr >
                {headergroup.headers.map((header) => {
                  return (
                    <th className="border border-red-500"
                     onClick={header.column.getToggleSortingHandler()}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc:"->",
                        desc:"<-"
                      }[header.column.getIsSorted()] ?? null }
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td className="border border-green-500">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
            <div style={{ marginTop: "10px" }}>
  <button
    onClick={() => table.setPageIndex(0)}
    disabled={!table.getCanPreviousPage()}
  >
    {"<<"} First
  </button>
  <button
    onClick={() => table.previousPage()}
    disabled={!table.getCanPreviousPage()}
  >
    {"<"} Prev
  </button>
  <button
    onClick={() => table.nextPage()}
    disabled={!table.getCanNextPage()}
  >
    Next {">"}
  </button>
  <button
    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
    disabled={!table.getCanNextPage()}
  >
    Last {">>"}
  </button>

  <span style={{ marginLeft: "10px" }}>
    Page{" "}
    <strong>
      {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
    </strong>{" "}
  </span>

  <span style={{ marginLeft: "10px" }}>
    | Go to page:{" "}
    <input
      type="number"
      defaultValue={table.getState().pagination.pageIndex + 1}
      onChange={(e) => {
        const page = e.target.value ? Number(e.target.value) - 1 : 0;
        table.setPageIndex(page);
      }}
      style={{ width: "50px" }}
    />
  </span>

  <select
    value={table.getState().pagination.pageSize}
    onChange={(e) => {
      table.setPageSize(Number(e.target.value));
    }}
    style={{ marginLeft: "10px" }}
  >
    {[2, 3, 5].map((pageSize) => (
      <option key={pageSize} value={pageSize}>
        Show {pageSize}
      </option>
    ))}
  </select>
</div>
    </div>
  );
};

export default Table;
