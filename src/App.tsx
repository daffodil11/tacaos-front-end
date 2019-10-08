import React from 'react';
import logo from './logo.svg';
import { Router, RouteComponentProps, Link } from "@reach/router";
import Tacos from "./components/Tacos";
import FavouriteTaco from "./components/FavouriteTaco";
import ChangeFavouriteTaco from "./components/ChangeFavouriteTaco";
import './App.css';

type Props = { component: React.ComponentType } & RouteComponentProps;

const Route: React.ComponentType<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">TypeScript Tacos</header>
      <Link to="/tacos">List all tacos</Link>
      <Link to="/fav-taco">Find a user's favourite taco</Link>
      <Link to="/change-fav-taco">Update a user's favourite taco</Link>
      <Router className="main">
        <Route component={Tacos} path="/tacos" />
        <Route component={FavouriteTaco} path="/fav-taco" />
        <Route component={ChangeFavouriteTaco} path="/change-fav-taco" />
      </Router>

    </div>
  );
}

export default App;
