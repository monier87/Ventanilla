import { Box, Typography, Container } from '@mui/material';
import Copyright from '../layout/Copyright';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: '#0e9390',
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h6" align="center" gutterBottom>
                <Copyright />
                </Typography>
                
            </Container>
        </Box>
    );
};

export default Footer;

