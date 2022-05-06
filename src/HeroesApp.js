import React from 'react'
import { useReducer, useEffect } from 'react'
import { AuthContext } from './auth/authContext'
// import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'
import { authReducer } from './auth/authReducer'

const init = () => {//!cambio de alcance
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    if(!user)return;
    localStorage.setItem('user',JSON.stringify(user));
  }, [user])


  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
