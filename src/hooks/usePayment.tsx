import { PaymentContext } from "@context/PaymentContext";
import { useContext } from "react";

export const usePayment = () => useContext(PaymentContext);
