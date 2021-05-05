// import "./App.css";
import { Pokedex } from "./views/Pokedex";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <Pokedex />
      </header>
    </div>
  );
};
