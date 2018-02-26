import React from 'react'
import { Link } from 'react-router-dom'
import styles from './GameCard.css'

const GameCard = ({ game }) => (
    <div className={styles.gameCardContainer}>
        <div>{game.name}</div>
        <div>{game.description}</div>
        <Link to={`/table/${game.id}`}>Join Game</Link>
    </div>
)

export default GameCard