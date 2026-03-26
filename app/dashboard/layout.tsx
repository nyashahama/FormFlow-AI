import "./dashboard.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app">
      <Topbar />
      <Sidebar />
      <main className="main">{children}</main>
    </div>
  );
}
