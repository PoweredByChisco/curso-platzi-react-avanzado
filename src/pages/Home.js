import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => (
  <Layout title='Your pet photos app' subtitle='With Petgram you can find beautiful pet photos'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
)
