import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { GamesQuery } from './queries'
import CreateGame from './CreateGame'
import GameCard from './GameCard'

const App = ({ data: { loading, error, games }}) => {
  if (loading) {
    return <p>Loading Available Games...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  let gamesDom = null 
  if (games) {
    gamesDom = games.map(game => (<GameCard key={game.id} game={game} />))
  }

  return (
    <div className="App">
      <CreateGame />
      <ul>
        {gamesDom}
      </ul>
    </div>
  );
}

export default graphql(GamesQuery)(App)