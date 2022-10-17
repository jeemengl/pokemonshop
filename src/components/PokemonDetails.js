import React, {useState, useEffect} from 'react'
import {useLocation, NavLink} from 'react-router-dom'
import axios from 'axios'

export function PokemonDetails(){
    const location = useLocation();
    const [ pokemon, setPokemon ] = useState();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2${location.pathname}`).then(function(res){
            setPokemon(res.data.name) 
        })
        
    }, [])

    return (
        <div className="item"> 
            <div className="content">
                <h1>{pokemon}</h1>
                <button>Add to Cart</button>
                <NavLink to='/store'><button>Back to Store</button></NavLink>
            </div>
        </div>

    )
}