import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost' /* It allows make queries as a strings */
export const withPhotos = graphql(gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)
