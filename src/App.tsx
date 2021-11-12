import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import RandomData from './Components/RandomData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      {/* @ts-ignore */}
      <Route path="/" exact component={RandomData} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
