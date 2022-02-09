import { useEffect, useState } from "react";
import { Form } from "../Form/Form";
import useWindowSize from "../Hooks/useWindowSize";
import "./SubmitSection.scss";

const SubmitSection = (props) => {
  const [formHeight, setFormHeight] = useState(0);
  const [formTitleHeight, setFormTitleHeight] = useState(0);

  const windowWidth = useWindowSize();

  const getFormHeight = (formHeight, titleHeight) => {
    setFormHeight(formHeight);
    setFormTitleHeight(titleHeight);
  };

  useEffect(() => {
    props.getFormSize(formHeight);
  }, [formHeight]);

  return (
    <section
      className="submit-section"
      style={{
        marginBottom: windowWidth.width < 1200 ? `${formHeight + 20}px` : "",
      }}
    >
      <div className="container">
        <div className="submit-section__description-container">
          <Form getElemHeight={getFormHeight} />
          <p
            className="submit-section__description"
            style={{
              paddingBottom: windowWidth.width < 1200 && `${formTitleHeight}px`,
            }}
          >
            Lorem ipsum dolor, consectetur elit
          </p>
          <img
            src="./../images/arrow-t.png"
            alt="arrow"
            className="submit-section__img--m"
            style={{ paddingBottom: `${formTitleHeight}px` }}
          />
          <img
            src="./../images/arrow-m.png"
            alt="arrow"
            className="submit-section__img--l"
          />

          <img
            src="./../images/arrow-d.png"
            alt="arrow"
            className="submit-section__img--d"
          />
        </div>
      </div>
    </section>
  );
};

export default SubmitSection;
