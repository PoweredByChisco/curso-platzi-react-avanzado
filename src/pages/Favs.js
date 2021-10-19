import React from 'react'
import { FavsWithQuery } from '../container/getFavorites'
import { Layout } from '../components/Layout'

export default ({ id }) => (
  <Layout title='Your favorites' subtitle='You can find your favorites photos here'>
    <FavsWithQuery id={id} />
  </Layout>
)
