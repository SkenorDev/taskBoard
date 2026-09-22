


import SideBar from "@/components/ui/SideBar";

export default function Home() {
  return (
    <main className="min-h-screen pl-[250px]">
      <SideBar />
      <header className="flex h-16 items-center border-b border-slate-200 bg-white px-6">
        <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
      </header>
      <section className="p-6">
        <p className="text-slate-500">Welcome to your QA tracker.</p>
      </section>
    </main>
  );
}
