import { Radio } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "../../Components/Button/Button";
import DropdownMain from "../../Components/DropdownMain/DropdownMain";
import FormLayout from "../../Components/FormLayout/FormLayout";
import Input from "../../Components/Input/Input";
import classes from "./StatesForm.module.css";

const StatesForm = () => {
  // Router
  const { city } = useParams();
  const navigate = useNavigate();

  const [projects] = useState([
    {
      title: "Building Healthier Communities",
      description:
        "The project aims to address the challenges faced by individuals living with cancer, aligning with Sustainable Development Goal 3 Good Health and Well-being. Through a multi-faceted approach, the project seeks to improve access to quality healthcare services, enhance support systems, and promote awareness and education about cancer prevention and treatment.",
      isActive: false,
      states: "cross-river",
    },

    {
      title: "Eduinnovation hub",
      description:
        "The aim of this project is to substantially increase the number of young children and teenagers who have relevant skills, including technical and vocational skill, for employment, decent jobs, and entrepreneurship.",
      isActive: false,
      states: "cross-river",
    },
    {
      title: "Edutech",
      description:
        "This project aims at equipping primary and secondary school children aged 10 - 20 in rural areas with basic digital skills and information to better prepare them with skills needed to compete with their counterpart in the larger society and well contribute to national building",
      isActive: false,
      states: "benue",
    },
    {
      title: "Edurural",
      description:
        "Volunteers are to work closely with our partners in reaching schools found lacking in certain fields of knowledge where they are understaffed or lack efficient teachers in relevant subjects necessary for the development of the Child's mind.",
      isActive: false,
      states: "edo",
    },
    {
      title: "Skill Up",
      description:
        "The volunteer here is to enlighten unskilled individuals through a platform provided by Partners on several skills or professions that can be used as a reliable source for reducing their financial constraints.",
      isActive: false,
      states: "edo",
    },
    {
      title: "Edify",
      description:
        "This project aims to provide strong support for child education and promote SDG4 which is quality education",
      isActive: false,
      states: "enugu",
    },
    {
      title: "YOUTH AGRI-PIONEEERS",
      description:
        "Seeking sustainable solutions to end hunger in all its forms and to achieve food security, improved nutrition and promote sustainable agriculture to ensure that everyone everywhere has enough good-quality food to lead a healthy life.",
      isActive: false,
      states: "enugu",
    },
    {
      title: "Inclusive Ed",
      description:
        "Volunteers assisting the teachers in shearing notes, teaching and carrying verbal education with the students. Volunteers make use of technology (YouTube, drawings) to teach children living with disabilities. Volunteers make use of films to education the children. Volunteers bring about gaming activities to engage the children.",
      isActive: false,
      states: "enugu",
    },

    {
      title:
        "Promoting Accountable Governance for Effective Service Delivery (PAGES)",
      description:
        "This project aims to contribute to SDG #10 by promoting policies that prioritize the needs, rights, and well-being of women and youth, creating policies that effectively manage palliatives, and to pass social protection bills for women and children.",
      isActive: false,
      states: "enugu",
    },

    {
      title: "Vest Up",
      description:
        "This project aims to accomplish SDG 8 (decent work and economic growth) by facilitating clubs in schools that are about building knowledge on finance, investment and enterprenureship which would develop the financial capacity of young people.",
      isActive: false,
      states: "enugu",
    },

    {
      title: "FOR THE HEALTH OF IT",
      description:
        "This project aims to ensure healthy living and promote well-being for all ages",
      isActive: false,
      states: "enugu",
    },

    {
      title: "HIV Hotline and Counselling",
      description:
        "A telephone hotline project that involves receiving calls from people all over the country who need information about HIV/AIDS. The goal is to provide factual, helpful information and possibly connect them to the help they need. it also caters to people who need counselling on how to take tests, go for checkups and more.",
      isActive: false,
      states: "lagos",
    },

    {
      title: "Rural Child Education",
      description:
        "This project aims to help to educate the kids in low-income communities with basic numearcy and literacy knowledge.",
      isActive: false,
      states: "ogun",
    },

    {
      title: "Health is Wealth",
      description:
        "This project aims to create awareness about the importance of social issues such as child disability, mental health and gender equality",
      isActive: false,
      states: "ondo",
    },
    {
      title: "Educating a Child",
      description:
        "The project is aimed at incorporating extracurricular activities which includes sex education, career/leadership development and debate into secondary school’s curriculum ",
      isActive: false,
      states: "osun",
    },

    {
      title: "Training Stars",
      description: `This project seeks to advance SDG 4 & 6 by creating a learning space to further teach and engage the orphanage homes with curricular and extra-curricular topics i.e, entrepreneurship, digital skills, and other economically productive crafts. The project is also aimed at creating awareness about the "why" and "how" to ensure the availability and sustainable management of water and proper sanitation.`,
      isActive: false,
      states: "osun",
    },

    {
      title: "Young Pilllars",
      description: `The project seeks to provide youths and children with quality education and relevant skills for growth and sustainability and the awareness to effect positive change in their environment.`,
      isActive: false,
      states: "plateau",
    },

    {
      title: "Healthy Living",
      description: `This project aims to teach children basic healthy habits, personal hygiene and the right measures to take in cases of emergencies.`,
      isActive: false,
      states: "rivers",
    },
    {
      title: "Edu-Next-Gen",
      description: `This project aims to promote quality Education in the field of Economics & Data Processing amongst children and empower them to make impact.`,
      isActive: false,
      states: "rivers",
    },
  ]);

  return (
    <FormLayout>
      <form>
        <h4>{city?.replaceAll("-", " ").toUpperCase()}</h4>

        {projects
          ?.filter((data) => {
            return data.states === city;
          })
          ?.map((data, i) => {
            return (
              <div className={classes.preferredProject} key={data.title}>
                <p>Choose your preferred project</p>
                <p>{data.description}</p>

                <div>
                  <label htmlFor={data.title}>{data.title}</label>
                  <Radio
                    size="medium"
                    name={data.title}
                    id={data.title}
                    checked={data.isActive}
                  />
                </div>
              </div>
            );
          })}

        <div className={classes.formSection}>
          <DropdownMain
            options={["Yes", "No"]}
            title="Select"
            label="Do you have any health issues?*"
          />
          <Input label="If yes, please specify " placeholder="Type here" />
          <Input
            label="In cases of emergency, who do we contact?"
            placeholder="Type here"
            tip="Kindly specify your relationship with this person"
          />

          <Input
            label="Contact Information of Emergency contact"
            placeholder="Type here"
          />

          <Input
            label="Any thing else you'd like us to know?"
            placeholder="Type here"
          />
        </div>

        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            noRadius
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Previous
          </Button>
          <Button noRadius>Submit</Button>
        </div>
      </form>
    </FormLayout>
  );
};

export default StatesForm;
