import {SideNav} from "./_/SideNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SideNav />

      <main className="flex-1">{children}</main>
    </div>
  );
}
