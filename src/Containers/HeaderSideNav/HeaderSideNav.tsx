import classes from "./HeaderSideNav.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { routes } from "../Header/Header";
import Button from "../../Components/Button/Button";

type HeaderSideNavProps = {
  closeSideNav: () => void;
};

const HeaderSideNav = ({ closeSideNav }: HeaderSideNavProps) => {
  // Location
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section className={classes.container}>
      <div className={classes.closeSideNavv}>
        <ClearIcon onClick={closeSideNav} />
      </div>
      <div className={classes.userSection}>
        <img
          src="/Assets/logo.svg"
          alt="NV Logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <div className={classes.navSection}>
        {routes.map((data, i) => {
          return (
            <Link
              to={data.route}
              className={
                location.pathname === data.route ? classes.active : undefined
              }
              key={i}
            >
              {data.title}
            </Link>
          );
        })}
      </div>

      <Button
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        <span>Become a volunteer</span>
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.86366 11.7911C0.51448 12.219 0.578289 12.849 1.00618 13.1981C1.43407 13.5473 2.06402 13.4835 2.4132 13.0556L0.86366 11.7911ZM11.4848 1.47585C11.4291 0.926372 10.9386 0.526056 10.3891 0.581715L1.43491 1.48872C0.885441 1.54437 0.485125 2.03493 0.540783 2.5844C0.596442 3.13388 1.087 3.53419 1.63647 3.47853L9.59574 2.67231L10.402 10.6316C10.4576 11.1811 10.9482 11.5814 11.4977 11.5257C12.0471 11.4701 12.4474 10.9795 12.3918 10.43L11.4848 1.47585ZM2.4132 13.0556L11.2646 2.20887L9.71511 0.944377L0.86366 11.7911L2.4132 13.0556Z"
            fill="white"
          />
        </svg>
      </Button>
    </section>
  );
};

export default HeaderSideNav;
