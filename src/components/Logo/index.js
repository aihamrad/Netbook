import { useContext } from "react";
import { ContentContext } from "../../store/ContentContext";

const Logo = ({ color }) => {
  const { contents } = useContext(ContentContext);
  const content = contents?.public;
  return (
    <div className="flex justify-start items-center">
      <img src={content?.logo} className="pr-1" alt="logo" />
      <span
        data-testid="netbook"
        className={`font-poppins font-semibold leading-6 text-2xl text-${color}`}
      >
        {content?.name}
      </span>
    </div>
  );
};

export default Logo;
