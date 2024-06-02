import Button from "../../Components/Button/Button";
import HeaderText from "../../Components/HeaderText/HeaderText";
import classes from "./HomePageBecomeAVolunteer.module.css";

const HomePageBecomeAVolunteer = () => {
  return (
    <div className={classes.container}>
      <HeaderText
        title={
          <>
            LEAD <br /> THE CHANGE
          </>
        }
        caption="Become a volunteer"
      />

      <div className={classes.infoSection}>
        <div>
          <img src="/Assets/member1.svg" alt="AIESEC Member" />
        </div>
        <div>
          <p>
            In AIESEC, we are passionate about using our skills and helping you
            use your skills to make an impact in the lives and activities of
            people in the world.
          </p>

          <p>
            Volunteer your skills and experience to be a part of the change that
            comes from services that are provided by our partner NGOs all around
            the country. 
          </p>

          <Button>
            <span>Here is how</span>
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.22523 11.7912C0.876052 12.2191 0.939862 12.849 1.36775 13.1982C1.79565 13.5474 2.42559 13.4836 2.77477 13.0557L1.22523 11.7912ZM11.8464 1.47594C11.7907 0.926464 11.3001 0.526148 10.7507 0.581806L1.79649 1.48881C1.24701 1.54447 0.846698 2.03502 0.902356 2.58449C0.958014 3.13397 1.44857 3.53428 1.99804 3.47863L9.95731 2.6724L10.7635 10.6317C10.8192 11.1811 11.3098 11.5815 11.8592 11.5258C12.4087 11.4701 12.809 10.9796 12.7534 10.4301L11.8464 1.47594ZM2.77477 13.0557L11.6262 2.20896L10.0767 0.944469L1.22523 11.7912L2.77477 13.0557Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePageBecomeAVolunteer;
