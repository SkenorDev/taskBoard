type TableProps = {
  name: string;
};

export default function Table({ name }: TableProps) {
  return (
    <div className="mt-8 w-full overflow-x-auto rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">{name}</h2>
      <table className="table-auto text-left">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test case created</td>
            <td>Made button test</td>
            <td>Made sure button appeared and disappered properly on confirmation</td>
          </tr>


        </tbody>
      </table>
    </div>
  );
}