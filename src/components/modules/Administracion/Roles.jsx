
import MUIDataTable from "mui-datatables";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const RoleTable = () => {
  const columns = [
    { name: 'id', label: 'ID', options: { width: 90 } },
    { name: 'roleName', label: 'Nombre de Rol', options: { width: 200 } },
    { name: 'description', label: 'Descripción', options: { width: 300 } },
    {
      name: 'actions',
      label: 'Acciones',
      options: {
        customBodyRender: () => (
          <div>
            <IconButton aria-label="delete">
              <DeleteIcon />
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
    { id: 1, roleName: 'Admin', description: 'Administrator Role' },
    { id: 2, roleName: 'User', description: 'Regular User Role' },
  ];

  const handleAddRoles = () => {
    
    console.log('Add Roles clicked');
  };


  const options = {
    filterType: 'checkbox',
    selectableRows: 'multiple',
    resizableColumns: true,
    download: true,
    print: true,
    rowsPerPageOptions: [5, 10, 15],
    responsive: 'horizontal',
    customToolbar: () => {
      return (
        <IconButton aria-label="add" onClick={handleAddRoles}>
          <AddIcon />
        </IconButton>
      );
    }
  };

  return (
    <MUIDataTable
      title={"Administración de Roles"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default RoleTable;