import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { Welcome, SignUp, Login, VacancyList } from "../containers";

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/registre-se" component={SignUp} />
        <Route path="/demonstracao" component={VacancyList} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
