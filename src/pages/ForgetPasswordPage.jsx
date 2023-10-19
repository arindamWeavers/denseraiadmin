import { forgetSchema } from "../schema/auth.schema";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../redux/reducers/auth.slice";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: forgetSchema,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: async (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
        const value = await dispatch(forgetPassword({ email: values.email }));
        console.log(value, "value");
        if (value.type === "admin/forget-password/fulfilled") {
          navigate("/reset-password", { state: { email: values.email } });
        } else {
          return;
        }
        action.resetForm();
      },
    });

  return (
    <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
      <div className="bg-white shadow-xl rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
        <div className="p-6 sm:p-8 lg:p-16 space-y-8 border-t-4 border-color-learnmore">
          <h2 className="text-[1.2rem] md:text-3xl font-bold text-gray-900 text-center">
            Forget Password
          </h2>
          <p className="text-[#797979] text-center mb-5 text-">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
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
                className="bg-[#fff] border border-[#d5d5d5] text-[#000] sm:text-sm focus:ring-cyan-600 focus:border-[#7380ec] block w-full p-2.5 rounded-[7px]"
                placeholder="name@company.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-[#FF0000] text-sm">{`*${errors.email}`}</p>
              ) : null}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="transition-all shadow-xl text-white bg-color-learnmore hover:bg-color-subtext focus:ring-4 focus:ring-[#7380ec] font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
              >
                Forget Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
