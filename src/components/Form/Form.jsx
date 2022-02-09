import { useEffect, useRef, useState } from "react";
import "./Form.scss";
import { Element } from "react-scroll";

export const Form = (props) => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isValidName, setIsValidName] = useState(1);
  const [isValidLastName, setIsValidLastName] = useState(1);
  const [isValidEmail, setIsValidEmail] = useState(1);
  const [isValidPhone, setIsValidPhone] = useState(1);

  const formRef = useRef();
  const titleRef = useRef();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();

  const nameValidation = () =>
    firstNameValue.length < 2 ? setIsValidName(false) : setIsValidName(true);

  const lastNameValidation = () =>
    lastNameValue.length < 2
      ? setIsValidLastName(false)
      : setIsValidLastName(true);

  const phoneNumberValidation = () =>
    phoneNumber.toString().length < 6 || phoneNumber.toString().length > 12
      ? setIsValidPhone(false)
      : setIsValidPhone(true);

  const onKeyPress = (e) => {
    if (!isNaN(+e.key) && e.key !== " ") {
    } else {
      e.preventDefault();
    }
  };

  const emailValidation = () => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const emailIsCorrect = email.match(validRegex);

    !emailIsCorrect ? setIsValidEmail(false) : setIsValidEmail(true);
  };

  useEffect(() => {
    const formHeight = formRef.current.clientHeight;
    const titleHeight = titleRef.current.clientHeight;

    props.getElemHeight(formHeight, titleHeight);
  });

  const onFirstNameChange = (e) => {
    setFirstNameValue(e.target.value);
  };

  const onLastNameChange = (e) => {
    setLastNameValue(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    nameValidation();
    lastNameValidation();
    phoneNumberValidation();
    emailValidation();
  };

  useEffect(() => {
    if (
      isValidName !== 1 &&
      isValidName &&
      isValidLastName !== 1 &&
      isValidLastName &&
      isValidEmail !== 1 &&
      isValidEmail &&
      isValidPhone !== 1 &&
      isValidPhone
    ) {
      console.log({
        firstNameValue,
        lastNameValue,
        email,
        phoneNumber,
      });

      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      phoneNumberRef.current.value = "";
      emailRef.current.value = "";

      setFirstNameValue("");
      setLastNameValue("");
      setEmail("");
      setPhoneNumber("");

      setIsValidName(1);
      setIsValidLastName(1);
      setIsValidEmail(1);
      setIsValidPhone(1);
    }
  }, [isValidName, isValidLastName, isValidEmail, isValidPhone]);

  return (
    <>
      <form ref={formRef} className="register-form" onSubmit={onSubmit}>
        <Element name="scroll-to-element" className="form-element">
          <h3 className="register-form__title">Lorem ipsum</h3>

          <div className="register-form__inputs-wrapper">
            <label ref={titleRef} className="register-form__label">
              {" "}
              First Name
              <input
                ref={firstNameRef}
                className="register-form__input"
                placeholder="e.g. John"
                type="text"
                onChange={onFirstNameChange}
                style={{
                  border: isValidName ? "2px solid black" : "2px solid red",
                  color: isValidName ? "black" : "red",
                }}
              />
            </label>

            <label className="register-form__label">
              {" "}
              Last Name
              <input
                ref={lastNameRef}
                className="register-form__input"
                placeholder="e.g. Lander"
                type="text"
                onChange={onLastNameChange}
                style={{
                  border: isValidLastName ? "2px solid black" : "2px solid red",
                  color: isValidLastName ? "black" : "red",
                }}
              />
            </label>

            <label className="register-form__label">
              {" "}
              Email
              <input
                ref={emailRef}
                className="register-form__input"
                placeholder="e.g. name@gmail.com"
                // type="email"
                onChange={onEmailChange}
                style={{
                  border: isValidEmail ? "2px solid black" : "2px solid red",
                  color: isValidEmail ? "black" : "red",
                }}
              />
            </label>

            <label className="register-form__label">
              {" "}
              Phone number
              <input
                ref={phoneNumberRef}
                className="register-form__input"
                placeholder="8710211"
                onChange={onPhoneNumberChange}
                onKeyPress={onKeyPress}
                style={{
                  border: isValidPhone ? "2px solid black" : "2px solid red",
                  color: isValidPhone ? "black" : "red",
                }}
              />
            </label>

            <input
              className="register-form__btn"
              type="submit"
              value="SUBMIT"
            />

            <div className="register-form__checkbox-container">
              <input className="register-form__checkbox" type="checkbox" />
              <label className="register-form__agreement-label">
                <div>
                  I agree to the{" "}
                  <a className="register-form__link" href="$">
                    Privacy Policy, Terms & Conditions
                  </a>{" "}
                  and to receive marketing material
                </div>
              </label>
            </div>
            <p className="register-form__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
              tortor orci.
            </p>
          </div>

          <figure className="register-form__figure">
            <img
              className="register-form__img"
              src="./../images/payments-btn-form.png"
              alt="payment-methods"
              width="273"
              height="25"
            />
          </figure>
        </Element>
      </form>
    </>
  );
};
