import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import mock from '../../mock'

export const ListOfCategories = () => {
  const { categories } = mock
  console.log(categories)
  return (
    <List>
      {categories.map(item => <Item key={item.id}><Category {...item} /></Item>)}
    </List>
  )
}
