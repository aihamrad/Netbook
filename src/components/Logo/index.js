import logo from "../../assets/imgs/netbookLogo.svg";

const Logo = ({ color }) => {
  return (
    <div className="flex justify-start items-center">
      <img src={logo} className="pr-1" alt="logo" />
      <span
        className={`font-poppins font-semibold leading-6 text-2xl text-${color}`}
      >
        Netbook
      </span>
    </div>
  );
};

export default Logo;
