import CardList from "./CardList.jsx";
import SearchBox from "./SearchBox.jsx";
import { useEffect, useState } from "react";
import Scroll from "./Scroll.jsx";
import "./App.css";

export default function App() {
  const [searchField, setSearchField] = useState("");
  const [robots, setRobots] = useState([]); //Ahora robots no estará hardcodeado, se hará una api call

  //Con useEffect se hace la api call para obtener los robots, y se actualiza el estado de robots con la respuesta de la api.
  // Se usa useEffect, ya que es un efecto secundario, y no queremos que se ejecute cada vez que se renderiza el componente, sino solo la primera vez que se monta el componente, por eso se le pasa un array vacío como segundo argumento.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

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
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}
