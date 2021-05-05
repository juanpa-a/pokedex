import { FC } from "react";
import styled from "styled-components";
import { PokeScreen } from "./Screen";

type PokeStats = {
  title: string;
  stats: Array<string>;
};

export const Stats: FC<PokeStats> = ({ title, stats }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <PokeStats>
        {stats.map((stat) => (
          <li>{stat}</li>
        ))}
      </PokeStats>
    </Wrapper>
  );
};

export const Wrapper = styled(PokeScreen)`
  padding: 2rem;

`;

export const PokeStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: "Press Start 2P", cursive;
  font-size: 0.8rem;
`;

export const Title = styled.h3`
  font-family: "Press Start 2P", cursive;
  font-size: 1.1rem;
`;
