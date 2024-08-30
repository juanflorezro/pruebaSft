import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Navigation } from "./components/navigation"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Procesos } from "./pages/procesos"
import { Calendario } from "./pages/calendario"
import { FlujoTrabajo } from "./pages/flujoTrabajo"
import { Tareas } from "./pages/tareas"

function App() {

  return (
    <BrowserRouter>
      <ValidateNav />
      <Routes>
        <Route path="/" element = {<Login />}/>
        <Route path="/home" element = {<Home />}/>
        <Route path="/procesos" element = {<Procesos />}/>
        <Route path="/tareas" element = {<Tareas />}/>
        <Route path="/calendario" element = {<Calendario />}/>
        <Route path="/flujodetrabajo" element = {<FlujoTrabajo />}/>
      </Routes>
    </BrowserRouter>
  )
}

const ValidateNav = () => {
  const location  = useLocation()
  
  if(location.pathname === '/' || location.pathname === '/login'){
    return null
  }
  
  return <Navigation />
}

export default App
