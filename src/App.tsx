// Importaciones necesarias
//------------------------------------------------------------
// importar seccion de Services
import { Services } from "./components/sections/Services"
// importar seccion de Layout
import { Layout } from "./components/Layout" 
// importar seccion de Hero
import { Hero } from "./components/sections/Hero"
import { AbousUs } from "./components/sections/AbousUs"


function App() {
  // titulo de la pagina, en este caso Clover
  return <Layout title= "Clover">
    <Hero/>
    <Services/>
    <AbousUs/>
  </Layout>
}

export default App
