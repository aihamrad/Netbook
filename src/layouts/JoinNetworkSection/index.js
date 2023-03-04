import img1 from "../../assets/imgs/JN-1.png";
import img2 from "../../assets/imgs/JN-2.png";
import img3 from "../../assets/imgs/JN-3.png";
import play from "../../assets/icons/playButton.png";

const JoinNetworkSection = () => {
  const listContent = ["Groups", "Messages", "Share"];
  return (
    <div className="container">
      <div className="py-20 flex justify-between items-center max-md:flex-col max-md:py-5">
        <div>
          <p className="text-primary mb-2.5">Whats Netbboks?</p>
          <p className="mb-4 text-dark-blue text-36 font-bold">
            Why Join to Netbook <br /> Social Network?
          </p>
          <p className="text-grey mb-9">
            Recent surveys have indicated that small businesses <br /> recognise
            the need they have to connect with <br /> consumer.
          </p>
          <ul className="network-list">
            {listContent.map((el) => (
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
            <img className="rounded-xl" src={img3} alt="img3" />
            <div className="play-button">
              <img src={play} alt="play" />
            </div>
          </div>
          <div>
            <img className="mb-6 rounded-xl" src={img1} alt="img1" />
            <img className="rounded-xl" src={img2} alt="img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNetworkSection;
