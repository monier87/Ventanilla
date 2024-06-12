import { Box } from '@mui/material';
import ResponsiveAppBar from '../layout/Header';
import Footer from '../layout/Footer';

const Layout = ({ children }) => { 
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
