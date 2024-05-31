import Button from "../../Components/Button/Button";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.upperSection}>
        <h1>Become a Volunteer</h1>
        <Button>
          <span>Start Now</span>
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.727275 19.9994C0.114279 20.7506 0.226298 21.8565 0.977476 22.4695C1.72865 23.0825 2.83453 22.9705 3.44753 22.2193L0.727275 19.9994ZM19.373 1.89067C19.2753 0.926053 18.4141 0.223286 17.4495 0.320996L1.73013 1.91326C0.765513 2.01097 0.0627463 2.87216 0.160455 3.83677C0.258165 4.80139 1.11935 5.50416 2.08397 5.40645L16.0567 3.9911L17.4721 17.9638C17.5698 18.9285 18.4309 19.6312 19.3956 19.5335C20.3602 19.4358 21.0629 18.5746 20.9652 17.61L19.373 1.89067ZM3.44753 22.2193L18.9865 3.17751L16.2663 0.957661L0.727275 19.9994L3.44753 22.2193Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>

      <div className={classes.bottomSection}>
        <img src="/Assets/logoWhite.svg" alt="White logo" />

        <div>
          <h4>Address</h4>
          <p>
            6th floor, Co-Creation Hub, 294 Herbert Macaulay Way, Sabo, Yaba,
            Lagos, Nigeria.
          </p>
        </div>

        <div>
          <h4>For enquiries</h4>
          <a href="tel:+2349079627724">+234 907 962 7724</a>
          <a href="mailto:ebube.olisaemeka@aiesec.net">
            ebube.olisaemeka@aiesec.net
          </a>
        </div>

        <img src="/Assets/nvRotator.svg" alt="NV Rotator" />
      </div>
    </div>
  );
};

export default Footer;
