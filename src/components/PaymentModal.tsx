import Header from "./Header";
import PaymentForm from "./PaymentForm";
import PaymentPreview from "./PaymentPreview";
import { IoMdClose } from "react-icons/io";

interface Props {
  onClose: () => void;
}

const PaymentModal = ({ onClose }: Props) => {
  return (
    <section className="bg-white lg:bg-transparent fixed inset-0 flex items-center justify-center overflow-y-auto">
      <div className="w-full h-full bg-white lg:w-[1000px] lg:h-[unset]">
        <button
          className="block ml-auto mt-4 mr-5"
          type="button"
          onClick={onClose}
        >
          <IoMdClose size={20} />
        </button>
        <div className="lg:hidden mt-5 p-5 md:px-20 md:mt-0">
          <Header />
        </div>
        <div className="flex flex-col-reverse gap-12 p-5 md:px-20 lg:p-12 lg:grid grid-cols-[2fr,0.97fr] lg:gap-[64px]">
          <PaymentForm />
          <PaymentPreview />
        </div>
      </div>
    </section>
  );
};

export default PaymentModal;
