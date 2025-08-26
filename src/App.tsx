// Importaciones necesarias
//------------------------------------------------------------
// importar seccion de Layout
import { Layout } from "./components/layout" 
// importar seccion de Hero
import { Hero } from "./components/sections/Hero"

function App() {
  // titulo de la pagina, en este caso Clover
  return <Layout title= "Clover">
    <Hero/>
  </Layout>
}

export default App
