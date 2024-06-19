import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../../../css/Login.css';


const MisTramites = () => {
  const requests = [
    { id: 1, details: 'Solicitud de Propiedad', Instancia: '3', status: 'En Proceso' },
    { id: 2, details: 'Certificacion de Nacimiento', Instancia: '6',status: 'Completedo' },
    { id: 3, details: 'Solicitud de creacion de empresa', Instancia: '2',status: 'Pendiente' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Detalles</TableCell>
            <TableCell>Instancia</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.id}</TableCell>
              <TableCell>{request.details}</TableCell>
              <TableCell>{request.Instancia}</TableCell>
              <TableCell>{request.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};



export default MisTramites