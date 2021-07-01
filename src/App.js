import './assets/css/App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
