import React from 'react';
import {Switch,Route, Link} from 'react-router-dom'
import App from './App';

const Home = () => {
    return (
        <div>
            <Link to="/about" />
           <Switch>
               <Route exact path="/about" component={App} />

           </Switch> 
        </div>
    )
}

export default Home
