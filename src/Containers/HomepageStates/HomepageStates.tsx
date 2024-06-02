import HeaderText from "../../Components/HeaderText/HeaderText";
import classes from "./HomepageStates.module.css";

export const cities = [
  "Benue",
  "Cross-River",
  "Edo",
  "Enugu",
  "Kwara",
  "Lagos",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "FCT",
];

const HomepageStates = () => {
  const citiesInfinite = [...cities];

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <HeaderText
          title={
            <>
              Live a
              <br /> different reality.
            </>
          }
          caption="Choose a location"
        />

        <p>
          A multicultural experience is one of the ways AIESEC build leaders all
          around the world. Volunteer in a completely new region, away from your
          residence, in Nigeria and experience life from their eyes. Experience
          a new culture and a new life with AIESEC.
        </p>
      </div>

      <div className={classes.citySection}>
        {citiesInfinite.map((data, i) => {
          return (
            <div key={i} className={classes.city}>
              <div>{data}</div>
            </div>
          );
        })}
      </div>

      <div className={classes.citySection}>
        {citiesInfinite.reverse().map((data, i) => {
          return (
            <div key={i} className={classes.city}>
              <div>{data}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomepageStates;
