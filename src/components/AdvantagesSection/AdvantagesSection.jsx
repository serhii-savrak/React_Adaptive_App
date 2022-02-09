import "./AdvantagesSection.scss";

const AdvantagesSection = () => {
  return (
    <section className="advantages-section">
      <div className="container">
        <h3 className="advantages-section__title">Lorem Ipsum</h3>

        <ul className="advantages-section__list">
          <li className="advantages-section__list-item">
            <img
              src="./../images/icon.png"
              alt="success-sign"
              width="103"
              height="103"
              className="advantages-section__list-item-img"
            />
            <p className="advantages-section__list-item-description">
              Praesent vitae orci ac urna finibus
            </p>
          </li>
          <li className="advantages-section__list-item">
            <img
              src="./../images/icon-2.png"
              alt="money-rate-sign"
              width="103"
              height="103"
              className="advantages-section__list-item-img"
            />
            <p className="advantages-section__list-item-description">
              Duis sed tortor hendrerit
            </p>
          </li>
          <li className="advantages-section__list-item">
            <img
              src="./../images/icon-3.png"
              alt="graphics"
              width="103"
              height="103"
              className="advantages-section__list-item-img"
            />
            <p className="advantages-section__list-item-description">
              Efficitur non vel urna urna
            </p>
          </li>
          <li className="advantages-section__list-item">
            <img
              src="./../images/icon-4.png"
              alt="hand-with-setting-sign"
              width="103"
              height="103"
              className="advantages-section__list-item-img"
            />
            <p className="advantages-section__list-item-description">
              Bibendum sem sed, aliquam mi
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AdvantagesSection;
