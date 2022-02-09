import "./index.scss";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import SubmitSection from "./components/SubmitSection/SubmitSection";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [formSize, setFormSize] = useState("");
  const getFormSize = (formHeight) => {
    setFormSize(formHeight);
  };

  return (
    <div className="App">
      <Header formHeight={formSize} />
      <SubmitSection getFormSize={getFormSize} />
      <MainSection />
      <AdvantagesSection />
      <Footer />
    </div>
  );
}

export default App;
