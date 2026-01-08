import NavBar from "./components/SideNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <NavBar />

      <main className="flex-1">{children}</main>
    </div>
  );
}
