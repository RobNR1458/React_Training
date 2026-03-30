import CardList from "./CardList.jsx";
import SearchBox from "./SearchBox.jsx";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [searchField, setSearchField] = useState("");
  const [robots, setRobots] = useState([]); //Ahora robots no estará hardcodeado, se hará una api call

  //Esta función se encarga de manejar el cambio de estado cada que el usuario teclea algo nuevo en el input box
  const handleInputChange = (currentInputText) => {
    setSearchField(currentInputText);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox
        inputText={searchField}
        OnInputTextChange={handleInputChange}
      />
      <CardList robots={filteredRobots} />
    </div>
  );
}
