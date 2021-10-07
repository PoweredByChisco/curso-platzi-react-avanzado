import React from 'react'
import ReactDOM from 'react-dom'
import Context from './Context'
import { App } from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://petgram-server-fco.vercel.app/graphql'
}) /* Graphql should be installed in the api server to that will be abble  */

const container = document.getElementById('app')

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  ,
  container)
