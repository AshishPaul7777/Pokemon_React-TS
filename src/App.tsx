import { Routes,Route} from "react-router-dom"
import { PokemonPage } from "./Features/Pokemon/PokemonPage"
import { PokemonDetailsPage } from "./Features/Pokemon/PokemonDetailsPage"
const App = () => {
    return (
        
      <Routes>
        <Route path="/" element={<PokemonPage />} />
        <Route
          path="/pokemon/:id"
          element={<PokemonDetailsPage />}
        />
      </Routes>

    )
  }
  
  export default App