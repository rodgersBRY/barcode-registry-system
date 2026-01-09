type StudyFormProps = {
  mode: "create" | "edit";
  onSuccess?: () => void;
};

export function StudyForm({ mode, onSuccess }: StudyFormProps) {
  async function handleSubmit() {
    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="study-code-div flex flex-col gap-2">
        <label htmlFor="study-code" className="input-label-base">
          Study/Project Code <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="study-code"
          id="study-code"
          className="input-base"
          placeholder="e.g., CLIN-2024-001"
        />

        <p className="text-xs font-semibold text-gray-400">
          Must be unique. Recommended format: PREFIX-YYYY-NNN
        </p>
      </div>

      <div className="project-name-div flex flex-col gap-2">
        <label htmlFor="project-name" className="input-label-base">
          Study/Project Name <span className="text-red-600">*</span>
        </label>

        <input
          type="text"
          name="project-name"
          id="project-name"
          className="input-base"
          placeholder="e.g.. Avian Influenza  - Flu Study"
        />
      </div>

      <div className="description-div flex flex-col gap-2">
        <label htmlFor="name" className="input-label-base">
          Description
        </label>

        <textarea
          name="name"
          id="name"
          className="input-base"
          rows={4}
          placeholder="Enter a detailed description of the study purpose..."
        />

        <p className="text-xs font-semibold text-gray-400">
          Optional. Provide context for future reference
        </p>
      </div>

      <div className="project-pi-div flex flex-col gap-2">
        <label htmlFor="project-pi" className="input-label-base">
          Principal Investigator (PI)/Lead
          <span className="text-red-600">*</span>
        </label>

        <input
          type="name"
          name="project-pi"
          id="project-pi"
          className="input-base"
          placeholder="Enter name"
        />
      </div>

      <div className="flex justify-between gap-5">
        <div className="flex-1 start-date-div flex flex-col gap-2">
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

        <div className="flex-1 end-date-div flex flex-col gap-2">
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
      </div>

      <div className="status-div flex flex-col gap-2">
        <label htmlFor="status" className="input-label-base">
          Status <span className="text-red-600">*</span>
        </label>

        <input type="text" name="status" id="status" className="input-base" />

        <p className="text-xs font-semibold text-gray-400">
          Closed studies cannot have new print jobs added
        </p>
      </div>

      <hr className="text-gray-200 my-5" />

      <div className="actions flex justify-end gap-4">
        <button className="rounded-lg px-3 text-gray-500 border-2 border-gray-400 hover:cursor-pointer">
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg py-2 px-5 bg-red-700 text-white font-semibold hover:cursor-pointer"
        >
          {mode === "create" ? "Create Study/Project" : "Update Study/Project"}
        </button>
      </div>
    </form>
  );
}
