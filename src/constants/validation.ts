import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validation = {
  payment: yupResolver(
    yup.object({
      cvv: yup.number().typeError("Enter your cvv").required("Enter your cvv"),
      expiryMonth: yup
        .number()
        .max(12, "Month not valid")
        .typeError("Enter expiry month")
        .required("Enter expiry month"),
      expiryYear: yup
        .number()
        .typeError("Enter expiry year")
        .required("Enter expiry year"),
      password: yup.string().required("Enter your password"),
    })
  ),
};

export default validation;
