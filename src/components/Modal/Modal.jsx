import React from "react";

const Modal = ({ state, setState }) => {
  const handleModalClose = () => {
    setState((state) => false);
  };

  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <label className="font-medium text-gray-800">Name</label>
            <input
              type="email"
              className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
            />
            <label className="font-medium text-gray-800">Email</label>
            <input
              type="text"
              className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
            />
          </div>
          <div className="bg-gray-200 px-4 py-3 text-right">
            <button
              type="button"
              className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
              onClick={handleModalClose}
            >
              <i className="fas fa-times"></i> Cancel
            </button>
            <button
              type="button"
              className="py-2 px-4 bg-color-learnmore text-white rounded hover:bg-color-subtext mr-2"
            >
              <i className="fas fa-plus"></i> Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
