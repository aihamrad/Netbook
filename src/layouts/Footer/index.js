import Logo from "../../components/Logo";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "../../assets/dynamIcIcons/";
import Button from "../../components/Button";
import { useContext } from "react";
import { ContentContext } from "../../store/ContentContext";

const Footer = () => {
  const { contents } = useContext(ContentContext);
  const footerContent = contents?.footer

  const socialLinks = [
    { link: "/#", icon: <Twitter />, id: "twitter" },
    { link: "/#", icon: <Instagram />, id: "instagram" },
    { link: "/#", icon: <Facebook />, id: "facebook" },
    { link: "/#", icon: <LinkedIn />, id: "linkedIn" },
  ];
  const tableRowRender = (row) => {
    return row?.map((el) => (
      <td
        key={el}
        className="text-center text-light-grey-2 pb-3 max-md:text-sm"
      >
        <a href="/#"><span>{el}</span></a>
      </td>
    ))
  }

  return (
    <div className="background-black text-white">
      <div className="container">
        <div className="py-20 flex justify-between flex-wrap max-md:py-5">
          <div className="md:flex-1 w-[100%]">
            <table className="mr-44 mb-10 w-[100%] ">
              <thead>
                <tr>
                  {["Home", "Resources", "Community", "links"].map((el) => (
                    <th key={el} className="pb-6">
                      <span>{el}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {tableRowRender(footerContent?.row1)}
                </tr>
                <tr>
                  {tableRowRender(footerContent?.row2)}
                </tr>
                <tr>
                {tableRowRender(footerContent?.row3)}
                </tr>
                <tr>
                {tableRowRender(footerContent?.row4)}
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <p className="text-xl mb-4">{footerContent?.title}</p>
            <p className="text-light-grey-2 mb-8 max-md:text-sm">
              {footerContent?.text}
            </p>
            <div className="subscribe-input">
              <input type="text" placeholder="Email Address" />
              <Button className="button-subscribe">{footerContent?.btn}</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark-grey">
        <div className="container py-10 flex justify-between items-center max-md:flex-col">
          <p className="max:md:mb-1">{footerContent?.hint}</p>
          <Logo color="white" />
          <div className="flex max-md:mt-1">
            {socialLinks.map((el) => (
              <a
                href={el.link}
                key={el.id}
                className="social-media flex items-center justify-center cursor-pointer"
              >
                {el.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
