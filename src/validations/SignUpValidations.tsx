import * as yup from "yup";
export const SignUpSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNo: yup.string().required(),
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
