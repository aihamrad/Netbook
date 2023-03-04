import Logo from "../../components/Logo";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "../../assets/dynamIcIcons/";
import Button from "../../components/Button";

const Footer = () => {
  const socialLinks = [
    { link: "/#", icon: <Twitter />, id: "twitter" },
    { link: "/#", icon: <Instagram />, id: "instagram" },
    { link: "/#", icon: <Facebook />, id: "facebook" },
    { link: "/#", icon: <LinkedIn />, id: "linkedIn" },
  ];
  return (
    <div className="background-black text-white">
      <div className="container">
        <div className="py-20 flex justify-between flex-wrap max-md:py-5">
          <div className="md:flex-1 w-[100%]">
            <table className="mr-44 mb-10 w-[100%] ">
              <thead>
                <tr>
                  <th className="pb-6">Home</th>
                  <th className="pb-6">Resources</th>
                  <th className="pb-6">Community</th>
                  <th className="pb-6">Main links</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {["Home", "Blog", "NewsFeed", "Members"].map((el) => (
                    <td
                      key={el}
                      className="text-center text-light-grey-2 pb-3 max-md:text-sm"
                    >
                      <a href="/#">{el}</a>
                    </td>
                  ))}
                </tr>
                <tr>
                  {["Community", "News", "Profile", "Activity"].map((el) => (
                    <td key={el} className="text-center pb-3 max-md:text-sm">
                      <a href="/#">{el}</a>
                    </td>
                  ))}
                </tr>
                <tr>
                  {["Events", "Guides", "Friends", "Groups"].map((el) => (
                    <td key={el} className="text-center pb-3 max-md:text-sm">
                      <a href="/#">{el}</a>
                    </td>
                  ))}
                </tr>
                <tr>
                  {["Contact", "Help Center", "Forums", "Private Group"].map(
                    (el) => (
                      <td key={el} className="text-center max-md:text-sm">
                        <a href="/#">{el}</a>
                      </td>
                    )
                  )}
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <p className="text-xl mb-4">Subscribe Cirkle Newsletter</p>
            <p className="text-light-grey-2 mb-8 max-md:text-sm">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="subscribe-input">
              <input type="text" placeholder="Email Address" />
              <Button className="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark-grey">
        <div className="container py-10 flex justify-between items-center max-md:flex-col">
          <p className="max:md:mb-1">Besnik Creative Agency.</p>
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
