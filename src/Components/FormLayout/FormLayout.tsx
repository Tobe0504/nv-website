import Layout from "../Layout/Layout";
import classes from "./FormLayout.module.css";

type FormLayoutProps = {
  children: React.ReactNode;
};

const FormLayout = ({ children }: FormLayoutProps) => {
  return (
    <Layout noFooter>
      <div className={classes.container}>
        <div className={classes.upperSection}>
          <h4>
            SIGN UP TO BE <span>A NATIONAL VOLUNTEER</span>
          </h4>
        </div>
        <div className={classes.lowerSection}>
          <div>
            <p>
              Thank you for indicating interest to be a part of the National
              Volunteer Program.
            </p>
            <p>
              Please provide us with the necessary information required to
              curate an amazing experience for you.
            </p>
            <p>We can't wait to have you! 💚</p>

            <i>
              Disclaimer: You cannot apply for a project in your city! Only
              apply for projects in other states
            </i>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default FormLayout;
