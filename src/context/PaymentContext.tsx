/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

interface Props {
  children: React.ReactElement;
}

interface PaymentDetails {
  cardNumber: string[];
  editTrigger: boolean;
  cardNumberVerified: boolean;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
  password: string;
}

interface PaymentContext {
  paymentDetails: PaymentDetails;
  setPaymentDetails: React.Dispatch<React.SetStateAction<PaymentDetails>>;
}

export const PaymentContext = createContext<PaymentContext>({
  paymentDetails: {
    cardNumber: ["2412", "7512", "3412", "3456"],
    editTrigger: false,
    cardNumberVerified: true,
    cvv: "327",
    expiryMonth: "09",
    expiryYear: "22",
    password: "",
  },
  setPaymentDetails: () => {},
});

const PaymentProvider = ({ children }: Props) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: ["2412", "7512", "3412", "3456"],
    editTrigger: false,
    cardNumberVerified: true,
    cvv: "327",
    expiryMonth: "09",
    expiryYear: "22",
    password: "",
  });
  return (
    <PaymentContext.Provider value={{ paymentDetails, setPaymentDetails }}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentProvider;
