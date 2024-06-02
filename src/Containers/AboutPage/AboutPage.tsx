import Layout from "../../Components/Layout/Layout";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.topSection}>
          <div>
            <h4>NATIONAL VOLUNTEER</h4>
          </div>
          <div>
            <h4>AIESEC in Nigeria</h4>
          </div>
        </div>

        <div className={classes.bottomSection}>
          <img src="/Assets/aboutImage.svg" alt="AIESEC Member" />

          <p>
            In 1948, after World War II, Amid recovery from the war that dealt
            heavy losses to the world. The world needed a set of new individuals
            to lead and manage, people who understood the idea of being a
            leader. A group of 7 young people from different backgrounds came
            together to achieve peace, fulfillment of humankind's potential and
            named themselves AIESEC.
          </p>

          <p>
            National Volunteer is AIESEC in Nigeria's program created to provide
            an opportunity for people passionate about social impact to make an
            impact within our own country. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
