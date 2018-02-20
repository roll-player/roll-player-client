import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const SpellList = ({ data: { loading, error, spells }}) => {
  if (loading) {
    return <p>Loading Spells...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const SpellsDom = spells.map(spell => (<li key={spell.id}>{spell.name}</li>))

  return (
    <div className="App">
      <ul>
        {SpellsDom}
      </ul>
    </div>
  );
}

export default graphql(gql`
query SpellsQuery {
  spells {
    name
    description
    level
  }
}
`)(SpellList)