import LayoutPublic from './componenetes/layout/layaou'
import { Routes, Route } from 'react-router-dom'
import Tarjetas from './Pages/Tarjetas'
import Footer from './componenetes/footer'

function App() {


  return (
      <>
        <Routes>
          <Route path="/" element={<LayoutPublic/>}>
            <Route  element={<Tarjetas />} path="/"></Route>
          </Route>
        </Routes>
        <Footer />
      </>
  )
}

export default App
