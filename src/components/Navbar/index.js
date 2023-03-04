import React, { useState } from "react";
import {Arrow} from "../../assets/dynamIcIcons";
import Button from "../Button";
import SearchInput from "../SearchInput";
import Logo from "../Logo";

const ButtonsList = [
  { text: "Home", type: "link" },
  { text: "Community", type: "dropdown" },
  { text: "Blog", type: "link" },
  { text: "Events", type: "link" },
];

const Navbar = () => {
  const [page, setPage] = useState("Home");

  const buttonsRender = (item) => {
    if (item.type === "dropdown") {
      return (
        <div className="flex items-center">
          <span className="mr-4">{item.text}</span> <Arrow />
        </div>
      );
    }
    return <div>{item.text}</div>;
  };


  return (
    <div className='b-bottom-secondry navbar'>
      <div className="container flex justify-between py-4 max-md:flex-col max-md:py-1">
        <div className="flex justify-start items-center  max-md:flex-col  max-md:justify-center max-md:w-[100%]">
            <div className="mr-20  max-md:mb-4 max-md:mr-0">
              <Logo color='black' />
            </div>
          <div className="flex justify-start items-center ">
            {ButtonsList.map((el, index) => (
              <div
                className={`${index !== ButtonsList.length -1 ? 'mr-5' : ''} text-sm leading-3 cursor-pointer  ${
                  page === el.text ? "text-black font-semibold" : "text-grey font-normal"
                }`}
              >
                {buttonsRender(el)}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-start items-center max-md:justify-center max-md:p-5">
          <div></div>
          <SearchInput />
            <Button
              className={"button-primary font-semibold leading-3 text-xs max-md:w-[100%]"}
            >
              Log in
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
