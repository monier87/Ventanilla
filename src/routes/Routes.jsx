import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/modules/Login/Login';
import Dashboard from '../components/modules/Dashboard/Dashboard';
import InsertarTramite from '../components/modules/Tramite/InsertarTramite';
import EditarTramite from '../components/modules/Tramite/EditarTramite';
import TramiteTable from '../components/modules/Tramite/Tramite';
import RegistroUsuario from '../components/modules/RegistroUsuario/RegistroUsuario';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Layout from '../components/layout/Layout';

// Import additional components for submenus
import RegistroCertificaciones from '../components/modules/Tramite/RegistroCertificaciones';
import LicenciasPermisos from '../components/modules/Tramite/LicenciasPermisos';
import DocumentosPersonales from '../components/modules/Tramite/DocumentosPersonales';
import Propiedad from '../components/modules/Tramite/Propiedad';

import TramitesEnProceso from '../components/modules/Consultas/TramitesEnProceso';
import TramitesCompletados from '../components/modules/Consultas/TramitesCompletados';
import MisTramites from '../components/modules/Consultas/MisTramites';

import Usuario from '../components/modules/Administracion/Usuario';
import Grupos from '../components/modules/Administracion/Grupos';
import Instancias from '../components/modules/Administracion/Instancias';
import Roles from '../components/modules/Administracion/Roles';

function MyRoutes() {
  return (
    <LocalizationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/tramite" element={<Layout><TramiteTable /></Layout>} />
          <Route path="/insertar" element={<Layout><InsertarTramite /></Layout>} />
          <Route path="/editar/:id" element={<Layout><EditarTramite /></Layout>} />

          {/* Add routes for "Iniciar Trámite" submenu */}
          <Route path="/registro-certificaciones" element={<Layout><RegistroCertificaciones /></Layout>} />
          <Route path="/licencias-permisos" element={<Layout><LicenciasPermisos /></Layout>} />
          <Route path="/documentos-personales" element={<Layout><DocumentosPersonales /></Layout>} />
          <Route path="/propiedad" element={<Layout><Propiedad /></Layout>} />

          {/* Add routes for "Consultas" submenu */}
          <Route path="/tramites-en-proceso" element={<Layout><TramitesEnProceso /></Layout>} />
          <Route path="/tramites-completados" element={<Layout><TramitesCompletados /></Layout>} />
          <Route path="/mis-tramites" element={<Layout><MisTramites /></Layout>} />

          {/* Add routes for "Administración" submenu */}
          <Route path="/usuario" element={<Layout><Usuario /></Layout>} />
          <Route path="/grupos" element={<Layout><Grupos /></Layout>} />
          <Route path="/instancias" element={<Layout><Instancias /></Layout>} />
          <Route path="/roles" element={<Layout><Roles /></Layout>} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default MyRoutes;
