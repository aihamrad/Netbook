import play from "../../assets/icons/playButton.png";
import { useContext } from "react";
import { ContentContext } from "../../store/ContentContext";

const JoinNetworkSection = () => {
  const { contents } = useContext(ContentContext);
  const sectionContent = contents.section2
  return (
    <div className="container">
      <div className="py-20 flex justify-between items-center max-md:flex-col max-md:py-5">
        <div>
          <p className="text-primary mb-2.5">{sectionContent?.hind}</p>
          <p className="mb-4 text-dark-blue text-36 font-bold">
            {sectionContent?.title}
          </p>
          <p className="text-grey mb-9">
            {sectionContent?.text}
          </p>
          <ul className="network-list">
            {sectionContent?.list.map((el) => (
              <li className="text-dark-blue text-lg flex items-center" key={el}>
                <div className="custom-dot mr-2 flex justify-center items-center">
                  <div className="custom-dot2" />
                </div>
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="mr-6 relative">
            <img className="rounded-xl" src={sectionContent?.img1} alt="img3" />
            <div className="play-button">
              <img src={play} alt="play" />
            </div>
          </div>
          <div>
            <img className="mb-6 rounded-xl" src={sectionContent?.img2} alt="img2" />
            <img className="rounded-xl" src={sectionContent?.img3} alt="img3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNetworkSection;
