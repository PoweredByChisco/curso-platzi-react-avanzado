import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = (props) => {
  const { data: { photos = [] } } = props
  return (
    <ul>
      {photos.map(item => <PhotoCard key={item.id} {...item} />)}
    </ul>
  )
}
/* This pattern is a higher-order component  */
