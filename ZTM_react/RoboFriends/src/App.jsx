import { robots } from "./robots.js";
import CardList from "./CardList.jsx";
import SearchBox from "./SearchBox.jsx";
import { useState } from "react";
import "./App.css";

const state = {
  robo: robots,
  searchfield: "",
};

export default function App() {
  const [field, setField] = useState(state);

  //Esta función se encarga de manejar el cambio de estado cada que el usuario teclea algo nuevo en el input box
  const handleChange = (foo) => {
    //Primero formatearemos la cadena de texto recibida para que este en minúsculas...
    //... de esta forma normalizamos la búsqueda independientemente si se teclea en mayúsculas, además el método 'includes' es case sensitive
    const fooLower = foo.toLowerCase();
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(fooLower);
    });
    const newState = { robo: filteredRobots, searchfield: foo };
    setField(newState);
  };

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox
        inputText={field.searchfield}
        OnInputTextChange={handleChange}
      />
      <CardList robots={field.robo} />
    </div>
  );
}
