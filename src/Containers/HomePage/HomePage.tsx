import Layout from "../../Components/Layout/Layout";
import HomePageBecomeAVolunteer from "../HomePageBecomeAVolunteer/HomePageBecomeAVolunteer";
import HomePageFaqs from "../HomePageFaqs/HomePageFaqs";
import HomePageHeroSection from "../HomePageHeroSection/HomePageHeroSection";
import HomePageImpactWithOthers from "../HomePageImpactWithOthers/HomePageImpactWithOthers";
import HomePageMeasureYourImpact from "../HomePageMeasureYourImpact/HomePageMeasureYourImpact";
import HomepageStates from "../HomepageStates/HomepageStates";
import HomePageTheVolunteers from "../HomePageTheVolunteers/HomePageTheVolunteers";

const HomePage = () => {
  return (
    <Layout>
      <HomePageHeroSection />
      <HomePageBecomeAVolunteer />
      <HomePageMeasureYourImpact />
      <HomepageStates />
      <HomePageImpactWithOthers />
      <HomePageTheVolunteers />
      <HomePageFaqs />
    </Layout>
  );
};

export default HomePage;
