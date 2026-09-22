


import SideBar from "@/components/ui/SideBar";

export default function Home() {
  return (
    <main className="min-h-screen pl-[250px]">
      <SideBar />
      <section className="px-8 py-12">
        <p className="dashboard-eyebrow">QA Tracker</p>
        <h1 className="welcome-text">Welcome back to your dashboard</h1>

      </section>
    </main>
  );
}
