import { FC, useState, useEffect } from "react";
import { Button } from "./elements/Button";
import {
  ControlsWrapper,
  InformationWrapper,
  PokeWrapper,
  StatsWrapper,
} from "./styles";
import { Screen } from "./elements/Screen";
import { Stats } from "./elements/Stats";
import { Input } from "./elements/Input";
import { IMAGE_URL } from "../api/url";
import { getPokeById, getPokeByName } from "../api/pokeapi";
import { Team } from "./elements/Team";

export const Pokedex: FC = () => {
  const [pokemon, setPokemon] = useState(Object);
  const [id, setId] = useState(132);
  const [name, setName] = useState("ditto");
  const [moves, setMoves] = useState(["transform"]);
  const [stats, setStats] = useState(["hp: 48"]);
  const [team, setTeam] = useState<Array<string>>();
  const [input, setInput] = useState("");

  const search = () => {
    if (isNaN(parseInt(input))) getPokeByName(input, setPokemon);
    if (!isNaN(parseInt(input))) getPokeById(parseInt(input), setPokemon);
  };

  const getMember = (name: string) => {
    getPokeByName(name, setPokemon);
  };

  const choose = () => {
    let newTeam = team ? Array.from(new Set([...team, name])) : [name];
    setTeam(newTeam);
  };

  useEffect(() => {
    getPokeById(id, setPokemon);
  }, []);

  useEffect(() => {
    let moves: Array<string> = [];
    let stats: Array<string> = [];

    if (pokemon.name) setName(pokemon.name);
    if (pokemon.id) setId(pokemon.id);
    if (pokemon.moves) {
      pokemon.moves.forEach((m: any) => moves.push(m.move.name));
      setMoves(moves);
    }
    console.log(pokemon.stats);
    if (pokemon.stats) {
      pokemon.stats.forEach((m: any) =>
        stats.push(`${m.stat.name}: ${m.base_stat}`)
      );
      setStats(stats);
    }
  }, [pokemon]);

  return (
    <PokeWrapper>
      <InformationWrapper>
        <Screen name={name} url={IMAGE_URL(pokemon === undefined ? 132 : id)} />
        <StatsWrapper>
          <Stats title={"Moves"} stats={moves.slice(0, 10)} />
          <Stats title={"Stats"} stats={stats} />
          <Team 
            title={"Team"} 
            members={team || []} 
            inspect={getMember}
          />
        </StatsWrapper>
      </InformationWrapper>
      <ControlsWrapper>
        <Button
          onClick={() => {
            getPokeById(id - 1, setPokemon);
          }}
        >
          ◀
        </Button>
        <Button
          onClick={() => {
            getPokeById(id + 1, setPokemon);
          }}
        >
          ▶
        </Button>
        <Input
          id="poke-input"
          placeholder={"Gotta catch em all"}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button onClick={search}>Search</Button>
        <Button onClick={choose}>Choose!</Button>
      </ControlsWrapper>
    </PokeWrapper>
  );
};
