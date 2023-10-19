import React from "react";

const ChangePassword = () => {
  return (
    <div>
      <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center mb-7">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Change password
              </h1>
            </div>

            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label for="oldpassword" className="block text-sm font-bold ml-1 mb-2 dark:text-white" > Old Password </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="oldpassword"
                        name="oldpassword"
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        required
                        aria-describedby="oldpassworderror"
                      />
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="oldpassworderror"> Please include a valid old password</p>
                  </div>

                  <div>
                    <label for="newpassword" className="block text-sm font-bold ml-1 mb-2 dark:text-white" > New Password </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="newpassword"
                        name="newpassword"
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        required
                        aria-describedby="newpassworderror"
                      />
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="newpassworderror"> Please include a valid new password</p>
                  </div>

                  <div>
                    <label for="changepassword" className="block text-sm font-bold ml-1 mb-2 dark:text-white" > Change Password </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="changepassword"
                        name="changepassword"
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-800 text-white hover:purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChangePassword;
