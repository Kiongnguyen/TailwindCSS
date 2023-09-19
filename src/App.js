import "./App.css";
import DarkMode from "./components/darkMode/DarkMode";
import Accordion from "./components/Accordion/Accordion";
import IndexAlert from "./components/alert/IndexAlert";
import ComboBox from "./components/comboBox/ComboBox";
import Badge from "./components/badge/Badge";
function App() {
  return (
    <>
      <DarkMode />
      <Accordion />
      <IndexAlert />
      <ComboBox />
      <Badge />
    </>
  );
}

export default App;
