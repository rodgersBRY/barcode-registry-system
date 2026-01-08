import { Icon } from "@/components/icon";
import { Plus } from "lucide-react";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export default function Studies() {
  return (
    <div>
      <PageHeader
        title="Studies / Projects"
        subtitle="Manage and view all studies and their associated barcpde print runs"
      ></PageHeader>

      <main className="user-list-actions flex justify-between items-end gap-4">
        <div className="filter-actions flex gap-5">
          <div className="search">
            <input
              type="text"
              className="input-base"
              placeholder="Search users..."
            />
          </div>

          <div className="filter-roles">
            <select
              name="user-role"
              id="user-role"
              className="input-base w-full appearance-none rounded
    px-4 py-3 pr-10 text-sm
    transition"
            >
              <option value="select role">Select Role</option>
              <option value="manager">Manager</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="filter-status">
            <select
              name="user-status"
              id="user-status"
              className="input-base w-full appearance-none rounded
    px-4 py-3 pr-10 text-sm
    transition"
            >
              <option value="select status">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="create-user">
          <Link href={""}>
            <div className="bg-red-700 flex items-center gap-1 py-2 px-8 rounded text-white">
              <Icon icon={Plus} className="w-6 h-4"></Icon>
              <p>Create User</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
