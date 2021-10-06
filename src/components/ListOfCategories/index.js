import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()

  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
    /* This is for clean the addEventListener when the component will dismount */
  }, [showFixed]) /* ShowFixed as second parameter cause only you want to run the useEffect when this parameter is modified */

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? <Item key='loading'><Category /></Item> : categories.map(item => <Item key={item.id}><Category {...item} path={`/pet/${item.id}`} /></Item>)}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
