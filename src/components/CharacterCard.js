import React from "react";
import styled from 'styled-components'

const CharacterName = styled.h2`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: black;

    &:hover {
        color: black;
        font-size: 2rem;
    }
`;

const CardBorder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 5em 25px 5em;
    border: 6px solid #fe53bb;

    ${props => (props.type === 'male' ? `background: #1B7CED;` : null)}
    ${props => (props.type === 'female' ? `background: #fe53bb;` : null)}
    ${props => (props.type === 'n/a' ? `background: #778899;` : null)}

    ${props => (props.type === 'male' ? `border-color: blue;` : null)}
    ${props => (props.type === 'female' ? `border-color: pink;` : null)}
    ${props => (props.type === 'n/a' ? `border-color: gray;` : null)}



`;

const CharacterInfo = styled.div`
    display: flex;
`;

const ChacterList = styled.ul`
    display: flex;
    align-items:center;
    color: black;
    font-size: 1rem;
    list-style: none;
    padding: 0;
    
    li {
        margin-right: 15px;

    }
    li:last-child {
        margin-right: 0;
    }
`;


export default function CharacterCard(props) {
  return (
    <CardBorder type={props.person.gender}>
      <CharacterName>{props.person.name}</CharacterName>
      <CharacterInfo>
        <div>
          <img src={props.person.image}/>
        </div>
        <ChacterList>
            <li>species: {props.person.species}</li>
            <li>origin: {props.person.origin.name}</li>
            <li>hair: {props.person.hair_color}</li>
            <li>gender: {props.person.gender}</li>
        </ChacterList>
      </CharacterInfo>

    </CardBorder>
  );
}
