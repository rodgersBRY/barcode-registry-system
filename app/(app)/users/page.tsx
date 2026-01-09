"use client";

import { Plus, Pencil } from "lucide-react";
import { dummyUsers } from "@/data/users";
import { Icon } from "@/components/icon";
import { formatDate } from "@/utils/formatDate";
import { PaginationWidget } from "../_/PaginationWidget";
import { PageHeader } from "../_/PageHeader";
import { useState } from "react";
import { Modal } from "../_/Modal";
import { UserForm } from "./_/UserForm";

export default function Users() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageHeader
        title="Users"
        subtitle="Manage system access and user roles"
      ></PageHeader>

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
            <button
              onClick={() => setOpen(true)}
              className="hover:cursor-pointer"
            >
              <div className="bg-red-700 flex items-center gap-1 py-2 px-8 rounded text-white">
                <Icon icon={Plus} className="w-6 h-4"></Icon>
                <p>Create User</p>
              </div>
            </button>
          </div>
        </div>

        <div className="users-table py-4 mt-10">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead className="rounded">
              <tr>
                <th className="table-head-base">S/No</th>
                <th className="table-head-base">Full Name</th>
                <th className="table-head-base">Email Address</th>
                <th className="table-head-base">User Role</th>
                <th className="table-head-base">User Status</th>
                <th className="table-head-base">Created At</th>
                <th className="table-head-base">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {dummyUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition text-sm"
                >
                  <td className="table-data-base">
                    <div className="rounded-full w-3 h-3 border border-gray-500 p-3 text-center flex items-center justify-center">
                      <p className="text-sm text-gray-500">{index + 1}</p>
                    </div>
                  </td>

                  <td className="table-data-base">{user.fullName}</td>

                  <td className="table-data-base">{user.username}</td>

                  <td className="table-data-base">
                    <div className="rounded-full text-xs px-3 bg-green-200 text-center text-green-900 font-semibold w-25 capitalize">
                      {user.role}
                    </div>
                  </td>

                  <td className="table-data-base">
                    <div className="rounded-full text-xs px-3 bg-gray-300 text-center text-gray-900 font-semibold w-25 capitalize">
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

        <hr className="my-4 text-gray-300" />

        <PaginationWidget></PaginationWidget>

        {open && (
          <Modal onClose={() => setOpen(false)}>
            <UserForm mode="create" onSuccess={() => setOpen(false)}></UserForm>
          </Modal>
        )}
      </main>
    </>
  );
}
