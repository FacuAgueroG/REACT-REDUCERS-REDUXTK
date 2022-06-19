import './App.css'

import PokemonFilter from './components/PokemonFilter'
import PokemonInfo from './components/PokemonInfo'
import PokemonTable from './components/PokemonTable'

function App() {

  return (
    <div style={{margin:"auto", display:"flex", flexDirection:"column", width: "60vw"}}>
      <h1>Pokemon finder</h1>
      <PokemonFilter />
      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        alignItems: "center",
        gridColumnGap: "3rem"
      }}>
        <PokemonTable />
        <PokemonInfo />
      </div>
    </div>
  )
}

export default App


