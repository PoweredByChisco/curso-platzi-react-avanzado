/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './globalStyle'
import { ListOfPhotoCards } from './components/ListOfPhotoCars'

export const App =
 () => (<>
   <GlobalStyle />
   <ListOfCategories />
   <ListOfPhotoCards />
 </>)
