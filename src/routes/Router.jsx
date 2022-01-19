import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Deudores from '../components/Carga';
import Rango from '../components/Rango';
import AppBar from '../components/AppBar';
import Inicio from '../components/Inicio';
import Confirmar from '../components/Confirmar';
function Rutas() {
    return (
        <Router>
            <AppBar />
            <Routes>
                <Route exact path='/apps/deudores' element={<Inicio/>}/>
                <Route exact path='/apps/deudores/carga' element={<Deudores />}/>
                <Route exact path='/apps/deudores/rango' element={<Rango />}/>
                <Route exact path='/apps/deudores/confirmar' element={<Confirmar />}/>

            </Routes>
        </Router>
    )
}

export default Rutas