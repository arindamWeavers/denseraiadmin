import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// components.
import Modal from "../Modal/Modal";
import UserQueryModal from "../Modal/UserQueryModal";

const User = () => {
  const [modal, setModal] = useState(false);
  const [queryModal, setQueryModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  const addUserModalHandler = () => {
    setModal((state) => !state);
  };

  return (
    <div>
      <div className="bd-second-sec">
        <div className="flex gap-7">
          <div className="w-full sm:my-10 my-6 relative px-4">
            <div className="sm:flex justify-between my-3">
              <div className="leftdatePicker xl:flex justify-between w-full">
                <div className="datepicker sm:flex xl:mr-2">
                  <div className="startdatepicker mr-2 xl:w-auto w-full sm:mb-0 mb-3">
                    <DatePicker
                      selected={startDate}
                      onChange={() => setStartDate(() => new Date())}
                      className="bg-gray-100 p-2 outline-none w-full"
                      placeholderText="End Date"
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
              <div className="Rightbtn sm:ml-4 sm:w-28 sm:inline-block flex justify-end w-full sm:mt-0 mt-3">
                <button
                  onClick={addUserModalHandler}
                  className="font-bold p-2 bg-color-subtext text-white rounded-lg"
                >
                  Add User
                </button>
              </div>
            </div>
            <div className="border-[#d1d1d1] border rounded-lg">
              <h3 className="border-b border-[#ecf5ff] text-2xl font-bold bg-gradient-extreme-light px-[8px] py-[10px] text-center">
                User Table
              </h3>
              <div className="box-table overflow-x-auto">
                <table className="table-auto w-full text-sm">
                  <thead>
                    <tr>
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
                          Query Hits
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
                        Plan
                      </th>
                      <th className="text-left border-b border-[#dbdbdb] font-semibold text-[14px] p-2">
                        <div class="flex items-center">
                          Start Date
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
                          End Date
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
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Kimmy Patterson
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        john@google.com
                      </td>
                      {/* <Link to="/query"> */}
                      <td
                        onClick={() => setQueryModal(true)}
                        className="text-left cursor-pointer font-bold border-b border-[#dbdbdb] p-2"
                      >
                        1
                      </td>
                      {/* </Link> */}
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Starter
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        01/10/2023
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        01/12/2023
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
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
                    </tr>
                    <tr>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Kimmy Patterson
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        john@google.com
                      </td>
                      {/* <Link to="/query"> */}
                      <td
                        onClick={() => setQueryModal(true)}
                        className="text-left cursor-pointer font-bold border-b border-[#dbdbdb] p-2"
                      >
                        2
                      </td>
                      {/* </Link> */}
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Business
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        01/10/2023
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        01/12/2023
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
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
                    </tr>
                    <tr>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Kimmy Patterson
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        john@google.com
                      </td>
                      {/* <Link to="/query"> */}
                      <td
                        onClick={() => setQueryModal(true)}
                        className="text-left cursor-pointer font-bold border-b border-[#dbdbdb] p-2"
                      >
                        3
                      </td>
                      {/* </Link> */}
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        Enterprice
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        01/10/2023
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        01/12/2023
                      </td>
                      <td className="text-left border-b border-[#dbdbdb] p-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-color-learnmore"></div>
                          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Active
                          </span>
                        </label>
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
      {modal ? <Modal state={modal} setState={setModal} /> : null}
      {queryModal ? (
        <UserQueryModal state={queryModal} setState={setQueryModal} />
      ) : null}
    </div>
  );
};

export default User;
