import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
  // console.log('LOGINSCREEN')
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: 'adolfo' }
    }
    dispatch(action)

    const lastPath=localStorage.getItem('lastPath')||'/Marvel'

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className='container mt-5'>
      <h1>LoginScreen</h1>
      <hr />

      <button className='btn btn-primary'
        onClick={handleLogin}
      >
        login
      </button>
    </div>
  )
}
