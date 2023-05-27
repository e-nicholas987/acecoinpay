import { ChangeEvent } from "react";
import { MdModeEdit } from "react-icons/md";
import FormInput from "./FormInput";
import MasterCardInput from "./MasterCardInput";
import { IoIosKeypad } from "react-icons/io";
import { usePayment } from "@hooks/usePayment";
import { useForm } from "react-hook-form";
import validation from "@constants/validation";
import { isValidNumber } from "@constants/helpers";
import { toast } from "react-hot-toast";
import Header from "./Header";

interface InputLabelProps {
  label: string;
  description: string;
}

interface InputValues {
  cvv: number;
  expiryMonth: number;
  expiryYear: number;
  password: string;
}

// Renders label for the form input
const InputLabel = ({ label, description }: InputLabelProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="font-semibold text-primary">{label}</p>
      <p className="text-manatee text-xs">{description}</p>
    </div>
  );
};

const PaymentForm = () => {
  const { paymentDetails, setPaymentDetails } = usePayment();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
    trigger,
  } = useForm<InputValues>({ resolver: validation.payment });

  // Handles save and edit fuction fo the card number button
  const handleButtonClick = () => {
    for (const inputValue of paymentDetails.cardNumber) {
      if (inputValue.length < 4) {
        return;
      }
    }
    setPaymentDetails((prev) => ({
      ...prev,
      cardNumberVerified: !paymentDetails.cardNumberVerified,
      editTrigger: true,
    }));
  };

  // Function to handle input change
  const handleChange = async (
    inputLength: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = event.target;
    // Restrict input length
    if (value.length <= inputLength && isValidNumber(value)) {
      setValue(name as keyof InputValues, value as string);
      setPaymentDetails((prev) => ({ ...prev, [name]: value }));
      clearErrors(name as keyof InputValues);
    }
    // Monitor use form hook for input validation errors
    await trigger(name as keyof InputValues);
  };

  const onSubmit = (formData: InputValues): void => {
    console.log(formData);
    toast.success("Order confirmed");
  };
  return (
    <div>
      <div className="hidden lg:block">
        <Header />
      </div>
      <form className="grid gap-8" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="flex justify-between items-center">
            <InputLabel
              label="Card Number"
              description="Enter the 16-digit number on the card"
            />
            <button
              type="button"
              onClick={handleButtonClick}
              className="flex items-center gap-2 font-semibold text-focus disabled:text-slate-300"
              disabled={!paymentDetails.cardNumberVerified}
            >
              <MdModeEdit size={20} />
              <span className="text-sm">Edit</span>
            </button>
          </div>
          <MasterCardInput />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row items-center sm:justify-between">
          <InputLabel
            label="CVV Number"
            description="Enter the 3 or 4 digit number on the card"
          />
          <FormInput
            name="cvv"
            onChange={(e) => handleChange(3, e)}
            value={paymentDetails.cvv}
            icon={<IoIosKeypad size={25} />}
            register={register}
            error={errors.cvv}
          />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row items-center sm:justify-between">
          <InputLabel
            label="Expiration date"
            description="Enter the expiration date of the card"
          />
          <div className="flex gap-3 items-center w-full">
            <FormInput
              name="expiryMonth"
              onChange={(e) => handleChange(2, e)}
              value={paymentDetails.expiryMonth}
              register={register}
              error={errors.expiryMonth}
            />
            <span className="text-primary font-semibold">/</span>
            <FormInput
              name="expiryYear"
              onChange={(e) => handleChange(2, e)}
              value={paymentDetails.expiryYear}
              register={register}
              error={errors.expiryYear}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row items-center sm:justify-between">
          <InputLabel
            label="Password"
            description="Enter your dynamic password"
          />
          <FormInput
            type="password"
            name="password"
            icon={<IoIosKeypad size={25} />}
            register={register}
            error={errors.password}
            onChange={(e) => handleChange(100, e)}
          />
        </div>
        <button
          type="submit"
          className="p-5 w-full bg-ultramarine-blue text-center text-white font-semibold rounded-lg"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
