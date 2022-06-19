import { useEffect } from "react"
import PokemonRow from "./PokemonRow"
import {useDispatch, useSelector} from "react-redux"
import {setData} from "../redux/pokemonSlice"

import {Paper, Table, TableHead, TableBody, TableRow, TableCell, TableContainer} from "@mui/material"

const PokemonTable = () => {
    const {data, filter} = useSelector ((state) => state.pokemon)

    const dispatch = useDispatch();

    useEffect(() =>
    {
      fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then(info => dispatch(setData(info))) //despacho acciones => setData
    }, [])    

    if(!data) return <div>Loading...</div>

    return(
        <TableContainer component={Paper} sx={{display:'flex', mt:'2em'}}>
            <Table>

            <TableHead>
                <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center">Actions</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {data.filter(({name: {english}}) => english.toLowerCase().includes(filter.toLowerCase()))
                    .slice(0,13)
                    .map(pokemon => <PokemonRow key={pokemon.id} pokemon={pokemon} />
                )}
            </TableBody>
        </Table>
    </TableContainer>
    )
    
}

export default PokemonTable
