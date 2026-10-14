import React from "react";

export interface ComparisonTableRow {
  feature: string;
  values: (React.ReactNode | string)[];
}

export interface ComparisonTableProps {
  caption: string;
  headers: string[];
  rows: ComparisonTableRow[];
  className?: string;
}

export default function ComparisonTable({
  caption,
  headers,
  rows,
  className = "",
}: ComparisonTableProps) {
  return (
    <div className={`w-full overflow-x-auto my-8 rounded-2xl border border-slate-200 shadow-sm bg-white ${className}`}>
      <table className="w-full text-left border-collapse text-xs sm:text-sm">
        <caption className="p-4 text-xs font-bold text-slate-500 bg-slate-50 border-b border-slate-200 text-left">
          {caption}
        </caption>
        <thead>
          <tr className="bg-[#0e263f] text-white">
            {headers.map((header, idx) => (
              <th
                key={idx}
                scope="col"
                className={`py-3.5 px-4 font-extrabold tracking-wide uppercase text-[11px] sm:text-xs ${
                  idx === 0
                    ? "sticky left-0 bg-[#0e263f] z-10 min-w-[160px] sm:min-w-[200px]"
                    : "min-w-[130px] sm:min-w-[160px]"
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 font-medium">
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`hover:bg-slate-50 transition-colors ${
                rowIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
              }`}
            >
              {/* First column: row header with sticky position */}
              <th
                scope="row"
                className={`py-3.5 px-4 font-bold text-[#0e263f] sticky left-0 z-10 border-r border-slate-200/80 shadow-xs ${
                  rowIdx % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                {row.feature}
              </th>

              {/* Data Cells */}
              {row.values.map((val, colIdx) => (
                <td
                  key={colIdx}
                  className="py-3.5 px-4 text-slate-700 leading-normal"
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
