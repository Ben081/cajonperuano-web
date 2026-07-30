import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Proyecto from './components/Proyecto'
import Album from './components/Album'
import Metodologia from './components/Metodologia'
import Cronograma from './components/Cronograma'
import EquipoAliados from './components/EquipoAliados'
import Donadores from './components/Donadores'
import Footer from './components/Footer'
import DonarModal from './components/DonarModal'
import ConvocatoriaModal from './components/ConvocatoriaModal'
import Convocatoria from './components/Convocatoria'

function App() {
  const [donarOpen, setDonarOpen] = useState(false)
  const [convocatoriaOpen, setConvocatoriaOpen] = useState(false)
  const [donantes, setDonantes] = useState([])

  function handleDonacionCompletada(donante) {
    setDonantes((prev) => [donante, ...prev])
  }

  return (
    <div className="min-h-screen">
      <Header onDonar={() => setDonarOpen(true)} onConvocatoria={() => setConvocatoriaOpen(true)} />
      <Hero onDonar={() => setDonarOpen(true)} />
      <Proyecto />
      <Album />
      <Metodologia />
      <Cronograma />
      <EquipoAliados />
      <Donadores donantes={donantes} />
      <Convocatoria />
      <Footer />

      <DonarModal
        open={donarOpen}
        onClose={() => setDonarOpen(false)}
        onDonacionCompletada={handleDonacionCompletada}
      />
      <ConvocatoriaModal open={convocatoriaOpen} onClose={() => setConvocatoriaOpen(false)} />
    </div>
  )
}

export default App
