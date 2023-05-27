import PaymentProvider from "@context/PaymentContext";
import Home from "@pages/home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#219653",
              color: "white",
              fontFamily: "Inter, sans serif",
              fontSize: "14px",
            },
            iconTheme: {
              primary: "white",
              secondary: "#21965E",
            },
          },
          error: {
            style: {
              background: "#de1738",
              color: "white",
              fontFamily: "Inter, sans serif",
              fontSize: "14px",
            },
            iconTheme: {
              primary: "white",
              secondary: "red",
            },
          },
        }}
      />
      <PaymentProvider>
        <Home />
      </PaymentProvider>
    </>
  );
}

export default App;
