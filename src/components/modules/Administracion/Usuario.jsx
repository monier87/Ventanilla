import { DataGrid } from '@mui/x-data-grid';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import SearchIcon from '@mui/icons-material/Search';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'instanceId', headerName: 'Instance ID', width: 120 },
  { field: 'sectionId', headerName: 'Section ID', width: 120 },
  { field: 'personId', headerName: 'Person ID', width: 120 },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <UpdateIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
      </div>
    ),
  },
];

const rows = [
  { id: 1, username: 'jsnow', name: 'Jon Snow', instanceId: 1, sectionId: 2, personId: 3, email: 'jsnow@example.com' },
  { id: 2, username: 'tyrion', name: 'Tyrion Lannister', instanceId: 1, sectionId: 2, personId: 4, email: 'tyrion@example.com' },
  { id: 3, username: 'arya', name: 'Arya Stark', instanceId: 2, sectionId: 1, personId: 5, email: 'arya@example.com' },
  { id: 4, username: 'robert', name: 'Robert Baratheon', instanceId: 2, sectionId: 1, personId: 6, email: 'robert@example.com' },
];

const Usuario = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
    <TextField
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        sx={{
          '& .MuiTablePagination-select': {
            margin: '0 10px',
          },
        }}
      />
    </div>
  );
};

export default Usuario;