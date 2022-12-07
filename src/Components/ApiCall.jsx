import axios from 'axios';
import { useState } from 'react';


 const ApiCall = props => {
    const [pokemon, setPokemon] = useState({});
    axios.get("https://pokeapi.co/api/v2/pokemon/charmander")
        .then(res => setPokemon(res.data))
    return(
        <div>
            <h2>My API Call</h2>
            <img src={pokemon.sprites.front_default} alt="sprite" />
            <h3>Name: {pokemon.name}</h3>
        </div>
    )
 };

 export default ApiCall;