import "./App.css";
import DarkMode from "./components/darkMode/DarkMode";
import Accordion from "./components/Accordion/Accordion";
import IndexAlert from "./components/alert/IndexAlert";
import ComboBox from "./components/comboBox/ComboBox";
import Badge from "./components/badge/Badge";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Button from "./components/button/Button";
import Checkboxs from "./components/checkboxes/Checkboxes";
import RadioButton from "./components/radioButton/RadioButton";
import Dialog from "./components/dialog/Dialog";

function App() {
  return (
    <>
      <DarkMode />
      <Accordion />
      <IndexAlert />
      <ComboBox />
      <Badge />
      <Breadcrumbs />
      <Button />
      <Checkboxs />
      <RadioButton />
      <Dialog />
    </>
  );
}

export default App;
