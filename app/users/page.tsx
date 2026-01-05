import Link from "next/link";
import { LogOutIcon, Plus, Pencil } from "lucide-react";
import { dummyUsers } from "@/data/users";
import { Icon } from "@/components/icon";
import { formatDate } from "@/utils/formatDate";

export default function Users() {
  return (
    <>
      <header className="bg-white shadow-sm flex justify-between px-10 py-5">
        <div className="page-title">
          <h1 className="font-bold text-xl">Users</h1>
          <p className="text-sm">Manage system access and user roles</p>
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

      <main className="p-10">
        <div className="user-list-actions flex justify-between items-end gap-4">
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
        </div>

        <div className="users-table py-4">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead className="rounded">
              <tr>
                <th className="table-head-base">Full Name</th>
                <th className="table-head-base">Email Address</th>
                <th className="table-head-base">User Role</th>
                <th className="table-head-base">User Status</th>
                <th className="table-head-base">Created At</th>
                <th className="table-head-base">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {dummyUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition text-sm"
                >
                  <td className="table-data-base">{user.fullName}</td>

                  <td className="table-data-base">{user.username}</td>

                  <td className="table-data-base">
                    <div className="rounded-full text-xs px-3 bg-green-200 text-center text-green-900 font-semibold">
                      {user.role}
                    </div>
                  </td>

                  <td className="table-data-base">
                    <div className="rounded-full text-xs px-3 bg-gray-300 text-center text-gray-900 font-semibold">
                      {user.status}
                    </div>
                  </td>

                  <td className="table-data-base">
                    {formatDate(user.createdAt)}
                  </td>

                  <td className="table-data-base">
                    <div className="flex gap-3">
                      <Icon icon={Pencil} className="text-gray-600 w-4"></Icon>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
