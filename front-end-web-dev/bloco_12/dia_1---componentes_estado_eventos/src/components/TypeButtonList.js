import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/TypesButtonList.css';

class TypesButtonList extends Component {
  render(){
    const { pokemonTypes, clickFunction } = this.props;

    return (
      <section className='TypesButtonList'>
        {
          pokemonTypes.map((type) => 
            <button key={ type } 
              onClick={() => clickFunction(type)}
            > 
              { type } 
            </button>)
        }
      </section>
    )
  }
}

TypesButtonList.propTypes = {
  pokemonTypes: PropTypes.arrayOf(PropTypes.string),
}

export default TypesButtonList;