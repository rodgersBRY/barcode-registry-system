import { Plus, Search } from "lucide-react";
import { PageHeader } from "../_/PageHeader";
import { PaginationWidget } from "../_/PaginationWidget";
import { Icon } from "@/components/icon";
import Link from "next/link";
import { dummyPrintJobs } from "@/data/printjobs";
import { formatDate } from "@/utils/formatDate";
import { dummyStudies } from "@/data/studies";
import { dummyUsers } from "@/data/users";

export default function Studies() {
  return (
    <div>
      <PageHeader
        title="All Print Jobs"
        subtitle="Complete registry of all recorded barcode print jobs"
      />

      <main className="user-list-actions p-10">
        <div className="flex justify-end items-end gap-4">
          <div className="create-user">
            <Link
              href={"/printjobs/new"}
              className="bg-red-700 flex items-center gap-1 py-2 px-8 rounded text-white font-semibold hover:cursor-pointer"
            >
              <Icon icon={Plus} className="w-6 h-4"></Icon>
              <p>Create Print Job</p>
            </Link>
          </div>
        </div>

        <section className="filter-queries mt-10 grid grid-cols-4 gap-5 p-10 bg-white rounded-lg">
          <div className="search-div flex flex-col gap-2">
            <label htmlFor="search" className="input-label-base">
              Search by preference
            </label>

            <div className="search relative w-full max-w-sm">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search by reference..."
                className="input-base w-full"
              />

              <Icon
                icon={Search}
                className="w-5 h-5 text-gray-400 absolute top-1/2 right-3 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="study-div flex flex-col gap-2">
            <label htmlFor="study" className="input-label-base">
              Study/Project
            </label>

            <select name="study" id="study" className="input-base">
              <option value="all">All Studies</option>

              {dummyStudies.map((study) => (
                <option key={study.id} value={study.code}>
                  {study.title}
                </option>
              ))}
            </select>
          </div>

          <div className="series-div flex flex-col gap-2">
            <label htmlFor="series" className="input-label-base">
              Barcode Series
            </label>

            <select name="series" id="series" className="input-base">
              <option value="all">All Series</option>

              {dummyStudies.map((study) => (
                <option key={study.id} value={study.code}>
                  {study.title}
                </option>
              ))}
            </select>
          </div>

          <div className="users-div flex flex-col gap-2">
            <label htmlFor="users" className="input-label-base">
              Printed By
            </label>

            <select name="users" id="users" className="input-base">
              <option value="all">All Users</option>

              {dummyUsers.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.fullName}
                </option>
              ))}
            </select>
          </div>

          <div className="start-date-div flex flex-col gap-2">
            <label htmlFor="start-date" className="input-label-base">
              Start Date
            </label>

            <input
              type="date"
              name="start-date"
              id="start-date"
              className="input-base"
            />
          </div>

          <div className="end-date-div flex flex-col gap-2">
            <label htmlFor="end-date" className="input-label-base">
              End Date
            </label>

            <input
              type="date"
              name="end-date"
              id="end-date"
              className="input-base"
            />
          </div>

          <div className="filter-actions flex gap-3 items-end">
            <button className="bg-red-700 text-white font-bold h-10 px-8 rounded-lg">
              Apply Filters
            </button>

            <button className="border border-gray-600 px-8 h-10 rounded-lg text-gray-600">
              Reset
            </button>
          </div>
        </section>

        <div className="users-table py-4 mt-10">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead className="rounded">
              <tr>
                <th className="table-head-base">Print Job Reference</th>
                <th className="table-head-base">Study/Project</th>
                <th className="table-head-base">Barcode Series</th>
                <th className="table-head-base">Start Barcode</th>
                <th className="table-head-base">End Barcode</th>
                <th className="table-head-base">Quantity</th>
                <th className="table-head-base">Printed By</th>
                <th className="table-head-base">Date Printed</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {dummyPrintJobs.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-gray-50 transition text-sm"
                >
                  <td className="table-data-base">{job.jobReference}</td>
                  <td className="table-data-base">{job.studyCode}</td>
                  <td className="table-data-base">{job.barcodeSeries}</td>
                  <td className="table-data-base">{job.startBarcode}</td>
                  <td className="table-data-base">{job.endBarcode}</td>
                  <td className="table-data-base">{job.quantity}</td>
                  <td className="table-data-base">{job.printedBy}</td>
                  <td className="table-data-base">
                    {formatDate(job.dateRecorded)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-4 text-gray-300" />

        <PaginationWidget />
      </main>
    </div>
  );
}
