import { FC } from "react";
import { Wrapper, Title, PokeStats } from "./Stats";

type Squad = {
  title: string;
  members: Array<string>;
  inspect: Function;
};

export const Team: FC<Squad> = ({ title, members, inspect }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <PokeStats>
        {members.map((m) => (
          <li
            onClick={() => inspect(m)}
          >{m}</li>
        ))}
      </PokeStats>
    </Wrapper>
  );
};
