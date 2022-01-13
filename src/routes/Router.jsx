import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Deudores from '../components/Test';
import Rango from '../components/Rango';
import AppBar from '../components/AppBar';
import Inicio from '../components/Inicio';
function Rutas() {
    return (
        <Router>
            <AppBar />
            <Routes>
                <Route exact path='/apps/deudores' element={<Inicio/>}/>
                <Route exact path='/apps/deudores/carga' element={<Deudores />}/>
                <Route exact path='/apps/deudores/rango' element={<Rango />}/>
            </Routes>
        </Router>
    )
}

export default Rutas