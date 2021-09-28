import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await window.fetch(
        'https://petgram-server-fco-o0ywu3gts-poweredbychisco.vercel.app/categories'
      )
      const data = await response.json()
      setCategories(data)
    }

    fetchCategories()
  }, []) /* The second parameter is for that the hook run when the component mount  */

  return (
    <List>
      {categories.map(item => <Item key={item.id}><Category {...item} /></Item>)}
    </List>
  )
}
