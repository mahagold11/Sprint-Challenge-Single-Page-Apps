import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [data, setData] = useState([])

  console.log(data)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get("")
      .then(res=>setData(res.data.results))
      .catch(err=>console.log(err));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

