import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const Header1 = styled.h1`
color: red;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = event => {
    setSearchQuery(event.target.value);
    // console.log(event.target.value);
  };

  console.log(data)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res=>{
        console.log(res.data.results);
        const persons = res.data.results.filter(person =>
          person.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
          );
        setData(persons);
      })
      .catch(err=>console.log(err));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [searchQuery]);

  return (
    <section className="character-list">
      <SearchForm 
            placeHolder="Search characters..." 
            searchQuery={searchQuery}
            handleChange={handleChange} />

      <Header1 className="Header">HELLO</Header1>
      {data.map((person, index) => {
        return <CharacterCard key={index} person={person}/>
        }
      )};
      
    </section>
  );
};

