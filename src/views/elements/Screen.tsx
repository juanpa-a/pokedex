import { FC } from "react";
import styled from "styled-components";

type Pokemon = {
  name: string;
  url: string;
};

export const Screen: FC<Pokemon> = ({ name, url }) => {
  return (
    <PokeScreen>
      <Name>{name}</Name>
      <Image src={url} alt={`A Wild ${name} Appears!`} />
    </PokeScreen>
  );
};

export const PokeScreen = styled.div`
  background-color: #edffec;
  border-radius: 25px;
  border: 5px solid #272727;
  margin: 3rem;
  font-family: "Press Start 2P", cursive;
`;
const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 40rem;
  width: 40rem;
`;

const Name = styled.h1`
  text-align:center;
`