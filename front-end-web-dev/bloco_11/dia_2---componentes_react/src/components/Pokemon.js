import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/Pokemon.css';

class Pokemon extends Component {
  render(){
    const {
      pokemonInfos: {
        name,
        type,
        averageWeight: {
          value: weightValue,
          measurementUnit
        },
        image
      }
    } = this.props;
    return (
      <section className='Pokemon'>
        <section className="Pokemon__info">
          <p>{ name }</p>
          <p className={`type-${type}`}>{ type }</p>
          <p>Average Weight: { weightValue } { measurementUnit }</p>
        </section>
        <section className="Pokemon__img">
          <img src={image} alt={name} />
        </section>
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemonInfos: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
    }),
    image: PropTypes.string,
  })
}

export default Pokemon;