import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// Components
import Home from "../Layout/Home/Home";
import NavBar from "../Layout/NavBar/NavBar";
import Add from "../Layout/Add/Add";
import Edit from "../Layout/Edit/Edit";

const Routes = () => {
  return (
    <Fragment>
      <div >
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={Add} exact />
          <Route path="/edit" component={Edit} exact />
        </Switch>
      </div>

    </Fragment>
  );
};

export default Routes;
