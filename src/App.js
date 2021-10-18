/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react'
import { GlobalStyle } from './styles/globalStyle'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router, Redirect } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

export const App =
  () => {
    const { isAuth } = useContext(Context)
    return (
      <>
        <GlobalStyle />
        <Logo />
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <NotRegisteredUser path='/login' />}
          {!isAuth && <Redirect from='/favs' to='/login' />}
          {!isAuth && <Redirect from='/user' to='/login' />}
          {isAuth && <Redirect from='/login' to='/' />}
          <Favs path='/favs' />
          <User path='/user' />
        </Router>
        <NavBar />
      </>
    )
  }
