import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Card, CardContent } from '@mui/material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const tramitesData = [
  { instancia: 'Instancia 1', recibido: 10, creado: 5, aprobado: 2 },
  { instancia: 'Instancia 2', recibido: 7, creado: 3, aprobado: 1 },
  { instancia: 'Instancia 3', recibido: 14, creado: 8, aprobado: 6 },
];

const comportamientoData = [
  { name: 'Activo', value: 400 },
  { name: 'En Proceso', value: 300 },
  { name: 'Priorizado', value: 300 },
];

const tramitesPorEstadoData = [
  { name: 'Por procesar', value: 100 },
  { name: 'No aprobado', value: 50 },
  { name: 'En proceso', value: 150 },
  { name: 'Creado', value: 200 },
  { name: 'Aprobado', value: 250 },
];

const COLORS = ['#0088FE', '#FF8042', '#00C49F'];
const BARS = [
  { color: '#0088FE', name: 'Por procesar' },
  { color: '#FF0000', name: 'No aprobado' },
  { color: '#FF8042', name: 'En proceso' },
  { color: '#8A2BE2', name: 'Creado' },
  { color: '#00C49F', name: 'Aprobado' },
];

function Dashboard() {
  return (
    <Container>
      <Typography variant="h5" gutterBottom style={{ color: 'green', textAlign: 'center' }}>
        TRÁMITES POR INSTANCIAS SEGÚN ESTADO
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Instancia</TableCell>
              <TableCell>Recibido</TableCell>
              <TableCell>Creado</TableCell>
              <TableCell>Aprobado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tramitesData.map((row) => (
              <TableRow key={row.instancia}>
                <TableCell>{row.instancia}</TableCell>
                <TableCell>{row.recibido}</TableCell>
                <TableCell>{row.creado}</TableCell>
                <TableCell>{row.aprobado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid item xs={12} md={6}>
          <Card style={{ boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)', height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom style={{ color: 'green', textAlign: 'center' }}>
                COMPORTAMIENTO DE LOS TRÁMITES
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <PieChart width={650} height={400}>
                  <Pie
                    data={comportamientoData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {comportamientoData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card style={{ boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)', height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom style={{ color: 'green', textAlign: 'center' }}>
                TRÁMITES POR ESTADOS
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BarChart
                  width={500}
                  height={300}
                  data={tramitesPorEstadoData}
                  margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {BARS.map((bar) => (
                    <Bar key={bar.name} dataKey="value" name={bar.name} fill={bar.color} />
                  ))}
                </BarChart>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
