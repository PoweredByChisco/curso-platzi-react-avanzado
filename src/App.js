/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/globalStyle'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'

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
            ? <h1> Detail Id {detailId}</h1>
            : <>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={6} />
            </>
        }

      </>
    )
  }
