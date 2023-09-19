import "./App.css";
import DarkMode from "./components/darkMode/DarkMode";
import Accordion from "./components/Accordion/Accordion";
import IndexAlert from "./components/alert/IndexAlert";
import ComboBox from "./components/comboBox/ComboBox";

function App() {
  return (
    <>
      <DarkMode />
      <Accordion />
      <IndexAlert />
      <ComboBox />
    </>
  );
}

export default App;
