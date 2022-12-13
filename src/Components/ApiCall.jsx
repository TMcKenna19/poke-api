import axios from 'axios';
import { useEffect, useState } from 'react';


//  useEffect is used when you want to code to run only in the initial render of the component.

const ApiCall = () => {
    const [myPokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            console.log(response.data.results)
            setPokemon(response.data.results)
        })
        .catch(err=>{
            console.log(err)
        })

    }, []);
     // ^ keeps from rendering and creating infinit loop 

    return(
        <>
        <h4>Here are your Pokemon</h4>
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