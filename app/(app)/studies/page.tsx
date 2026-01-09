"use client";

import { Icon } from "@/components/icon";
import { Eye, Pencil, Plus } from "lucide-react";
import { PageHeader } from "../_/PageHeader";
import { PaginationWidget } from "../_/PaginationWidget";
import { dummyStudies } from "@/data/studies";
import { formatDate } from "@/utils/formatDate";
import { useState } from "react";
import { Modal } from "../_/Modal";
import { StudyForm } from "./_/StudyForm";

export default function Studies() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <PageHeader
        title="Studies / Projects"
        subtitle="Manage and view all studies and their associated barcpde print runs"
      />

      <main className="user-list-actions p-10">
        <div className="flex justify-between items-end gap-4">
          <div className="filter-actions flex gap-5">
            <div className="search">
              <input
                type="text"
                className="input-base"
                placeholder="Search projects..."
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
              className="bg-red-700 flex items-center gap-1 py-2 px-8 rounded text-white hover:cursor-pointer"
            >
              <Icon icon={Plus} className="w-6 h-4"></Icon>
              <p>Create Study/Project</p>
            </button>
          </div>
        </div>

        <div className="users-table py-4 mt-10">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead className="rounded">
              <tr>
                <th className="table-head-base">Study/Project Code</th>
                <th className="table-head-base">Study/Project Title</th>
                <th className="table-head-base">Status</th>
                <th className="table-head-base">Created At</th>
                <th className="table-head-base">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {dummyStudies.map((study) => (
                <tr
                  key={study.id}
                  className="hover:bg-gray-50 transition text-sm"
                >
                  <td className="table-data-base">{study.code}</td>

                  <td className="table-data-base">{study.title}</td>

                  <td className="table-data-base">
                    {study.active ? "Active" : "Closed"}
                  </td>

                  <td className="table-data-base">
                    {formatDate(study.createdAt)}
                  </td>

                  <td className="table-data-base flex gap-3 justify-start">
                    {study.active && (
                      <div className="flex items-center gap-3 text-red-600">
                        <Icon icon={Eye} className="w-4"></Icon> <p>View</p>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Icon icon={Pencil} className="text-gray-600 w-4"></Icon>{" "}
                      <p>Edit</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-4 text-gray-300" />

        <PaginationWidget />
      </main>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <StudyForm mode="create" onSuccess={() => setOpen(false)}></StudyForm>
        </Modal>
      )}
    </div>
  );
}
