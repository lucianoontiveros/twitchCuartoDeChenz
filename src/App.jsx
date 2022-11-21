import LayoutPublic from './componenetes/layout/layaou'
import { Routes, Route } from 'react-router-dom'
import Tarjetas from './Pages/Tarjetas'

function App() {


  return (
      <>
        <Routes>
          <Route path="/" element={<LayoutPublic/>}>
            <Route  element={<Tarjetas />} path="/"></Route>
          </Route>
        </Routes>
      </>
  )
}

export default App
