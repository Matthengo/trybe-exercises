import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/Pokedex.css'

import Pokemon from './Pokemon';
import TypesButtonList from './TypeButtonList';

class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
      pokemonType: 'All',
    };

    // Methods - binding 'this'
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemonType = this.filterPokemonType.bind(this);
    this.getPokemons = this.getPokemons.bind(this);
  }

  nextPokemon(pokemonList) {
    this.setState((oldState) => ({
      // Infinitely array uses '% operator' and 'array.length'.
      pokemonIndex: (oldState.pokemonIndex + 1) % pokemonList.length,
    }))
  }

  filterPokemonType(type) {
    this.setState({
      pokemonIndex: 0,
      pokemonType: type,
    })
  }

  getPokemonTypes(pokemonList){
    const pokemonTypes = pokemonList.map((pokemon) => pokemon.type);
    // Set object returns the array without duplicate values
    return ['All', ...new Set(pokemonTypes)];
  }

  getPokemons(pokemonList) {
    const { pokemonType } = this.state;
    return pokemonList.filter((pokemon) => {
      if(pokemonType === 'All') return true;
      return pokemon.type === pokemonType;
    })
  }
  
  render(){
    const { pokemonList } = this.props;
    const { pokemonIndex } = this.state;
    
    const pokemonTypes = this.getPokemonTypes(pokemonList);
    const pokemonByTypeList = this.getPokemons(pokemonList);


    return (
      <section className="Pokedex">
        <section className="Pokemons">
          <Pokemon key={pokemonByTypeList[pokemonIndex].id} pokemonInfos={pokemonByTypeList[pokemonIndex]} />
        </section>
        <button 
          onClick={() => this.nextPokemon(pokemonByTypeList)}
          disabled={pokemonByTypeList.length <= 1}
        >
          Next
        </button>
        {/* Prop clickFunction passes the filterPokemonType to the TypesButtonList component. And inside it, it can pass a parameter and executes the function with a anonymous function. */}
        <TypesButtonList pokemonTypes={pokemonTypes} clickFunction={this.filterPokemonType} />
      </section>
    )
  }
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.object),
}

export default Pokedex