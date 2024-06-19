import  { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Input from '@mui/material/Input';


import '../../../css/InsertarTramite.css';
import configur from '../../../apis/env'



const env = configur.envDev ? configur.dev : configur.prod;
const baseUrl = env.api.base + env.api.ruta.expedientes;

function TramiteForm() {
    const [formData, setFormData] = useState({});
    const [isPrioritario, setIsPrioritario] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false); 

    const handlePrioritarioChange = (e) => {
        setIsPrioritario(e.target.checked);
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const newExpediente = {
                prioritario: isPrioritario,
                nombretramite: formData.nombreexpediente,
                fechaentrada: formData.fechaentrada,
                tipotramite: formData.tipoexpediente,
                destino: formData.destino,
                departamento: formData.departamento,
                ubicacionarchivo: formData.ubicacionarchivo,
                registro: formData.registro,
                fecharegistro: formData.fecharegistro,
                entidad: formData.entidad,
                descripcion: formData.descripcion,
                
            };

            const response = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newExpediente),
            });

            if (response.ok) {
                console.log("Expediente insertado exitosamente");
                setIsPopupVisible(true);

                setFormData({}); // Limpiar el formulario

                setTimeout(() => {
                    setIsPopupVisible(false);
                }, 3000);
            } else {
                console.error("Error al insertar expediente");
            }

        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    const handleCancel = () => {
        setFormData({});
        setIsPrioritario(false);
    };

    return (
        <Card className={"card"}>
            <div style={{ borderBottom: '4px solid #0e9390', marginBottom: '10px' }}></div>
            <div className="container">
                <div className="main-content">
                    <div className="form-container">
                        <form className={"form-item"} noValidate autoComplete="off">
                            <Checkbox
                                checked={isPrioritario}
                                onChange={handlePrioritarioChange}
                            >
                                MARCAR COMO PRIORITARIO
                            </Checkbox>
                            <TextField
                                label="NOMBRE DEL TRAMITE"
                                name="nombreexpediente"
                                value={formData.nombreexpediente || ''}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                required
                            />
                            <Grid container spacing={2}>
                               <Grid item xs={12} sm={6}>
                                    <Select
                                        label="INSTANCIAS "
                                        name="tipoexpediente"
                                        value={formData.tipoexpediente || ''}
                                        onChange={handleChange}
                                        fullWidth
                                        variant="outlined"
                                        required
                                    >
                                    <MenuItem value={1}>Instancia 1</MenuItem>
                                    <MenuItem value={2}>Instancia 2</MenuItem>
                                    <MenuItem value={3}>Instancia 3</MenuItem>
                                    <MenuItem value={3}>Instancia 4</MenuItem>
                                    <MenuItem value={3}>Instancia 5</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                            <TextField
                                label="DEPARTAMENTO"
                                name="departamento"
                                value={formData.departamento || ''}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                required
                            />
                            <TextField
                                label="UBICACION DEL ARCHIVO"
                                name="ubicacionarchivo"
                                value={formData.ubicacionarchivo || ''}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                required
                            />
                        </form>
                    </div>
                    <div className="form-container">
                        <form className={"form-item"} noValidate autoComplete="off">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="NUMERO DE REGISTRO"
                                        name="registro"
                                        value={formData.registro || ''}
                                        onChange={handleChange}
                                        fullWidth
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                              </Grid>
                            <Select
                                label="ENTIDAD"
                                name="entidad"
                                value={formData.entidad || ''}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                            >
                                <MenuItem value={1}>Grupo 1</MenuItem>
                                <MenuItem value={2}>GRupo 2</MenuItem>
                                <MenuItem value={3}>Grupo3</MenuItem>
                               
                            </Select>
                            <TextField
                                label="DESCRIPCION"
                                name="descripcion"
                                value={formData.descripcion || ''}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                multiline
                                rows={5}
                            />
                        </form>
                    </div>
                </div>
                <div className="action">
                    <div className="adjunto">
                        <Input type="file" />
                    </div>
                    <div className="botones">
                        <Button className="button1" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button className="buttonGuardar" onClick={handleSave}>
                            Guardar
                        </Button>
                    </div>
                </div>
            </div>
            {isPopupVisible && (
                <div className="popup">
                    <p>Tramite guardado exitosamente</p>
                </div>
            )}
        </Card>
    );
}

export default  TramiteForm;