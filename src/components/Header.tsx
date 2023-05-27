import Timer from "./Timer";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="logo" className="h-12 w-15" />
        <h2 className="font-semibold text-2xl text-primary">
          AceCoin<span className="font-normal">Pay</span>
        </h2>
      </div>
      <Timer />
    </div>
  );
};

export default Header;
