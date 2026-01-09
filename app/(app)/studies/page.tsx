"use client";

import { Icon } from "@/components/icon";
import { Eye, Pencil, Plus, Search } from "lucide-react";
import { PageHeader } from "../_/PageHeader";
import { PaginationWidget } from "../_/PaginationWidget";
import { dummyStudies } from "@/data/studies";
import { formatDate } from "@/utils/formatDate";
import { useState } from "react";
import { Modal } from "../_/Modal";
import { StudyForm } from "./_/StudyForm";
import { UserStatus } from "@/data/users";

export default function Studies() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <PageHeader
        title="Studies / Projects"
        subtitle="Manage and view all studies and their associated barcpde print runs"
      />

      <main className="user-list-actions p-10">
        <div className="flex justify-end items-end gap-4">
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

        <section className="filter-queries mt-10 grid grid-cols-3 gap-5 p-10 bg-white rounded-lg">
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

          <div className="status-div flex flex-col gap-2">
            <label htmlFor="status" className="input-label-base">
              Status
            </label>

            <select name="status" id="status" className="input-base">
              <option value="all">All Status</option>

              {Object.values(UserStatus).map((status) => (
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
