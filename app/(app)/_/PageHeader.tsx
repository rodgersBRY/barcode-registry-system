import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { Icon } from "../../../components/icon";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="bg-white shadow-sm flex justify-between px-10 py-4">
      <div className="page-title">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm">{subtitle}</p>
      </div>

      <div className="user flex items-center gap-4">
        <div className="user-info">
          <p className="font-semibold">John Smith</p>
          <p className="text-sm text-gray-600">Administrator</p>
        </div>

        <div className="logout-btn">
          <Link href={"/login"}>
            <Icon icon={LogOutIcon} className="text-gray-500 w-6 h-4"></Icon>
          </Link>
        </div>
      </div>
    </header>
  );
}
