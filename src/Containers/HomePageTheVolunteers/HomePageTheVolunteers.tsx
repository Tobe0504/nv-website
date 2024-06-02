import HeaderText from "../../Components/HeaderText/HeaderText";
import classes from "./HomePageTheVolunteers.module.css";

const HomePageTheVolunteers = () => {
  // States
  const testimonials = [
    {
      name: "Bright Uzosike",
      caption:
        "Where is more happiness in giving than there is in receiving. No matter how small you give to those in need, it goes a long way to put a smile on their faces.",
      image: "/Assets/testimonial1.svg",
    },

    {
      name: "Deborah",
      caption:
        "Working and relating to the children. It was always exciting to see them work on projects independently and come out with excellent results.",
      image: "/Assets/testimonial2.svg",
    },

    {
      name: "Kashimana",
      caption:
        "My experience was one of the best I have ever had. From 100% support from the team to learning about a whole new diverse culture. ",
      image: "/Assets/testimonial3.svg",
    },
  ];

  return (
    <div className={classes.container}>
      <HeaderText
        title={
          <>
            What they had
            <br />
            to say!
          </>
        }
        caption="The Volunteers"
        isCentered
      />

      <div className={classes.testimonoalSection}>
        {testimonials.map((data, i) => {
          return (
            <div className={classes.testmonial} key={i}>
              <img src={data.image} alt={data.name} />
              <div>{data.name}</div>
              <div>{data.caption}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageTheVolunteers;
