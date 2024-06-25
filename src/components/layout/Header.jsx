import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const pages = [
  {
    name: 'Iniciar Trámite', subMenu: [
      { name: 'Registro y Certificaciones', path: '/registro-certificaciones' },
      { name: 'Licencias y Permisos', path: '/licencias-permisos' },
      { name: 'Documentos Personales', path: '/documentos-personales' },
      { name: 'Propiedad', path: '/propiedad' }
    ]
  },
  {
    name: 'Consultas', subMenu: [
      { name: 'Trámites en Proceso', path: '/tramites-en-proceso' },
      { name: 'Trámites Completados', path: '/tramites-completados' },
      { name: 'Mis trámites', path: '/mis-tramites' }
    ]
  },
  {
    name: 'Administración', subMenu: [
      { name: 'Usuario', path: '/usuario' },
      { name: 'Grupos', path: '/grupos' },
      { name: 'Instancias', path: '/instancias' },
      { name: 'Roles', path: '/roles' }
    ]
  },
  {
    name: 'Ayuda', 
  },
];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = React.useState({});
  const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenSubMenu = (event, page) => {
    setAnchorElSubMenu((prev) => ({
      ...prev,
      [page]: event.currentTarget,
    }));
  };

  const handleCloseSubMenu = (page) => {
    setAnchorElSubMenu((prev) => ({
      ...prev,
      [page]: null,
    }));
  };

  const handleOpenAvatarMenu = (event) => {
    setAnchorElAvatar(event.currentTarget);
  };

  const handleCloseAvatarMenu = () => {
    setAnchorElAvatar(null);
  };

  const handleLogout = () => {
   
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333', height: 50 }}>
      <Toolbar disableGutters sx={{ p: 0 }}>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/dashboard" 
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component={Link}
          to="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Box key={page.name} sx={{ position: 'relative' }}>
              {page.subMenu && page.subMenu.length > 0 ? (
                <Button
                  onClick={(event) => handleOpenSubMenu(event, page.name)}
                  sx={{ my: 0, mx: 1, color: 'white' }}
                >
                  {page.name}
                </Button>
              ) : (
                <Button component={Link} to={page.path} sx={{ my: 0, mx: 1, color: 'white' }}>
                  {page.name}
                </Button>
              )}
              {page.subMenu && (
                <Menu
                  anchorEl={anchorElSubMenu[page.name]}
                  open={Boolean(anchorElSubMenu[page.name])}
                  onClose={() => handleCloseSubMenu(page.name)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  {page.subMenu.map((subPage) => (
                    <MenuItem
                      key={subPage.name}
                      onClick={() => handleCloseSubMenu(page.name)}
                      component={Link}
                      to={subPage.path}
                    >
                      <Typography textAlign="center">{subPage.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </Box>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
          <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton onClick={handleOpenAvatarMenu} sx={{ p: 0 }}>
            <Avatar alt="User Name" src="/static/images/avatar/1.jpg" />
          </IconButton>
          <Menu
            id="menu-avatar"
            anchorEl={anchorElAvatar}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElAvatar)}
            onClose={handleCloseAvatarMenu}
          >
            <MenuItem onClick={handleCloseAvatarMenu} component={Link} to="/usuario">Perfil</MenuItem>
            <MenuItem onClick={handleCloseAvatarMenu} component={Link} to="/grupos">Configuración</MenuItem>
            <MenuItem onClick={handleLogout}>Salir</MenuItem>
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
