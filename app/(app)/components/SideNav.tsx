"use client";

import { Icon } from "@/components/icon";
import { Barcode, ChartBar, FolderClosed, Settings, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavBar() {
  const pathname = usePathname();

  const navRoutes = [
    {
      title: "Dashboard",
      route: "/dashboard",
      icon: ChartBar,
    },
    {
      title: "Studies/Projects",
      route: "/studies",
      icon: FolderClosed,
    },
    {
      title: "Print Jobs",
      route: "/printjobs",
      icon: Barcode,
    },
    {
      title: "Users",
      route: "/users",
      icon: Users,
    },
    {
      title: "Settings",
      route: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="bg-white w-60 h-screen flex flex-col">
      <div className="flex items-center gap-2 shadow-sm py-5 px-4">
        <Image
          src="/logo.png"
          alt="Barcode Registry System"
          width={40}
          height={0}
        ></Image>
        <p className="font-bold">Barcode Registry</p>
      </div>

      <nav className="flex flex-col gap-2 px-2 mt-5">
        {navRoutes.map((item) => {
          const isActive = pathname.startsWith(item.route);

          return (
            <Link
              key={item.route}
              href={item.route}
              className={clsx(
                "flex gap-3 p-1.5 rounded-lg",
                isActive ? "text-red-600 bg-red-50" : "text-black"
              )}
            >
              <Icon icon={item.icon} className=""></Icon>
              <p className="text-sm font-semibold">{item.title}</p>
            </Link>
          );
        })}
      </nav>

      <footer className="mt-auto text-center mb-3">
        <h6 className="text-sm text-gray-400">Barcode Registry System</h6>
        <p className="font-semibold text-xs text-gray-400">v1.0.0 1</p>
      </footer>
    </aside>
  );
}
