import { UserRole, UserStatus } from "@/data/users";

type UserFormProps = {
  mode: "create" | "edit";
  onSuccess?: () => void;
};

export function UserForm({ mode, onSuccess }: UserFormProps) {
  async function handleSubmit() {
    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="full-name-div flex flex-col gap-2">
        <label htmlFor="name" className="input-label-base">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="input-base"
          placeholder="Enter full name"
        />
      </div>

      <div className="full-name-div flex flex-col gap-2">
        <label htmlFor="email" className="input-label-base">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input-base"
          placeholder="user@company.com"
        />
        <p className="text-xs  font-semibold text-gray-400">
          This will be used as the username for login
        </p>
      </div>

      <div className="full-name-div flex flex-col gap-2">
        <label htmlFor="status" className="input-label-base">
          User Role <span className="text-red-600">*</span>
        </label>

        <select name="status" id="status" className="input-base">
          <option value="">Select Role</option>

          {Object.values(UserRole).map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <div className="role-tips bg-gray-100 rounded-lg p-3 mt-1">
          <ul className="text-xs text-gray-600">
            <li>
              <strong>Admin:</strong> Full system access including user
              management and system configuration
            </li>

            <li>
              <strong>User:</strong> Can record print runs and view system data
            </li>
          </ul>
        </div>
      </div>

      <div className="full-name-div flex flex-col gap-2">
        <label htmlFor="name" className="input-label-base">
          Account Status <span className="text-red-600">*</span>
        </label>

        <select name="status" id="status" className="input-base">
          <option value="">Select Status</option>

          {Object.values(UserStatus).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <p className="text-xs font-semibold text-gray-400">
          Active users can log in and use the system
        </p>
      </div>

      <div className="full-name-div flex flex-col gap-2">
        <label htmlFor="password" className="input-label-base">
          Temporary Password <span className="text-red-600">*</span>
        </label>

        <input
          type="password"
          name="password"
          id="password"
          className="input-base"
        />

        <p className="text-xs font-semibold text-gray-400">
          Users will be required to change password on first login
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
          {mode === "create" ? "Create user" : "Update User"}
        </button>
      </div>
    </form>
  );
}
