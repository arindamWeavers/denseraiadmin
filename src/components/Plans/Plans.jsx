import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import PlanModal from "../Modal/PlanModal";

const Plans = () => {
  const [editPriceModal, setEditPriceModal] = useState(false);

  return (
    <div>
      <div className="bd-second-sec">
        <div className="flex gap-7">
          <div className="w-full mx-4 my-10">
            <div className="flex justify-end"></div>
            <div className="border-[#d1d1d1] border rounded-lg overflow-hidden">
              <h3 className="border-b border-[#ecf5ff] text-2xl font-bold bg-gradient-extreme-light px-[8px] py-[10px] text-center">
                Subscription Plans Table
              </h3>
              <div className="box-table overflow-x-auto">
                <table className="table-auto w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left border-b border-[#dbdbdb] font-semibold text-[14px] p-2">
                        Plan ID
                      </th>
                      <th className="text-left border-b border-[#dbdbdb] font-semibold text-[14px] p-2">
                        Plan Name
                      </th>
                      <th className="text-left border-b border-[#dbdbdb] font-semibold text-[14px] p-2">
                        Plan Amount
                      </th>
                      <th className="text-left border-b border-[#dbdbdb] font-semibold text-[14px] p-2">
                        Plan Status
                      </th>
                      <th className="text-left border-b border-[#dbdbdb] font-semibold text-[14px] p-2">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        PID1
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Starter
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        $ 100
                      </td>
                      <td className="text-left cursor-pointer font-bold border-b border-[#dbdbdb] p-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            checked
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-color-learnmore"></div>
                          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Inactive
                          </span>
                        </label>
                      </td>
                      <td
                        onClick={() => setEditPriceModal(true)}
                        className="text-left cursor-pointer border-b border-[#dbdbdb] p-2"
                      >
                        <AiFillEdit />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        PID2
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Business
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        $ 200
                      </td>
                      <td className="text-left cursor-pointer font-bold border-b border-[#dbdbdb] p-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            checked
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-color-learnmore"></div>
                          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Inactive
                          </span>
                        </label>
                      </td>
                      <td
                        onClick={() => setEditPriceModal(true)}
                        className="text-left cursor-pointer border-b border-[#dbdbdb] p-2"
                      >
                        <AiFillEdit />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        PID3
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Enterprice
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        $ 300
                      </td>
                      <td className="text-left cursor-pointer font-bold border-b border-[#dbdbdb] p-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            checked
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-color-learnmore"></div>
                          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Inactive
                          </span>
                        </label>
                      </td>
                      <td
                        onClick={() => setEditPriceModal(true)}
                        className="text-left cursor-pointer border-b border-[#dbdbdb] p-2"
                      >
                        <AiFillEdit />
                      </td>
                    </tr>
                  </tbody>
                  {editPriceModal && (
                    <PlanModal
                      state={editPriceModal}
                      setState={setEditPriceModal}
                    />
                  )}
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
  );
};

export default Plans;
