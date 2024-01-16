import './App.css'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoPeliculas } from './components/ListadoPeliculas'

function App() {
  return (
    <>
    <div className='container mx-auto mt-3 h-screen'>
    <Header></Header>
      <div className='mt-12 md:flex'>
        <Formulario></Formulario>
        <ListadoPeliculas></ListadoPeliculas>
      </div>
    </div>
    </>
  )
}

export default App
