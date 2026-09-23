export type TableRow = {
  type?: string;
  name: string;
  description: string;
};

export type TableField = {
  field: string;
};

type TableProps = {
  name: string;
  data: TableRow[];
  fields?: TableField[];
};

export default function Table({ name, data, fields }: TableProps) {
  const tableFields = fields ?? [
    { field: "Type" },
    { field: "Name" },
    { field: "Description" },
  ];

  return (
    <div className="mt-8 w-full overflow-x-auto rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">{name}</h2>
      <table className="table-auto text-left">
        <thead>
          <tr>
            {tableFields.map(({ field }) => (
              <th key={field}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ type, name, description }) => {
            const values = {
              Type: type ?? "",
              Name: name,
              Description: description,
            };

            return (
              <tr key={`${type ?? ""}-${name}`}>
                {tableFields.map(({ field }) => (
                  <td key={field}>{values[field as keyof typeof values]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}