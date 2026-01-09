import { Icon } from "@/components/icon";
import { dummyStudies } from "@/data/studies";
import { Check, Eye } from "lucide-react";
import { PageHeader } from "../../_/PageHeader";

export default function Studies() {
  return (
    <div>
      <PageHeader
        title="New Print Jobs"
        subtitle="Record a new barcode print job. All fields marked with * are required"
      />

      <main className="new-print-job-section w-6/12 mx-auto py-16 flex flex-col gap-15">
        <section className="p-10 bg-white rounded-lg border border-gray-300 flex flex-col gap-4">
          <h3 className="text-xl font-bold">Basic Information</h3>

          <div className="grid grid-cols-2 gap-5">
            <div className="study-div flex flex-col gap-2">
              <label htmlFor="study" className="input-label-base">
                Study/Project <span className="text-red-600">*</span>
              </label>

              <select name="study" id="study" className="input-base">
                <option value="all">All Studies</option>

                {dummyStudies.map((study) => (
                  <option key={study.id} value={study.code}>
                    {study.title}
                  </option>
                ))}
              </select>

              <p className="text-xs font-semibold text-gray-400">
                <span className="text-red-800">Create new study</span>(Admin
                only)
              </p>
            </div>

            <div className="job-reference-div flex flex-col gap-2">
              <label htmlFor="job-reference" className="input-label-base">
                Print Job Reference <span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                name="job-reference"
                id="job-reference"
                className="input-base"
                placeholder="user@company.com"
              />

              <p className="text-xs font-semibold text-gray-400">
                Unique identifier for this print run
              </p>
            </div>
          </div>
        </section>

        <section className="p-10 bg-white rounded-lg border border-gray-300 flex flex-col gap-4">
          <h3 className="text-xl font-bold">Barcode Details</h3>

          <div className="grid grid-cols-2 gap-5">
            <div className="starting-barcode-div flex flex-col gap-2">
              <label htmlFor="starting-barcode" className="input-label-base">
                Starting Barcode <span className="text-red-600">*</span>
              </label>

              <input
                type="number"
                name="starting-barcode"
                id="starting-barcode"
                className="input-base"
              />

              <p className="text-xs font-semibold text-gray-400">
                Format: CLIN-YYYY-NNNN
              </p>
            </div>

            <div className="ending-barcode-div flex flex-col gap-2">
              <label htmlFor="ending-barcode" className="input-label-base">
                Ending Barcode <span className="text-red-600">*</span>
              </label>

              <input
                type="number"
                name="ending-barcode"
                id="ending-barcode"
                className="input-base"
              />

              <p className="text-xs font-semibold text-gray-400">
                Format: CLIN-YYYY-NNNN
              </p>
            </div>

            <div className="starting-identifier-div flex flex-col gap-2">
              <label htmlFor="starting-identifier" className="input-label-base">
                Starting Unique Identifier
                <span className="text-red-600">*</span>
              </label>

              <input
                type="number"
                name="starting-identifier"
                id="starting-identifier"
                className="input-base"
              />

              <p className="text-xs font-semibold text-gray-400">
                Format: CLIN-YYYY-NNNN
              </p>
            </div>

            <div className="ending-identifier-div flex flex-col gap-2">
              <label htmlFor="ending-identifier" className="input-label-base">
                Ending Unique Identifier <span className="text-red-600">*</span>
              </label>

              <input
                type="number"
                name="ending-identifier"
                id="ending-identifier"
                className="input-base"
              />

              <p className="text-xs font-semibold text-gray-400">
                Format: CLIN-YYYY-NNNN
              </p>
            </div>

            <div className="quantity-div flex flex-col gap-2">
              <label htmlFor="quantity" className="input-label-base">
                Quantity <span className="text-red-600">*</span>
              </label>

              <input
                type="number"
                name="quantity"
                id="quantity"
                className="input-base"
                placeholder="e.g., 10000"
              />

              <p className="text-xs font-semibold text-gray-400">
                Number of barcodes to print
              </p>
            </div>
          </div>
        </section>

        <section className="p-10 bg-white rounded-lg border border-gray-300 flex flex-col gap-4">
          <h3 className="text-xl font-bold">Print Job Details</h3>

          <div className="grid grid-cols-2 gap-5">
            <div className="print-date-div flex flex-col gap-2">
              <label htmlFor="print-date" className="input-label-base">
                Date Printed
              </label>

              <input
                type="date"
                name="print-date"
                id="print-date"
                className="input-base"
              />

              <p className="text-xs font-semibold text-gray-400">
                Date when barcodes were physically printed
              </p>
            </div>

            <div className="printed-by-div flex flex-col gap-2">
              <label htmlFor="printed-by" className="input-label-base">
                Printed By
              </label>

              <input
                type="name"
                name="printed-by"
                id="printed-by"
                className="input-base"
              />

              <p className="text-xs font-semibold text-gray-400">
                Currently logged-in user
              </p>
            </div>
          </div>

          <div className="notes-div flex flex-col gap-2">
            <label htmlFor="notes" className="input-label-base">
              Notes / Comments
              <span className="text-red-600">*</span>
            </label>

            <textarea name="notes" id="notes" className="input-base" rows={4} />

            <p className="text-xs font-semibold text-gray-400">
              Additional information for audit purposes
            </p>
          </div>
        </section>

        <section className="p-10 bg-blue-100 rounded-lg border-2 border-blue-200 flex flex-col gap-4">
          <h3 className="font-bold text-blue-800 text-xl flex gap-2 items-center">
            <span>
              <Icon icon={Eye} className="w-6 h-6 text-blue-600"></Icon>
            </span>
            Print Run Preview
          </h3>

          <div className="flex justify-between">
            <div className="text-sm">
              <strong className="text-blue-700">Study/Project</strong>
              <p className="uppercase font-light text-blue-800 mt-1">
                study-2024-001
              </p>
              <p className="font-light capitalize text-blue-500">
                Clinical Trial Phase II
              </p>
            </div>

            <div className="text-sm">
              <strong className="text-blue-700">Barcode Range</strong>
              <p className="uppercase font-light text-blue-800 mt-1">
                BCA-A-001000 - BCA-W-023343
              </p>

              <p className="font-light capitalize text-blue-500">
                10000 barcodes total
              </p>
            </div>

            <div className="text-sm">
              <strong className="text-blue-700">Print Details</strong>
              <p className="uppercase font-light text-blue-800 mt-1">
                January 9, 2026
              </p>

              <p className="font-light capitalize text-blue-500">
                Printed by Mawira Njeri
              </p>
            </div>
          </div>
        </section>

        <hr className="text-gray-300" />

        <div className="actions flex justify-end gap-3">
          <button className="border border-gray-600 px-8 h-10 rounded-lg text-gray-600">
            Save as Draft
          </button>

          <button className="bg-red-700 text-white font-bold h-10 px-4 rounded-lg flex items-center gap-1">
            <span>
              <Icon icon={Check} className="w-5 h-5"></Icon>
            </span>
            Record Print Job
          </button>
        </div>
      </main>
    </div>
  );
}
