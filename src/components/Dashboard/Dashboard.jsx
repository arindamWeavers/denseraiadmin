import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaUsers } from "react-icons/fa"

const DashboardComponent = () => {
  const { isLoading, userCount, diseaseCount, templateCount, users, diseases } =
    useSelector((state) => state.dashboardReducer);
  return (
    <div className="dashboard-main-sec md:px-[30px] px-4 py-[20px]">
      <div className="bd-frst-box mb-[30px]">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          <Link
            to="/users"
            className="flex items-center p-5 bg-white border border-[#d1d1d1] rounded-lg w-full"
          >
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-[#e3effd] rounded-full mr-6">
              <FaUsers className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-2xl font-bold">10</span>
              <span className="block text-gray-500">Users</span>
            </div>
          </Link>

          <Link
            to="/transactions"
            className="flex items-center p-5 bg-white border-[#d1d1d1] border rounded-lg w-full"
          >
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-[#e3effd] rounded-full mr-6">
              <MdOutlineAttachMoney className="h-8 w-8" />
            </div>
            <div>
              <span className="block text-2xl font-bold">600</span>
              <span className="block text-gray-500">Transacrions</span>
            </div>
          </Link>

          {/* <div className="flex items-center p-8 bg-white border-[#d1d1d1] border rounded-lg w-4/12">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-[#e3effd] rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">{templateCount}</span>
              <span className="block text-gray-500">Form Template</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className="bd-second-sec">
          <div className="flex gap-7">
            <div className="w-8/12">
              <div className="border-[#d1d1d1] border rounded-lg overflow-hidden">
                <h3 className="border-b border-[#ecf5ff] font-bold bg-[#ecf5ff] px-[8px] py-[10px]">
                  User Table
                </h3>
                <div className="box-table">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">
                          Name
                        </th>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">
                          Email
                        </th>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">
                          Role
                        </th>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">
                          Edit
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {users?.length !== 0 ? (
                        users.map((item) => {
                          return (
                            <tr>
                              <td className="text-left border-b border-[#dbdbdb] p-2">
                                {item.fullname}
                              </td>
                              <td className="text-left border-b border-[#dbdbdb] p-2">
                                {item.email}
                              </td>
                              <td className="text-left border-b border-[#dbdbdb] p-2">
                                {item.role}
                              </td>
                              <td className="text-left border-b border-[#dbdbdb] p-2">
                                <a href="">
                                  <GrEdit />
                                </a>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <Loader />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="border-[#d1d1d1] border rounded-lg overflow-hidden">
                <h3 className="border-b border-[#ecf5ff] font-bold bg-[#ecf5ff] px-[8px] py-[10px]">
                  Disease Table
                </h3>
                <div className="box-table-two">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">
                          Disease Name
                        </th>
                        <th className="text-left border-b border-[#dbdbdb] font-semibold text-[16px] p-2">
                          DiseaseID
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {diseases?.length !== 0 &&
                        diseases.map((item) => {
                          return (
                            <tr>
                              <td className="text-left border-b border-[#dbdbdb] p-2">
                                {item.diseaseName}
                              </td>
                              <td className="text-left border-b border-[#dbdbdb] p-2">
                                {item.diseaseId}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default DashboardComponent;
