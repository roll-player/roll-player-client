import gql from 'graphql-tag'

export const GamesQuery= gql`
query GamesQuery {
  games {
    id
    name
    description
    owner
  }
}`

export const CreateGameMutation = gql`
    mutation CreateGame($name: String!, $description: String!) {
        createGame(name: $name, description: $description) {
            id
            name
            description
        }
    }
`