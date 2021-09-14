import './App.css';
import List from './Components/List';
import Details from './Components/Details';
import Header from './Components/Header';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <><Header />
    <Switch>
      <Route exact path='/startups-hq' component={List}></Route>
      <Route path='/Details/:id' component={Details}></Route>
    </Switch></>
  );
}

export default App;
