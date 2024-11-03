import './App.css'
import { CarrinhoProvider } from './Contexts/carrinhoContext';

import { Rotas } from './Routes/Routes';

function App() {

  return (
    <>
      <CarrinhoProvider>
        <Rotas />
      </CarrinhoProvider>

    </>
  )
}

export default App
