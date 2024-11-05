import './App.css'
import { CarrinhoProvider } from './Contexts/carrinhoContext';
import { Navbar} from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer';
import { Rotas } from './Routes/Routes';

function App() {

  return (
    <>
    <Navbar />
      <CarrinhoProvider>
        <Rotas />
      </CarrinhoProvider>
    <Footer />
    </>
  )
}

export default App
