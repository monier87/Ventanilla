import { Box, Container } from '@mui/material';
import Copyright from '../layout/Copyright';
import '../../css/Footer.css';

const Footer = () => {
    return (
        <Box
            component="footer"
            className="footer-container"
        >
            <Container maxWidth="sm">
                <Copyright />
            </Container>
        </Box>
    );
};

export default Footer;
