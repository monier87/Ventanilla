import MUIDataTable from "mui-datatables";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const InstanceTable = () => {
  const columns = [
    { name: 'id', label: 'ID', options: { width: 20 } },
    { name: 'instanceName', label: 'Nombre de Instancia', options: { width: 200 } },
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
    { id: 1, instanceName: 'Instancia A', description: 'Descripción de la Instancia A' },
    { id: 2, instanceName: 'Instancia B', description: 'Descripción de la Instancia B' },
    
  ];

  const handleAddInstance = () => {
    
    console.log('Add Instance clicked');
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
        <IconButton aria-label="add" onClick={handleAddInstance}>
          <AddIcon />
        </IconButton>
      );
    }
  };

  return (
    <MUIDataTable
      title={"Administración de Instancia"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default InstanceTable;