import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email."),
  password: Yup.string()
    .min(8, "Must be 8 or more than 8 characters")
    .required("Please enter your password.")
    .matches(/\w/, "Please enter valid password"),
});

export const forgetSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email."),
});

export const resetPasswordSchema = Yup.object({
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^\d{6}$/, "OTP must be exactly 6 numbers"),
  password: Yup.string()
    .min(8, "Must be 8 or more than 8 characters")
    .required("Please enter your password.")
    .matches(/\w/, "Please enter valid password"),
  confirmPassword: Yup.string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    })
    .required("Confirm Password is required"),
});
