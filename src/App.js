import {Switch,Route} from 'react-router-dom'
import About from './About';
import { Contact } from './Contact';
import Home from './Home';

import Nav from "./Nav";

function App() {
  return (
  <div>
    <Nav/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact}/>
    </Switch>
  </div>
  );
}

export default App;
