import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const LanguageMenu = ( anchorEl, onClose ) => {
  const handleLanguageSelect = (language) => {
    
    console.log(`Seleccionaste el idioma: ${language}`);
    onClose();
  };

  return (
    <Menu
      id="language-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem onClick={() => handleLanguageSelect('Español')}>Español</MenuItem>
      <MenuItem onClick={() => handleLanguageSelect('Inglés')}>Inglés</MenuItem>
    </Menu>
  );
};

export default LanguageMenu;
