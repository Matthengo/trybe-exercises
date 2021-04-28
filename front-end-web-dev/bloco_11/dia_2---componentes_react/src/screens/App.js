import './App.css';

import Pokemon from '../components/Pokemon'

function App() {
  const TEMP = {
    id: 25,
    name: "Pikachu",
    type: 'Electric',
    averageWeight: {
      value: 6.0,
      measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
  }
  
  return (
    <section className="App">
      <Pokemon pokemonInfos={TEMP}/>
    </section>
  );
}

export default App;
