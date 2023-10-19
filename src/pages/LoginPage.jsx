import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginSchema } from "../schema/auth.schema";
import { loginAdmin } from "../redux/reducers/auth.slice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: async (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
        const value = await dispatch(
          loginAdmin({ email: values.email, password: values.password })
        );
        console.log(value, "value");
        if (value.type === "admin/login/fulfilled") {
          navigate("/dashboard");
        } else {
          return;
        }
        action.resetForm();
      },
    });

  return (
    <>
      <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
        <div className="bg-white shadow-xl rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
          <div className="p-6 sm:p-8 lg:p-16 space-y-8 border-t-4 border-color-learnmore">
            <h2 className="text-[1.2rem] md:text-3xl font-bold text-gray-900 text-center">
              Denser AI Admin
            </h2>
            <form className="mt-4 md:mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="email"
                  className="text-sm text-[#868686] block mb-2 font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#fff] border border-[#d5d5d5] text-[#000] sm:text-sm focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 rounded-[7px]"
                  placeholder="name@company.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-[#FF0000] text-sm">{`*${errors.email}`}</p>
                ) : null}
              </div>
              <div className="signinPasswordn mt-4">
                <label
                  for="password"
                  className="text-sm font-medium text-[#868686] block mb-2"
                >
                  Your password
                </label>
                <div className="flex border border-gray-300 rounded-lg relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
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
                    {showPassword ? <BiShow /> : <BiHide />}
                  </button>
                </div>
                {errors.password && touched.password ? (
                  <p className="text-[#FF0000] text-sm">{`*${errors.password}`}</p>
                ) : null}
              </div>
              <div className="block md:flex items-start">
                <Link
                  to="/forget-password"
                  className="text-sm text-color-learnmore hover:underline ml-auto md:mt-0 mt-4 block hover:text-[#000000]"
                >
                  Lost Password?
                </Link>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="transition-all shadow-xl text-white font-bold bg-color-learnmore hover:bg-color-subtext focus:ring-4 focus:ring-[#7380ec] rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
