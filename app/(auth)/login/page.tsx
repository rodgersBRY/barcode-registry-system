"use client";

export default function Login() {
  const handleSubmit = function () {
    alert("logging in...");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form w-full flex flex-col gap-3 bg-white px-10 pt-20 pb-14 rounded-xl border border-gray-300 shadow-lg mt-5"
    >
      <div className="email-input flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold text-sm">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input-base"
          placeholder="Enter your email address"
        />
      </div>

      <div className="password-input flex flex-col gap-1">
        <label htmlFor="password" className="font-semibold text-sm">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="input-base"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="bg-gray-300 text-white w-full py-2 font-semibold mt-4 rounded-lg hover:bg-gray-400 hover:cursor-pointer"
      >
        Log In
      </button>
    </form>
  );
}
