import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import classes from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderSideNav from "../HeaderSideNav/HeaderSideNav";
import { useRef } from "react";

export const routes = [
  { title: "About", route: "/about" },
  { title: "Projects", route: "/projects" },
];

const Header = () => {
  // Routeer
  const location = useLocation();
  const navigate = useNavigate();

  // Refs
  const sideNav = useRef<null | HTMLDivElement>(null);

  // Utils
  const openSideNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = "100%";
    }
  };

  const closeSideNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = "0%";
    }
  };

  return (
    <div className={classes.container}>
      <img
        src="/Assets/logo.svg"
        alt="NV Logo"
        onClick={() => {
          navigate("/");
        }}
      />
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
      <div>
        <svg
          width="23"
          height="26"
          viewBox="0 0 23 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7493 5.88783C21.7455 10.2201 20.7525 16.005 16.6621 18.8338C12.5718 21.6627 6.80867 20.5503 3.81252 16.218C0.816378 11.8858 1.80936 6.10089 5.89971 3.27203C9.99006 0.443171 15.7532 1.55559 18.7493 5.88783ZM18.2451 19.167C22.1737 15.7506 22.9043 9.72301 19.7658 5.18487C16.4056 0.326239 9.8828 -0.985241 5.19675 2.2556C0.510705 5.49644 -0.564107 12.0624 2.79609 16.921C6.13381 21.7471 12.5919 23.0734 17.2708 19.9147L21.0987 25.2376C21.2993 25.5166 21.6853 25.5826 21.9608 25.3851C22.2363 25.1876 22.297 24.8014 22.0964 24.5224L18.2451 19.167Z"
            fill="#2D2D2D"
          />
        </svg>
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

      <span className={classes.sidenavButton} onClick={openSideNav}>
        <MenuIcon />
      </span>

      <div className={classes.sideNav} ref={sideNav}>
        <HeaderSideNav closeSideNav={closeSideNav} />
      </div>
    </div>
  );
};

export default Header;
