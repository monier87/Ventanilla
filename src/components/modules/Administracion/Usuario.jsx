import MUIDataTable from "mui-datatables";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UpdateIcon from '@mui/icons-material/Update';
import AddIcon from '@mui/icons-material/Add';

const Usuario = () => {
  const columns = [
    { name: 'id', label: 'ID', options: { width: 90 } },
    { name: 'username', label: 'Nombre Usuario', options: { width: 150 } },
    { name: 'name', label: 'Nombre', options: { width: 150 } },
    { name: 'instanceId', label: 'Instancia ID', options: { width: 120 } },
    { name: 'sectionId', label: 'Seccion ID', options: { width: 120 } },
    { name: 'personId', label: 'Persona ID', options: { width: 120 } },
    { name: 'rolId', label: 'Rol ID', options: { width: 120 } },
    { name: 'email', label: 'Email', options: { width: 200 } },
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
    { id: 1, username: 'Yanet', name: 'Yanet Toledo', instanceId: '1234', sectionId: '5678', personId: '9876', rolId: '4', email: 'yanet@example.com' },
    { id: 2, username: 'Pavel', name: 'Pavel Rivera', instanceId: '5678', sectionId: '4321', personId: '6543', rolId: '2', email: 'pavel@example.com' },
    { id: 3, username: 'David', name: 'Carlos Monier', instanceId: '6734', sectionId: '2316', personId: '6543', rolId: '4', email: 'david@example.com' },
    { id: 4, username: 'Admin', name: 'Administrador', instanceId: '5678', sectionId: '4321', personId: '6543', rolId: '5', email: 'admin@example.com' },
  ];

  const handleAddUser = () => {
    // Add logic to handle adding a new user
    console.log('Add User clicked');
  };

  const options = {
    filterType: 'checkbox',
    selectableRows: 'multiple',
    resizableColumns: true,
    download: true,
    print: true,
    rowsPerPageOptions: [5, 10, 15],
    customToolbar: () => {
      return (
        <IconButton aria-label="add" onClick={handleAddUser}>
          <AddIcon />
        </IconButton>
      );
    },
    expandableRows: true,
    renderExpandableRow: () => {
      return (
        <div>
          <p>Detalles</p>
        </div>
      );
    }
  };

  return (
    <MUIDataTable
      title={"Administración de Usuarios"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default Usuario;