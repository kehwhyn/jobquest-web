import React from "react";

import { AsyncTrunk } from "mobx-sync";
import { useAuth } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import UserRoutes from "./user.routes";
import CompanyRoutes from "./company.routes";
import Stores from "../stores";

const routesByProfile = {
  auth: <AuthRoutes />,
  user: <UserRoutes />,
  admin: "",
  company: <CompanyRoutes />,
  anonimo: <AuthRoutes />,
};

function Routes() {
  const { user } = useAuth();

  const trunk = new AsyncTrunk(Stores, {
    storage: sessionStorage,
    storageKey: "jobquest_session_storage",
    delay: 1e3,
  });

  /**
   * @desc load persisted stores
   */
  trunk.init().then(() => {
    // const StoragedStores = JSON.parse(trunk.storage.jobquest_session_storage)
    //carregar os dados sincronizados na storage de volta para as stores...
  });

  return routesByProfile[user ? user.userData.tipo_usuario : "auth"];
}

export default Routes;
