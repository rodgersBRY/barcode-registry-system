"use client";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justfy-center bg-black/40">
      <div className="relative bg-white rounded-lg w-2xl m-auto p-10">
        <div className="form-title flex justify-between mb-10 font-bold text-lg">
          <p>New User</p>

          <button
            onClick={onClose}
            className="hover:cursor-pointer text-xl border border-gray-500 p-2 rounded-full w-10 h-10 flex items-center justify-center"
          >
            x
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
