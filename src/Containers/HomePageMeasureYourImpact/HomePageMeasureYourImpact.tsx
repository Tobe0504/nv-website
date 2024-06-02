import HeaderText from "../../Components/HeaderText/HeaderText";
import classes from "./HomePageMeasureYourImpact.module.css";

const HomePageMeasureYourImpact = () => {
  // Utils
  const why = [
    {
      text: "Share a smile",
      image: "/Assets/volunteer1.svg",
    },
    {
      text: "Try new foods",
      image: "/Assets/volunteer2.svg",
    },
    {
      text: "Change a life",
      image: "/Assets/volunteer3.svg",
    },
    {
      text: "Build new friendships",
      image: "/Assets/volunteer4.svg",
    },
    {
      text: "Immerse yourself in new cultures",
      image: "/Assets/volunteer5.svg",
    },
    {
      text: "Make a difference",
      image: "/Assets/volunteer6.svg",
    },
  ];
  return (
    <div className={classes.container}>
      <HeaderText
        title={
          <>
            Why should you <br /> volunteer?
          </>
        }
        caption="Measure your impact"
        isCentered
      />

      <div className={classes.whySection}>
        {why.map((data, i) => {
          return (
            <div
              key={i}
              style={{
                background: `url("${data.image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <span>{data.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageMeasureYourImpact;
