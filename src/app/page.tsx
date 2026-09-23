


import SideBar from "@/components/ui/SideBar";
import TopBar from "@/components/ui/TopBar";
import DataDisplay from "@/components/ui/DataDisplay";
import Table from "@/components/ui/Table";

export default function Home() {
  return (
    <main className="min-h-screen pl-64">
      <TopBar name="Home" />
       
      <SideBar />
      <section className="px-8 py-12">
        <p className="dashboard-eyebrow">QA Tracker</p>
        <h1 className="welcome-text">Welcome back to your dashboard</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 place-items-center">
          <DataDisplay name="Project 1" />
          <DataDisplay name="Project 2" />
          <DataDisplay name="Project 3" />
          <DataDisplay name="Project 4" />
        </div>
        <Table name = "recent activity"/>
      </section>
    </main>
  );
}
