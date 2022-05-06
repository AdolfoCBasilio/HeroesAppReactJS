import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../Components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/*' element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          } />

          <Route path='/login' element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          } />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
