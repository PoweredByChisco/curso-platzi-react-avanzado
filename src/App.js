/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { GlobalStyle } from './styles/globalStyle'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const App =
  () => {
    return (
      <>
        <GlobalStyle />
        <Logo />
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
        </Router>
        <UserLogged>
          {
            ({ isAuth }) =>
              isAuth
                ? <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
                : <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
          }
        </UserLogged>
        <NavBar />
      </>
    )
  }
