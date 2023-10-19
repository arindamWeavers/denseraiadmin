import { GrView } from "react-icons/gr";
import { resetPasswordSchema } from "../schema/auth.schema";
import { resetPassword } from "../redux/reducers/auth.slice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const initialValues = {
    otp: "",
    password: "",
    confirmPassword: "",
  };
  const handleTogglePassword = () => {
    console.log("Hi");
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: resetPasswordSchema,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: async (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);

        const value = await dispatch(
          resetPassword({
            otp: values.otp,
            email: location.state.email,
            password: values.password,
          })
        );
        console.log(value, "value");
        if (value.type === "admin/reset-password/fulfilled") {
          navigate("/login");
        } else {
          return;
        }
        action.resetForm();
      },
    });
  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/login");
    } else {
      return;
    }
  }, []);
  return (
    <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
      <div className="bg-white shadow-xl rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
        <div className="p-6 sm:p-8 lg:p-16 space-y-8 border-t-4 border-color-learnmore">
          <h2 className="text-[1.2rem] md:text-3xl font-bold text-gray-900 text-center">
            Reset Password
          </h2>
          <p className="text-[#797979] text-center mb-5 text-">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form className="mt-4 md:mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                for="otp"
                className="text-sm text-[#868686] block mb-2 font-medium"
              >
                Your OTP
              </label>
              <input
                type="text"
                name="otp"
                id="otp"
                className="bg-[#fff] border border-[#d5d5d5] text-[#000] sm:text-sm focus:ring-[#7380ec] focus:border-[#7380ec] block w-full p-2.5 rounded-[7px]"
                placeholder="123456"
                value={values.otp}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.otp && touched.otp ? (
                <p className="text-[#FF0000] text-sm">{`*${errors.otp}`}</p>
              ) : null}
            </div>
            <div className="signinPasswordn mt-4">
              <label
                for="password"
                className="text-sm font-medium text-[#868686] block mb-2"
              >
                New Password
              </label>
              <div className="flex border border-gray-300 rounded-lg relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="newpassword"
                  name="password"
                  placeholder="Enter your password"
                  className="bg-[#fff] text-[#000] sm:text-sm focus:ring-[#7380ec] focus:border-[#7380ec] block w-full p-2.5 rounded-[7px] pr-[35px]"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <button
                  type="button"
                  className="view-password-button px-2 absolute right-0 top-3"
                  onClick={handleTogglePassword}
                >
                  <GrView />
                </button>
              </div>
              {errors.password && touched.password ? (
                <p className="text-[#FF0000] text-sm">{`*${errors.password}`}</p>
              ) : null}
            </div>
            <div className="signinPasswordn mt-4">
              <label
                for="password"
                className="text-sm font-medium text-[#868686] block mb-2"
              >
                Confirm Password
              </label>
              <div className="flex border border-gray-300 rounded-lg relative">
                <input
                  type={confirmPassword ? "text" : "password"}
                  id="confirmpassword"
                  name="confirmPassword"
                  placeholder="Enter confirm password"
                  className="bg-[#fff] text-[#000] sm:text-sm focus:ring-[#7380ec] focus:border-[#7380ec] block w-full p-2.5 rounded-[7px] pr-[35px]"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <button
                  type="button"
                  className="view-password-button px-2 absolute right-0 top-3"
                  onClick={handleToggleConfirmPassword}
                >
                  <GrView />
                  {/* {showPassword ? "Hide" : "View"} */}
                </button>
              </div>
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className="text-[#FF0000] text-sm">{`*${errors.confirmPassword}`}</p>
              ) : null}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="transition-all shadow-xl text-white bg-color-learnmore hover:bg-color-subtext focus:ring-4 focus:ring-[#7380ec] font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
