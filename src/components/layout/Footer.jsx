import { Box, Typography, Container } from '@mui/material';
import Copyright from '../layout/Copyright';
import '../../css/Footer.css'

const Footer = () => {
    return (
        <Box
            component="footer"
            className="footer-container" // Aplicamos la clase para el contenedor del footer
        >
            <Container maxWidth="sm">
                <Typography variant="body2" className="footer-text"> {/* Usamos body2 para un tamaño de texto más pequeño */}
                    <Copyright />
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
