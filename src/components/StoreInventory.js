import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { NavBarBottom } from './NavbarBottom';

export function StoreInventory(){
    const [ currentUrl, setCurrentUrl ] = useState("https://pokeapi.co/api/v2/pokemon")
    const [ pokemon, setPokemon ] = useState([]); 
    const [ nextUrl, setNext ] = useState();
    const [ previousUrl, setPrevious ] = useState();

    let navigate = useNavigate();

    useEffect(()=>{
        const controller = new AbortController();
        let pokemonList = "";
        axios.get(currentUrl).then( res => {
            const results = res.data.results;
            console.log(results)
            for(const result of results){
                pokemonList = <>{pokemonList} <button id={result.name} onClick={function(){
                    let path = `${result.url.match(/v2(.*$)/)[1]}`; 
                    navigate(path);
                }}>{result.name}</button></>
            }
            setPokemon(pokemonList)
            setNext(res.data.next)
            setPrevious(res.data.previous)
        })

        controller.abort()

    }, [currentUrl])




    function gotoNextPage(){
        setCurrentUrl(nextUrl)
    }

    function gotoPreviousPage(){
        setCurrentUrl(previousUrl)
    }

    return (
        <>
            <div>{pokemon}</div>
            <NavBarBottom gotoNextPage={gotoNextPage} gotoPreviousPage={gotoPreviousPage}></NavBarBottom>
        </>

    )
 
}
    