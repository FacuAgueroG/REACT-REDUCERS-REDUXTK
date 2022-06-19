import {TextField} from "@mui/material"
import React from 'react'
import { useDispatch } from "react-redux/es/exports"
import {setFilter} from "../redux/pokemonSlice"

const PokemonFilter = () =>
{
    const dispatch = useDispatch();

    return(
        //dentro del dispatch mando el type y el payload
        <TextField label ="Find..." variant="filled" onChange={(e) => dispatch(setFilter(e.target.value))}/>
    )
}

export default PokemonFilter