import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';


function App() {
  return (
    <>
    <Router>
      <HeaderComponent />

      <div className="container">
       <Switch>
        <Route path="/" exact component={ListEmployeeComponent} />
        <Route path="/employees"  component={ListEmployeeComponent} />
       </Switch>

      </div>

      <FooterComponent />
      </Router>
    </>
  );
}

export default App;
