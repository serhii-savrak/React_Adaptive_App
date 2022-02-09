import { scroller } from "react-scroll";

const Button = (props) => {
  const { className, text } = props;

  const scrollTo = (offset) => {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset,
    });
  };

  return (
    <>
      <a className={className} onClick={() => scrollTo()}>
        {text}
      </a>
    </>
  );
};

export default Button;
