import { IconContext } from "react-icons";
import "./App.css";
import { Search } from "./components/search";

function App() {
  return (
    <IconContext.Provider
      value={{ color: "var(--white-100)", style: { verticalAlign: "middle" } }}
    >
      <Search />
    </IconContext.Provider>
  );
}

export default App;
