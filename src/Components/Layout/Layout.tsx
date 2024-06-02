import Footer from "../../Containers/Footer/Footer";
import Header from "../../Containers/Header/Header";
import classes from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  noFooter?: boolean;
};

const Layout = ({ children, noFooter }: LayoutProps) => {
  return (
    <section className={classes.container}>
      <section className={classes.header}>
        <Header />
      </section>
      <section className={classes.body}>{children}</section>
      {!noFooter && (
        <section className={classes.footer}>
          <Footer />
        </section>
      )}
    </section>
  );
};

export default Layout;
