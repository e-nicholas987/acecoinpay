import { useEffect, useRef } from "react";
import { ChangeEvent } from "react";
import { usePayment } from "@hooks/usePayment";
import MasterCard from "@assets/images/mastercard-sm.svg";
import { MdVerified } from "react-icons/md";
import cn from "classnames";
import { isValidNumber } from "@constants/helpers";

// Render dashes in the card number input box
const Dash = () => <span className="text-primary hidden xs:inline">-</span>;

// Card number input component
const MasterCardInput = () => {
  const { paymentDetails, setPaymentDetails } = usePayment();
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Maximum number of digits that can be entered in an input box
  const maxDigits = 4;

  // Handle input change function
  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // Handle change
    if (value.length <= maxDigits && isValidNumber(value)) {
      const newCardNumber = [...paymentDetails.cardNumber];
      newCardNumber[index] = value;
      setPaymentDetails((prev) => ({ ...prev, cardNumber: newCardNumber }));
    }
    // Move to next input box if and input box has all 4 digits entered
    if (value.length === 4 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  // Function to move to previous input box if and input box has all 4 digits deleted
  const handleBackspace = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (
      inputRefs[index].current?.value.length === 0 &&
      event.key === "Backspace" &&
      index > 0
    ) {
      console.log(inputRefs[index - 1].current?.value);
      inputRefs[index - 1].current?.focus();
    }
  };

  // Save card number when all inputs are filled
  useEffect(() => {
    if (paymentDetails.cardNumber.every((element) => element.length === 4)) {
      setTimeout(
        () =>
          setPaymentDetails((prev) => ({
            ...prev,
            cardNumberVerified: true,
          })),
        500
      );
    } else {
      setPaymentDetails((prev) => ({ ...prev, cardNumberVerified: false }));
    }
  }, [paymentDetails.cardNumber, setPaymentDetails]);

  return (
    <div
      className={cn(
        `h-[60px] p-4 border border-border rounded-lg mt-6 flex items-center justify-between transition-all duration-300`,
        {
          "bg-[#F6F9FC]": paymentDetails.cardNumberVerified,
          "bg-ghost-white": !paymentDetails.cardNumberVerified,
          "border-2 border-focus": !paymentDetails.cardNumberVerified,
        }
      )}
    >
      <div className="flex items-center">
        <img src={MasterCard} alt="mc" className="h-6 w-6" />
        {inputRefs.map((ref, index) => (
          <div key={index}>
            <input
              ref={ref}
              type="number"
              className="ml-1 text-xs xs:text-base sm:mr-0 sm:mx-3 w-10 sm:w-12 font-semibold bg-transparent text-focus disabled-text"
              value={paymentDetails.cardNumber[index]}
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => handleBackspace(index, e)}
              readOnly={paymentDetails.cardNumberVerified}
              disabled={paymentDetails.cardNumberVerified}
            />
            {index < 3 && <Dash />}
          </div>
        ))}
      </div>
      {paymentDetails.cardNumberVerified && (
        <MdVerified size={22} className="text-celestial-blue" />
      )}
    </div>
  );
};

export default MasterCardInput;
