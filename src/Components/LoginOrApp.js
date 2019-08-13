import React from 'react';
import { useSelector } from 'react-redux'
import Login from './Login';
import App from './App';

export default function LoginOrApp(props) {
  const session = useSelector(state => state.app.session);
  return session && session.token ? (<App />) : (<Login />);
}
