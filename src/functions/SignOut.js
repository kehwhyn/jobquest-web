import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

const history = useHistory();
const { signOut } = useAuth();

function handleSignOut() {
  history.push('/');
  signOut();
}

export default handleSignOut;