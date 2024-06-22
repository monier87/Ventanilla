import MUIDataTable from "mui-datatables";

const Usuario = () => {
  const columns = [
    { name: 'id', label: 'ID', options: { width: 90 } },
    { name: 'username', label: 'Nombre Usuario', options: { width: 150 } },
    { name: 'name', label: 'Nombre', options: { width: 150 } },
    { name: 'instanceId', label: 'Instancia ID', options: { width: 120 } },
    { name: 'sectionId', label: 'Seccion ID', options: { width: 120 } },
    { name: 'personId', label: 'Persona ID', options: { width: 120 } },
    { name: 'rolId', label: 'Rol ID', options: { width: 120 } },
    { name: 'email', label: 'Email', options: { width: 200 } }
  ];

  const data = [
    { id: 1, username: 'Yanet', name: 'Yanet Toledo', instanceId: '1234', sectionId: '5678', personId: '9876', rolId: '4', email: 'yanet@example.com' },
    { id: 2, username: 'Pavel', name: 'Pavel Rivera', instanceId: '5678', sectionId: '4321', personId: '6543', rolId: '2', email: 'pavel@example.com' },
    { id: 3, username: 'David', name: 'Carlos Monier', instanceId: '6734', sectionId: '2316', personId: '6543', rolId: '4', email: 'david@example.com' },
    { id: 4, username: 'Admin', name: 'Administrador', instanceId: '5678', sectionId: '4321', personId: '6543', rolId: '5', email: 'admin@example.com' },
];

  const options = {
    filterType: 'checkbox',
    selectableRows: 'multiple',
    resizableColumns: true,
    download: true,
    print: true,
    rowsPerPageOptions: [5, 10, 15],
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
      title={"Tabla de Usuarios"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default Usuario;