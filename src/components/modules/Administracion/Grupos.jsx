import MUIDataTable from "mui-datatables";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UpdateIcon from '@mui/icons-material/Update';
import AddIcon from '@mui/icons-material/Add';

const GroupTable = () => {
  const columns = [
    { name: 'id', label: 'ID', options: { width: 90 } },
    { name: 'name', label: 'Nombre de Grupo', options: { width: 200 } },
    { name: 'description', label: 'Descripción', options: { width: 300 } },
    { name: 'members', label: 'Miembros', options: { width: 150 } },
    {
      name: 'actions',
      label: 'Acciones',
      options: {
        customBodyRender: () => (
          <div>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="update">
              <UpdateIcon />
            </IconButton>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </div>
        ),
        width: 150
      }
    }
  ];

  const data = [
    { id: 1, name: 'Adminstradores', description: 'Administrators Group', members: 5 },
    { id: 2, name: 'Usuarios', description: 'Regular Users Group', members: 50 },
    { id: 3, name: 'Consultores', description: 'Administrators Group', members: 6 },
    { id: 4, name: 'Usuarios Avanzados', description: 'Regular Users Group', members: 8 },
   
   
  ];

  const handleAddGruop = () => {
    
    console.log('Add Group clicked');
  };

  const options = {
    filterType: 'checkbox',
    selectableRows: 'multiple',
    resizableColumns: true,
    download: true,
    print: true,
    rowsPerPageOptions: [5, 10, 15],
    responsive: 'vertical',
    customToolbar: () => {
      return (
        <IconButton aria-label="add" onClick={handleAddGruop}>
          <AddIcon />
        </IconButton>
      );
    }
  };

  return (
    <MUIDataTable
      title={"Administración de Grupos"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default GroupTable;