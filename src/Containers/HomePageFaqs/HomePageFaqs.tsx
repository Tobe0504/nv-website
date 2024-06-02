import React from "react";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import HeaderText from "../../Components/HeaderText/HeaderText";
import classes from "./HomePageFaqs.module.css";

const HomePageFaqs = () => {
  // Utils
  const faqs = [
    {
      question: "What is National Volunteer?",
      answer: "I am a boy",
    },
    {
      question: "Which states can I volunteer in?",
      answer: "",
    },
    {
      question: "Is there a fee for this program?",
      answer: "",
    },
    {
      question: "Do I get paid?",
      answer: "",
    },
    {
      question: "What do I stand to gain?",
      answer: "",
    },
    {
      question:
        "Can I include the National Volunteer certificate in my resume?",
      answer: "",
    },
    {
      question: "Who can go for this program?",
      answer: "",
    },
    {
      question: "Is accommodation and feeding provided?",
      answer: "",
    },
    {
      question: "What is the duration of this program?",
      answer: "",
    },
    {
      question: "Will there be a certificate of participation?",
      answer: "",
    },
    {
      question: "How can I be a part of this program?",
      answer: "",
    },
    {
      question: "What should I expect after I sign up?",
      answer: "",
    },
  ];

  return (
    <div className={classes.container}>
      <HeaderText
        title={
          <>
            Detailed
            <br /> Information
          </>
        }
        caption="FAQS"
      />
      <div className={classes.questionSection}>
        {faqs.map((data, i) => {
          return (
            <React.Fragment key={i}>
              <DropdownWithSearch title={data.question} answer={data.answer} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageFaqs;
