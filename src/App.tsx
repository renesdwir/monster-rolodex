import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import { MonsterTypes } from "./types";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setMonsters(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredMonster = monsters.filter((monster: MonsterTypes) => {
      return monster.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    setFilteredMonster(filteredMonster);
  }, [monsters, searchField]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };
  return (
    <div className="App">
      <h1>Moster Rolodex</h1>
      <SearchBox onChangeHandler={onChangeHandler} />
      <CardList datas={filteredMonster} />
    </div>
  );
}

export default App;
