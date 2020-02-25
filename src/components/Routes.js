import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';


export default function Routes() {
    return (
        <Fragment>
            <Route exact path='/welcome-page' component = {WelcomePage}/>
            <Route path='/characters' component = {CharacterList}/>
            <Route path='/locations' component = {LocationsList}/>
        </Fragment>
    );
}