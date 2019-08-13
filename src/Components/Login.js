import React from 'react';
import { useState } from 'react';
import { login } from '../redux/actions';
import { useDispatch } from 'react-redux'

import CueLogo from '../assets/logo.png';

export default function Login(props) {
  const dispatch = useDispatch();
  const [username, updateUsername] = useState(null);
  const [password, updatePassword] = useState(null);

  function openCUE() {
    const win = window.open('https://cue.live', '_blank');
    win.focus();
  }

  return (
    <div className='login-container'>
      <img
        src={ CueLogo }
        className='cue-logo'
        alt='CUE'
        title='Welcome to CUE Music :)'
        onTouchEnd={ () => openCUE() }
        onMouseUp={ () => openCUE() }
      />
      <input
        className='username-input'
        type='text'
        placeholder='Username or Email'
        onChange={ (e) => updateUsername(e.target.value) }
      />
      <input
        className='password-input'
        type='password'
        placeholder='Password'
        onChange={ (e) => updatePassword(e.target.value) }
      />
      <div className='login-button' onClick={ () => dispatch(login(username, password)) }>
        LOGIN
      </div>
    </div>
  );
}
