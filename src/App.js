import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import Navigation from "./components/Navigation";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Navigation />
      <Header />
      <Route exact path='/welcome-page' component = {WelcomePage}/>
      <Route path='/characters' componenet = {CharacterList}/>
    </main>
  );
}
