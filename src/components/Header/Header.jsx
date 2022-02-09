import useWindowSize from "../Hooks/useWindowSize";
import "./Header.scss";

const Header = (props) => {
  const windowWidth = useWindowSize();

  return (
    <header className="page-header">
      <div className="container">
        <h1
          className="page-header__title"
          style={{
            paddingTop:
              windowWidth.width >= 1200 ? `${props.formHeight / 3}px` : "71px",
          }}
        >
          Morbi eu tortor orci
        </h1>
        <h2
          className="page-header__subtitle"
          style={{
            paddingBottom:
              windowWidth.width >= 1200
                ? `${props.formHeight / 1.5}px`
                : "71px",
          }}
        >
          Lorem ipsum dolor sit amet
        </h2>
      </div>
    </header>
  );
};

export default Header;
