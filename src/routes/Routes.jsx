import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/modules/Login/Login';
import Dashboard from '../components/modules/Dashboard/Dashboard';
import InsertarTramite from '../components/modules/Tramite/InsertarTramite';
import EditarTramite from '../components/modules/Tramite/EditarTramite';
import TramiteTable from '../components/modules/Tramite/Tramite';
import RegistroUsuario from '../components/modules/RegistroUsuario/RegistroUsuario';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import {DateAdapter} from '@date-io/date-fns';
// import PageTemplate from '../components/PageTemplate/PageTemplate';

function MyRoutes() {
  return (
    <LocalizationProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tramite" element={<TramiteTable />} />
          <Route path="/insertar" element={<InsertarTramite />} />
          <Route path="/editar/:id" element={<EditarTramite />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default MyRoutes;

