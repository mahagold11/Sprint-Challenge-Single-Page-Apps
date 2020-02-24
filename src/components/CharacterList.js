import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from "./CharacterCard";

const Header1 = styled.h1`
color: red;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [data, setData] = useState([])

  console.log(data)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res=>setData(res.data.results))
      .catch(err=>console.log(err));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <Header1 className="Header">HELLO</Header1>
      {data.map((person, index) => {
        return <CharacterCard key={index} person={person}/>
        }
      )};
    </section>
  );
};

