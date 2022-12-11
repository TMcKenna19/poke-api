import axios from 'axios';
import { useEffect, useState } from 'react';


const ApiCall = () => {
    const [myPokemon, setPokemon] = useState([]);
    const getPokemon = () =>{
        console.log("Pika");
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=877").then(response => {
            console.log(response);
            return response.data;
        }).then(response =>{
            console.log(response.results);
            setPokemon(response.results)
        })
        .catch(err => {
            console.log(err);
        });
    }

    return(
        <>
        <h4>Here are your Pokemon</h4>
        <button type='button' className='btn btn-outline-dark  mt-2' onClick={getPokemon}>I choose you</button>
        {
            myPokemon.map((pokemon, j)=>{
                return(
                    <div key={j}>
                        <h3>{pokemon.name}</h3>
                    </div>
                )
            })
        }
        </>
    )
 };

 export default ApiCall;