import Button from "../Button/Button";
import "./MainSection.scss";
import "./../Button/Button.scss";
import useWindowSize from "../Hooks/useWindowSize";

const MainSection = (props) => {
  const windowWidth = useWindowSize();

  return (
    <main className="main-section">
      <div className="container">
        {windowWidth.width >= 1200 && (
          <h2 className="main-section__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        )}
        <div className="main-section__wrapper">
          <div className="main-section__article-img-container">
            {windowWidth.width < 1200 && (
              <h2 className="main-section__title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
            )}
            {windowWidth.width >= 768 && (
              <img
                src="./../images/article-image.jpg"
                height="530"
                width="300"
                alt="colorful-blocks"
                className="main-section__image"
              />
            )}
          </div>

          <div className="main-section__text-container">
            <p className="main-section__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
              tortor orci. Vestibulum ornare faucibus dui, eu egestas augue
              aliquam sed. Suspendisse commodo consectetur ligula at commodo.
              Curabitur pretium turpis in ante consectetur, ac euismod ligula
              posuere. Nulla fermentum lorem vel libero pellentesque porttitor.
              Praesent libero ante, molestie quis sapien eu, mattis cursus orci.
              Quisque tellus nunc, consectetur faucibus ullamcorper in,
              imperdiet sit amet leo. Cras iaculis leo eu tempus volutpat. Nulla
              nec sapien condimentum, malesuada nunc nec, ultricies sem.
            </p>
            <p className="main-section__text">
              Phasellus tristique lacinia enim, quis iaculis purus rutrum ac.
              Cras non sapien vestibulum, semper ligula sit amet, venenatis
              urna. Etiam consequat turpis sit amet sapien viverra, fringilla
              feugiat turpis aliquam. Sed quis ultricies neque. Mauris ac
              aliquam mauris, sed mattis mi. Aliquam in posuere purus, at porta
              sapien. Donec quis orci gravida, finibus lectus a, bibendum ante.
              Nam bibendum malesuada luctus. Donec malesuada facilisis aliquet.
              Proin tincidunt enim sed sapien euismod rutrum. Proin suscipit
              mattis nisl nec pulvinar.
            </p>
            {windowWidth.width >= 1200 && (
              <Button text="Lorem ipsum dolor sit amet" className="btn" />
            )}
          </div>

          {windowWidth.width < 768 && (
            <img
              src="./../images/article-image.jpg"
              height="530"
              width="280"
              alt="colorful-blocks"
              className="main-section__image"
            />
          )}
        </div>
        {windowWidth.width < 1200 && (
          <Button
            formHeight={props.getFormSize}
            text="Lorem ipsum dolor sit amet"
            className="btn"
          />
        )}
      </div>
    </main>
  );
};

export default MainSection;
