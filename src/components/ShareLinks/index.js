import { useState } from "react";
import { Facebook, Twitter, LinkedIn } from "../../assets/dynamIcIcons";

const ShareLinks = () => {
  const [showSocialMediaButtons, setShowSocialMediaButtons] = useState(false);
  const socialLinks = [
    {
      link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        "https://netbook-test.netlify.app/"
      )}`,
      icon: <Twitter />,
      id: "twitter",
    },
    {
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        "https://netbook-test.netlify.app/"
      )}`,
      icon: <Facebook />,
      id: "facebook",
    },
    {
      link: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        "https://netbook-test.netlify.app/"
      )}`,
      icon: <LinkedIn />,
      id: "linkedin",
    },
  ];

  return (
    <div
      className="fixed background-black text-white top-60 py-3 px-1 rounded-r-lg z-10"
      onMouseEnter={() => setShowSocialMediaButtons(true)}
      onMouseLeave={() => setShowSocialMediaButtons(false)}
      data-testid="share-buttons"
    >
      <div className="flex items-center">
        {showSocialMediaButtons ? (
          socialLinks.map((el) => (
            <a
              href={el.link}
              key={el.id}
              data-testid={el.id}
              className="social-media flex items-center justify-center cursor-pointer mx-4"
              target="_blank"
              rel="noreferrer"
            >
              {el.icon}
            </a>
          ))
        ) : (
          <p className="writing-mode-v">Share</p>
        )}
      </div>
    </div>
  );
};

export default ShareLinks;
