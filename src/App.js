import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <ReactNotification />
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
