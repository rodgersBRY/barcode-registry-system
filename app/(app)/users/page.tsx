"use client";

import { Plus, Pencil, Search } from "lucide-react";
import { dummyUsers, UserRole, UserStatus } from "@/data/users";
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
        <div className="user-list-actions flex justify-end items-end gap-4">
          <div className="create-user">
            <button
              onClick={() => setOpen(true)}
              className="hover:cursor-pointer"
            >
              <div className="bg-red-700 flex items-center gap-1 py-2 px-8 rounded text-white  font-bold">
                <Icon icon={Plus} className="w-6 h-4"></Icon>
                <p>Create User</p>
              </div>
            </button>
          </div>
        </div>

        <section className="filter-queries mt-10 grid grid-cols-4 gap-5 p-10 bg-white rounded-lg">
          <div className="search-div flex flex-col gap-2">
            <label htmlFor="search" className="input-label-base">
              Search by Project Code/Title
            </label>

            <div className="search relative w-full">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search by project code or project title..."
                className="input-base w-full"
              />

              <Icon
                icon={Search}
                className="w-5 h-5 text-gray-400 absolute top-1/2 right-3 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="role-div flex flex-col gap-2">
            <label htmlFor="role" className="input-label-base">
              Role
            </label>

            <select name="role" id="role" className="input-base">
              <option value="all">All Roles</option>

              {Object.values(UserRole)
                .filter((role) => role != UserRole.manager)
                .map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
            </select>
          </div>

          <div className="status-div flex flex-col gap-2">
            <label htmlFor="status" className="input-label-base">
              Status
            </label>

            <select name="status" id="status" className="input-base">
              <option value="all">All Status</option>

              {Object.values(UserStatus)
                .filter((status) => status != UserStatus.pending)
                .map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
            </select>
          </div>

          <div className="filter-actions flex gap-3 items-end">
            <button className="bg-red-700 text-white font-bold py-1.5 px-8 rounded">
              Apply Filters
            </button>

            <button className="border border-gray-600 px-8 py-1.5 rounded text-gray-600">
              Reset
            </button>
          </div>
        </section>

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
