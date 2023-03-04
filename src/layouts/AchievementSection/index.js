import Button from "../../components/Button";

import { ArrowRight, Trophy, Star } from "../../assets/dynamIcIcons";
import img1 from "../../assets/imgs/1.png";
import img2 from "../../assets/imgs/2.png";
import img3 from "../../assets/imgs/3.png";

const AchievementSection = () => {
  const firstBoxImag = [
    { img: img1, key: "img1" },
    { img: img2, key: "img2" },
    { img: img3, key: "img3" },
  ];
  const secondBox = [{ img: img1, key: "github" }];

  return (
    <div className="container ">
      <div className="py-20 flex justify-between items-center max-md:flex-col max-md:py-5">
        <div className="flex justify-start items-center max-md:flex-col">
          {/* box 1 */}

          <div className="p-11 mr-6 box-s shadow rounded-xl max-md:mb-3 max-md:mr-0 ">
            <div className="flex items-center justify-start mb-10">
              <div className="mr-3">
                <Star />
              </div>
              <div className="text-xl font-medium">4.8 Raiting</div>
            </div>

            <div className="flex items-center justify-start mb-10">
              <div className="mr-4 flex">
                {firstBoxImag.map((x) => (
                  <div key={x.key} className="img-list">
                    <img key={x.key} src={x.img} alt={x.key} />{" "}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-dark-grey-2 text-base">
                  <span className="text-primary text-semibold">+836k</span>{" "}
                  <span>Members</span>
                </p>
              </div>
            </div>
            <p className="mb-10 text-m-grey">
              More than 2 billion we people over <br /> countries use socibooks
              we to stay <br /> in touch with friends.
            </p>
            <a href="/#" className="flex text-primary items-center text-base">
              <span className="mr-2 ">Join Our Community </span>
              <ArrowRight color={"#217BF4"} />
            </a>
          </div>

          {/* box 2 */}

          <div className="p-11 box-s mr-6 rounded-xl border-grey max-md:mr-0">
            <div className="flex items-center justify-start mb-10">
              <div className="mr-3">
                <Trophy />
              </div>
              <div className="text-xl">Awwwards</div>
            </div>

            <div className="flex items-center justify-start mb-10">
              <div className="mr-4 flex">
                {secondBox.map((x) => (
                  <div key={x.key} className="img-list">
                    <img key={x.key} src={x.img} alt={x.key} />{" "}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-dark-grey-2 text-base">
                  Best of <span className="text-primary">2021</span> on Github
                </p>
              </div>
            </div>
            <p className="mb-10 text-m-grey">
              More than 2 billion we people over
              <br /> countries use socibooks we to stay <br /> in touch with
              friends.
            </p>
            <a href="/#" className="flex text-link-grey items-center text-base">
              <span className="mr-2 ">Get To Awards </span>
              <ArrowRight color={"#4A4A56"} />
            </a>
          </div>
        </div>
        {/* box 3 */}

        <div className="max-md:p-11">
          <p className="mb-2.5 text-primary text-lg">Our Achievement</p>
          <p className="mb-4 text-dark-blue text-36 font-bold">
            We are Connecting <br /> You The Digital Life.
          </p>
          <p className="mb-9 text-base text-grey">
            The scope the Social Media becomes crucial Is <br /> helps the
            business to directly engage with their <br /> needs and wants.
          </p>
          <Button className="button button-primary">
            <div className="flex justify-center items-center">
              <span className="mr-1">Discover me</span>{" "}
              <ArrowRight color={"#fff"} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AchievementSection;
