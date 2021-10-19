/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/globalStyle'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router, Redirect } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs')) /* You only can export dynamically if the element is a default export */

export const App =
  () => {
    const { isAuth } = useContext(Context)
    return (
      <Suspense fallback={<div />}> {/* When you have a lazy element you need to wrap with this label, fallback is use to render an element when the app is waiting for the lazy component */}
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
      </Suspense>
    )
  }
