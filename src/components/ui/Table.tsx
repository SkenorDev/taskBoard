export type TableRow = {
  type?: string;
  name: string;
  description: string;
};

export type TableField = {
  field: keyof TableRow;
  label: string;
};

type TableProps = {
  name: string;
  data: TableRow[];
  fields?: TableField[];
};

export default function Table({ name, data, fields }: TableProps) {
  const tableFields = fields ?? [
    { field: "type", label: "Type" },
    { field: "name", label: "Name" },
    { field: "description", label: "Description" },
  ];

  return (
    <div className="mt-8 w-full overflow-x-auto rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">{name}</h2>
      <table className="table-auto text-left">
        <thead>
          <tr>
            {tableFields.map(({ field, label }) => (
              <th key={field}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={`${row.type ?? ""}-${row.name}`}>
              {tableFields.map(({ field }) => (
                <td key={field}>{row[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}