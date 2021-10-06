/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { GlobalStyle } from './styles/globalStyle'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Router } from '@reach/router'

export const App =
  () => {
    const urlParams = new window.URLSearchParams(window.location.search) /* window.location.search obtains the query string of the url */
    const detailId = urlParams.get('detail') /* Obtained the query */

    return (
      <>
        <GlobalStyle />
        <Logo />
        {
          detailId
            ? <PhotoCardWithQuery id={detailId} />
            : <Router>
              <Home path='/' />
              <Home path='/pet/:id' />
            </Router>
        }

      </>
    )
  }
