import './styles/App.css';
import Pokedex from '../components/Pokedex';
import pokemonData from '../data/pokemonData';


function App() {
  
  return (
    <section className="App">
      <Pokedex pokemonList={pokemonData} />
    </section>
  );
}

export default App;
