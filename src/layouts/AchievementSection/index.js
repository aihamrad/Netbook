import Button from "../../components/Button";

import { ArrowRight, Trophy, Star } from "../../assets/dynamIcIcons";
import { useContext } from "react";
import { ContentContext } from "../../store/ContentContext";

const AchievementSection = () => {
  const { contents } = useContext(ContentContext);
  const box1 = contents?.section3?.box1;
  const box2 = contents?.section3?.box2;
  const box3 = contents?.section3?.box3;

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
              <div className="text-xl font-medium">{box1?.title}</div>
            </div>
            <div className="flex items-center justify-start mb-10">
              <div className="mr-4 flex">
                {box1?.imgs?.map((x) => (
                  <div key={x.key} className="img-list">
                    <img key={x.key} src={x.img} alt={x.key} />{" "}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-dark-grey-2 text-base">
                  <span className="text-primary text-semibold">
                    {box1?.value}
                  </span>{" "}
                  <span>{box1?.valueOf}</span>
                </p>
              </div>
            </div>
            <p className="mb-10 text-m-grey">{box1?.text}</p>
            <a href="/#" className="flex text-primary items-center text-base">
              <span className="mr-2 ">{box1?.link}</span>
              <ArrowRight color={"#217BF4"} />
            </a>
          </div>
          {/* box 2 */}
          <div className="p-11 box-s mr-6 rounded-xl border-grey max-md:mr-0">
            <div className="flex items-center justify-start mb-10">
              <div className="mr-3">
                <Trophy />
              </div>
              <div className="text-xl">{box2?.title}</div>
            </div>

            <div className="flex items-center justify-start mb-10">
              <div className="mr-4 flex">
                {box2?.imgs?.map((x) => (
                  <div key={x.key} className="img-list">
                    <img key={x.key} src={x.img} alt={x.key} />{" "}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-dark-grey-2 text-base">
                  {box2?.valueText1}{" "}
                  <span className="text-primary">{box2?.valueText2}</span>{" "}
                  {box2?.valueText3}
                </p>
              </div>
            </div>
            <p className="mb-10 text-m-grey">{box2?.text}</p>
            <a href="/#" className="flex text-link-grey items-center text-base">
              <span className="mr-2 ">{box2?.link}</span>
              <ArrowRight color={"#4A4A56"} />
            </a>
          </div>
        </div>
        {/* box 3 */}
        <div className="box-m max-md:p-11">
          <p className="mb-2.5 text-primary text-lg">{box3?.hint}</p>
          <p className="mb-4 text-dark-blue text-36 font-bold">{box3?.title}</p>
          <p className="mb-9 text-base text-grey">{box3?.text}</p>
          <Button className="button button-primary">
            <div className="flex justify-center items-center">
              <span className="mr-1">{box3?.btnText}</span>
              <ArrowRight color={"#fff"} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AchievementSection;
