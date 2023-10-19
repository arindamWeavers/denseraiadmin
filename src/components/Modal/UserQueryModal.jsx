import React from "react";

const UserQueryModal = ({ state, setState }) => {
  const handleModalClose = () => {
    setState((state) => false);
  };

  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-white opacity-100" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>

        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="bd-second-sec">
              <div className="flex gap-7">
                <div className="w-full mx-4 my-10">
                  <div className="flex justify-end">
                    <button
                      onClick={handleModalClose}
                      className="font-bold p-2 my-2 bg-color-subtext text-white rounded-lg"
                    >
                      Close
                    </button>
                  </div>
                  <div className="border-[#d1d1d1] border rounded-lg overflow-hidden">
                    <h3 className="border-b border-[#ecf5ff] text-2xl font-bold bg-gradient-extreme-light px-[8px] py-[10px] text-center">
                      User Query Table
                    </h3>
                    <div className="box-table">
                      <table className="table-auto w-full">
                        <thead>
                          <tr>
                            <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">
                              Timestamp
                            </th>
                            <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">
                              Query String
                            </th>
                            <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">
                              Passage Result
                            </th>
                            <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">
                              Final Result
                            </th>
                            <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">
                              Feedback
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              10:23 am Saturday, 14 October 2023
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 1st query
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 1st query
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 1st query
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 1st query
                            </td>
                          </tr>
                          <tr>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              10:23 am Saturday, 14 October 2023
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 2st query
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 2st query
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 2st query
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 2st query
                            </td>
                          </tr>
                          <tr>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              10:23 am Saturday, 14 October 2023
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 3st query
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 3st query
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 3st query
                            </td>
                            <td className="text-left border-b border-[#dbdbdb] p-2">
                              The 3st query
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul className="inline-flex -space-x-px text-sm p-4">
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          Previous
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-current="page"
                          className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserQueryModal;
