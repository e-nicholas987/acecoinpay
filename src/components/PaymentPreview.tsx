import { RxDotFilled } from "react-icons/rx";
import { MdOutlineWifi } from "react-icons/md";
import { AiFillApple } from "react-icons/ai";
import SimCard from "@assets/images/sim-card.png";
import MasterCard from "@assets/images/mastercard-md.png";
import Scroll from "@assets/images/scroll.svg";
import cn from "classnames";
import { usePayment } from "@hooks/usePayment";

interface Props {
  position: "right" | "left";
}
// Circle for both ends of the dotted line
const Circle = ({ position }: Props) => (
  <div
    className={cn(`rounded-full bg-white h-10 w-10 top-[-20px] absolute`, {
      "right-[-20px]": position === "right",
      "left-[-20px]": position === "left",
    })}
  ></div>
);
const PaymentPreview = () => {
  const { paymentDetails } = usePayment();
  return (
    <div className="relative w-full sm:w-[400px] mx-auto lg:w-full">
      <div className="h-8 w-[60px] bg-ultramarine-blue mx-auto mb-[120px] sm:mb-[65px] rounded"></div>
      {/* Mastercard start */}
      <div className="bg-[rgb(255,255,255,0.85)] bg-mastercard absolute top-[6px] w-[200px] mx-auto lg:w-[unset] right-[38px] left-[38px] p-5 pt-8 rounded-2xl mastercard">
        <div className="flex justify-between items-center mb-[120px] sm:mb-[80px]">
          <img src={SimCard} alt="sim" className="h-10" />
          <MdOutlineWifi size={25} />
        </div>
        <div className="text-primary mb-[30px]">
          <p className="mb-2 text-[13px]">Jonathan Michael</p>
          <div className="flex items-center">
            <RxDotFilled />
            <RxDotFilled className="ml-[-5px]" />
            <RxDotFilled className="ml-[-5px]" />
            <RxDotFilled className="ml-[-5px]" />
            <span className="ml-3 font-semibold">
              {paymentDetails.cardNumber[3]}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-primary text-[13px]">
            {paymentDetails.expiryMonth}/{paymentDetails.expiryYear}
          </span>
          <img src={MasterCard} alt="ms" className="h-10" />
        </div>
      </div>
      {/* Mastercard end */}
      {/* Order details start */}
      <div className="rounded-xl w-full bg-alice-blue py-5">
        <div className="pt-[215px]">
          <div className="grid gap-[16px] px-[38px] text-[13px]">
            <div className="flex justify-between">
              <span className="text-manatee">Company</span>
              <div className="text-primary font-semibold flex items-center">
                <div className="bg-primary h-[18px] w-[18px] rounded-full mr-3 grid place-content-center">
                  <AiFillApple className="text-white" />
                </div>
                Apple
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-manatee">Order Number</span>
              <span className="text-primary font-semibold flex items-center">
                1266201
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-manatee">Product</span>
              <span className="text-primary font-semibold flex items-center">
                Macbook Air
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-manatee">Vat &#40;20%&#41;</span>
              <span className="text-primary font-semibold flex items-center">
                $100.00
              </span>
            </div>
          </div>
        </div>
        {/* Dotted line start */}
        <div className="w-full dotted-line my-7 relative">
          <Circle position="left" />
          <Circle position="right" />
        </div>
        {/* Dotted line end */}
        <div className="px-[38px] flex items-center justify-between">
          <div>
            <p className="text-manatee text-[13px]">You have to Pay</p>
            <div className="text-primary">
              <span className="text-[26px] font-semibold">549</span>
              <span>.99</span>&nbsp;
              <span className="text-manatee">USD</span>
            </div>
          </div>
          <img src={Scroll} alt="scroll" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default PaymentPreview;
