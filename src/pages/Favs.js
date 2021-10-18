import React from 'react'
import { FavsWithQuery } from '../container/getFavorites'

export const Favs = ({ id }) => (
  <>
    <h1>Favs</h1>
    <FavsWithQuery id={id} />
  </>
)
