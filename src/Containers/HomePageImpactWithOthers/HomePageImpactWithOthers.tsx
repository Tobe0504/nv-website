import { useNavigate } from "react-router";
import Button from "../../Components/Button/Button";
import HeaderText from "../../Components/HeaderText/HeaderText";
import { scrollToTheTop } from "../../HelperFunctions/scrollToTop";
import classes from "./HomePageImpactWithOthers.module.css";

const HomePageImpactWithOthers = () => {
  // Router
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.upperSection}>
        <HeaderText
          title={
            <>
              Grow
              <br /> with Others
            </>
          }
          caption="Impact the world"
        />

        <p>
          We may not be able to end wars, solve world hunger z save the planet
          immediately, but by doing a little bit of good where we can, we are
          paving the way for much broader changes!
        </p>
      </div>

      <div className={classes.lowerSection}>
        <div>
          <img src="/Assets/member2.svg" alt="AIESEC members" />
        </div>

        <div>
          <p>
            We rise by lifting others. Volunteer in any of the different states
            in Nigeria and take your shot at growing while helping people grow
          </p>
          <p>
            Experience is the best teacher, so what better way to experience
            life-changing growth than by helping others get the experience, too?
            AIESEC provides practical experiences for you to become a better
            version of yourself, and volunteering is one of those ways.
          </p>

          <Button
            onClick={() => {
              navigate("/projects");
              scrollToTheTop();
            }}
          >
            <span>View projects</span>
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.22523 11.7911C0.876052 12.219 0.939862 12.8489 1.36775 13.1981C1.79565 13.5473 2.42559 13.4835 2.77477 13.0556L1.22523 11.7911ZM11.8464 1.47582C11.7907 0.926342 11.3001 0.526026 10.7507 0.581684L1.79649 1.48869C1.24701 1.54434 0.846698 2.0349 0.902356 2.58437C0.958014 3.13385 1.44857 3.53416 1.99804 3.4785L9.95731 2.67228L10.7635 10.6316C10.8192 11.181 11.3098 11.5813 11.8592 11.5257C12.4087 11.47 12.809 10.9795 12.7534 10.43L11.8464 1.47582ZM2.77477 13.0556L11.6262 2.20884L10.0767 0.944347L1.22523 11.7911L2.77477 13.0556Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePageImpactWithOthers;
