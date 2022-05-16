import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { UserProfile, VacancyList } from "../containers";

export default function AdminRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/vagas" component={VacancyList} />
        <Route path="/perfil" component={UserProfile} />
        <Redirect to="/vagas" />
      </Switch>
    </BrowserRouter>
  );
}
