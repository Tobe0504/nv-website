import classes from "./HeaderText.module.css";

type HeaderTextProps = {
  title: string | React.ReactNode;
  caption: string;
  isCentered?: boolean;
};

const HeaderText = ({ title, caption, isCentered }: HeaderTextProps) => {
  return (
    <div
      className={classes.container}
      style={isCentered ? { textAlign: "center" } : { textAlign: "left" }}
    >
      <p>{caption}</p>
      <h4>{title}</h4>
    </div>
  );
};

export default HeaderText;
