import { Typography } from '@mui/material';

const Copyright = () => {
  return (
    <>
      <Typography variant="body2" color="#ffffff" align="center">
        {'Ventanilla de Atención Virtual'}
      </Typography>
      <Typography variant="body2" color="#ffffff" align="center">
        {'Copyright ©'} {new Date().getFullYear()} {'Todos los derechos reservados'}
      </Typography>
    </>
  );
};

export default Copyright;
