

type ConfirmDialogProps = {
  dialog?: string;
};

export default function ConfirmDialog({ dialog = "" }: ConfirmDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 text-center shadow-xl">
        <p className="font-semibold text-slate-900">
          {`Are you sure you want to ${dialog}`}
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button className="rounded-md bg-danger px-4 py-2 text-sm font-medium text-white hover:bg-(--dangerhover) focus:outline-none focus:ring-2 focus:ring-danger/40">
            No
          </button>
          <button className="rounded-md bg-success px-4 py-2 text-sm font-medium text-white hover:bg-(--successhover) focus:outline-none focus:ring-2 focus:ring-success/40">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}