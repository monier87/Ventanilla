import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/modules/Login/Login';
import Dashboard from '../components/modules/Dashboard/Dashboard';
import InsertarTramite from '../components/modules/Tramite/InsertarTramite';
import EditarTramite from '../components/modules/Tramite/EditarTramite';
import TramiteTable from '../components/modules/Tramite/Tramite';
import RegistroUsuario from '../components/modules/RegistroUsuario/RegistroUsuario';
// import PageTemplate from '../components/PageTemplate/PageTemplate';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import 'dayjs/locale/de';

function MyRoutes() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expedientes" element={<TramiteTable />} />
          <Route path="/insertar" element={<InsertarTramite />} />
          <Route path="/editar/:id" element={<EditarTramite />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    // </LocalizationProvider>
  );
}

export default MyRoutes;

