import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { CreateJobVacancyForm, CompanyProfile, CreatedVacanciesList } from "../containers";

export default function AdminRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cadastrar-vaga" component={CreateJobVacancyForm} />
        <Route path="/listar-vagas" component={CreatedVacanciesList} />
        <Route path="/perfilEmpresa" component={CompanyProfile} />
        <Redirect to="/perfilEmpresa" />
      </Switch>
    </BrowserRouter>
  );
}
