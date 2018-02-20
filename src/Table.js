import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Table = ({ data: { loading, error, table }}) => {
  if (loading) {
    return <p>Loading Table...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div className="App">
      <ul>
        {table.name}
      </ul>
    </div>
  )
}

export default graphql(gql`
query TableQuery($id: Int!) {
  table(id: $id) {
    name
  }
}`, { options: ({ match: { params: { id } } }) => ({ variables: { id } }) })(Table)






