import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Transacrion = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div>
      <div className="bd-second-sec">
        <div className="flex gap-7">
          <div className="w-full sm:my-10 my-6 relative px-4">
            <div className="flex justify-between my-3">
              <div className="leftdatePicker xl:flex justify-between w-full">
                <div className="datepicker sm:flex xl:mr-2">
                  <div className="startdatepicker mr-2 xl:w-auto w-full sm:mb-0 mb-3">
                    <DatePicker
                      selected={startDate}
                      onChange={() => setStartDate(() => new Date())}
                      className="bg-gray-100 p-2 outline-none w-full"
                      placeholderText="Start Date"
                    />
                  </div>
                  <div className="enddatepicker xl:w-auto w-full sm:mb-0 mb-3">
                    <DatePicker
                      selected={endDate}
                      onChange={() => setEndDate(() => new Date())}
                      className="bg-gray-100 p-2 w-full outline-none"
                      placeholderText="End Date"
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2 text-center text-white sm:w-20 bg-color-subtext border-l font-bold sm:ml-2 w-full"
                  >
                    Search
                  </button>
                </div>
                <div className="searchBox xl:mt-0 mt-3">
                  {/* <form> */}
                    <input
                      type="text"
                      name="text"
                      placeholder="search by name or email"
                      value=""
                      onChange=""
                      className="bg-gray-100 p-2 w-3/4 outline-none"
                    />
                    <button
                      type="submit"
                      className="p-2 text-center text-white w-1/4 bg-color-subtext border-l font-bold"
                    >
                      Search
                    </button>
                  {/* </form> */}
                </div>
              </div>
            </div>

            <div className="border-[#d1d1d1] border rounded-lg">
              <h3 className="border-b border-[#ecf5ff] text-2xl font-bold bg-gradient-extreme-light px-[8px] py-[10px] text-center">
                User Transaction Table
              </h3>
              <div className="box-table overflow-x-auto">
                <table className="table-auto w-full text-sm">
                  <thead className="">
                    <tr>
                      <th className="text-left border-b border-[#dbdbdb] font-semibold text-[14px] p-2">
                        Transaction ID
                      </th>
                      <th className="text-left border-b border-[#dbdbdb] font-semibold text-[14px] p-2">
                        <div class="flex items-center">
                          Name
                          <a href="#">
                            <svg
                              class="w-3 h-3 ml-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th className="text-left border-b border-[#dbdbdb] font-semibold text-[14px] p-2">
                        <div class="flex items-center">
                          Email
                          <a href="#">
                            <svg
                              class="w-3 h-3 ml-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th className="text-left border-b border-[#dbdbdb] font-semibold text-[14px] p-2">
                        <div class="flex items-center">
                          Amount
                          <a href="#">
                            <svg
                              class="w-3 h-3 ml-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th className="text-left border-b border-[#dbdbdb] font-semibold text-[14px] p-2">
                        <div class="flex items-center">
                          Date
                          <a href="#">
                            <svg
                              class="w-3 h-3 ml-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        TRANS1
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Kimmy Patterson
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        john@google.com
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        $ 100
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        01/10/2023 15:28:14
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        TRANS2
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Kimmy Patterson
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        john@google.com
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        $ 200
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        01/10/2023 15:28:14
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        TRANS3
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Kimmy Patterson
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        john@google.com
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        $ 300
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        01/10/2023 15:28:14
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
  );
};

export default Transacrion;
