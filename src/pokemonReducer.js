const pokemonReducer= (state, action) => {
    switch(action.type){
      case 'SET_FILTER':  //Dispatch
        return{ //payload
          ...state, //valor actual
          filter: action.payload //valor nuevo
        }
  
        case 'SET_DATA': 
        return{
          ...state, //valor actual
          data: action.payload //valor nuevo
        }
  
        case 'SET_SELECTED_POKEMON': 
        return{
          ...state, //valor actual
          selectedPokemon: action.payload //valor nuevo
        }
        default:
        state
        
    }
}

export default pokemonReducer