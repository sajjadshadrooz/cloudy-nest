"use client";

import TableActions from "./tableAction";

type Column = {
  key: string;
  label: string;
};

type Action = {
  label: string;
  onClick: (row: any) => void;
};

type Props = {
  columns: Column[];
  data: any[];
  actions?: Action[];
};

export default function Table({ columns, data, actions = [] }: Props) {
  return (
    <div>
      <table className="min-w-full table-auto text-sm text-left">
        <thead className="bg-background text-lg font-semibold border-b-1 border-neutral-default-3">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2">
                {col.label}
              </th>
            ))}
            {actions.length > 0 && <th className="px-4 py-2 text-center"></th>}
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-background border-b-1 border-neutral-default-3"
            >
              {columns.map((col) =>
                col.key === "id" ? (
                  <td key={col.key} className="p-2">
                    <div className="bg-background text-xs rounded-sm w-8 h-8 flex items-center justify-center font-semibold">
                      {row[col.key]}
                    </div>
                  </td>
                ) : (
                  <td key={col.key} className="px-3 py-2 text-sm">
                    {row[col.key]}
                  </td>
                )
              )}
              {actions.length > 0 && (
                <td className="relative px-3 py-2 text-center">
                  <TableActions
                    actions={actions.map((action) => ({
                      label: action.label,
                      onClick: () => action.onClick(row),
                    }))}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
