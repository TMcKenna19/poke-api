import axios from 'axios';
import { useEffect, useState } from 'react';


 const ApiCall = props => {
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            .then(res => setPokemon(res.data))
    }, [])
     // ^ this is called a dependency array, any time somthing in the array is changed, it triggers useEffect. If forgotten useEffect will call infinitely. 
    return(
        <div className='form-control' >
            <h4>Catch them all</h4>
            {
                pokemon ? <>
                <img src={pokemon.sprites.front_default} alt="sprite" />
                <h5>{pokemon.name}</h5>
                </> : ""
            }
            <button type="button" className="btn btn-outline-dark mt-2 mb-2">Fetch Pokemon</button>
        </div>

    )
 };

 export default ApiCall;