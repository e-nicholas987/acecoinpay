import { useState } from "react";
import PaymentModal from "@components/PaymentModal";

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  return (
    <section className="grid place-content-center h-screen w-screen bg-slate-300 bg-left-top bg-[url('/src/assets/images/background.jpg')] bg-auto">
      <button
        typeof="button"
        className="rounded-lg bg-ultramarine-blue font-semibold text-white text-center p-4 w-[300px] block whitespace-nowrap hoveer:border border-bg-ultramarine-blue hover:bg-white hover:text-ultramarine-blue transition-all duration-500"
        onClick={() => setShowModal(true)}
      >
        Proceed to payment
      </button>
      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Home;
