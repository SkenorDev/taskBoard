


import SideBar from "@/components/ui/SideBar";
import TopBar from "@/components/ui/TopBar";

export default function Home() {
  return (
    <main className="min-h-screen pl-64">
      <TopBar name="Home" />
      <SideBar />
      <section className="px-8 py-12">
        <p className="dashboard-eyebrow">QA Tracker</p>
        <h1 className="welcome-text">Welcome back to your dashboard</h1>

      </section>
    </main>
  );
}
