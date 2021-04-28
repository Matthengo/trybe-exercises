import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pokemon from './Pokemon'

import './styles/Pokedex.css'

class Pokedex extends Component {
  render(){
    const { pokemonList } = this.props;
    return (
      <section className="Pokedex">
        { pokemonList.map((pokemon) => <Pokemon key={pokemon.id} pokemonInfos={pokemon} />) }
      </section>
    )
  }
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.object),
}

export default Pokedex