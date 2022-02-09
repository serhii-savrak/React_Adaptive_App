import Button from "../Button/Button";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer className="page-footer">
      <div className="container">
        <Button
          formHeight={props.getFormSize}
          text="Lorem ipsum dolor sit amet"
          className="btn page-footer__btn"
        />
        <img
          src="./../images/payments-btn-footer.png"
          alt=""
          width="280"
          height="31"
          className="page-footer__img"
        />
      </div>
    </footer>
  );
};

export default Footer;
