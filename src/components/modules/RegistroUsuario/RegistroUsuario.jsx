import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Alert,
    InputAdornment,
    InputLabel,
    IconButton,
    FormControl,
    OutlinedInput,
    TextField
} from '@mui/material';
import {
    Mail as MailIcon,
    PeopleAlt as PeopleAltIcon,
    LocalPhone as LocalPhoneIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon,
    Key as KeyIcon
} from '@mui/icons-material';

import '../../../css/RegistroUsuario.css';
import configur from '../../../apis/env';
import useForm from '../../../hooks/useForm';

// Obtener la configuración del entorno
const env = configur.envDev ? configur.dev : configur.prod;
const baseUrl = env.api.base + env.api.ruta.registro;

const RegistroUsuario = () => {
    const navigate = useNavigate();

    // Usa el hook useForm
    const { values, error, handleChange, handleClickShowPassword, handleClickShowConfirmPassword, handleMouseDownPassword, setError } = useForm({
        nombres: "",
        apellido1: "",
        apellido2: "",
        nombreUsuario: "",
        correo: "",
        telefono: "",
        password: "",
        confirmPassword: "",
        showPassword: false, // Cambiar a false para mostrar la contraseña por defecto
        showConfirmPassword: false, // Cambiar a false para mostrar la confirmación de contraseña por defecto
    });

    const registrarUsuario = () => {
        const { nombres, apellido1, apellido2, nombreUsuario, correo, telefono, password, confirmPassword } = values;
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        axios.post(baseUrl, {
            nombres,
            apellido1,
            apellido2,
            nombreUsuario,
            correo,
            telefono,
            password
        })
            .then(resp => {
                console.log(resp);
                if (resp.data.type === 'Success') {
                    setError('');
                    console.log(resp.data.msg);
                    navigate('/login');
                } else {
                    setError(resp.data.msg);
                    console.log(resp.data.msg);
                }
            })
            .catch(error => {
                alert(error);
                console.log(error);
            });
    };

    const cancelarRegistro = () => {
        navigate('/');
    };

    useEffect(() => {
        // agregar cualquier efecto secundario que se necesite
    }, []);

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-form">
                    <div className="login-identy">
                        <div className="login-title">
                            <h6>REGISTRARSE EN EL SISTEMA</h6>
                        </div>
                    </div>
                    {error && <Alert severity="error">{error}</Alert>}
                    <div className="form-group">
                        <div className="form-field">
                            <label className="form-label">
                                <PeopleAltIcon className="form-icon" />Nombres
                            </label>
                            <TextField
                                variant="outlined"
                                className="form-control"
                                name="nombres"
                                value={values.nombres}
                                onChange={handleChange("nombres")}
                                fullWidth
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">
                                <PeopleAltIcon className="form-icon" />Primer Apellido
                            </label>
                            <TextField
                                variant="outlined"
                                className="form-control"
                                name="apellido1"
                                value={values.apellido1}
                                onChange={handleChange("apellido1")}
                                fullWidth
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">
                                <PeopleAltIcon className="form-icon" />Segundo Apellido
                            </label>
                            <TextField
                                variant="outlined"
                                className="form-control"
                                name="apellido2"
                                value={values.apellido2}
                                onChange={handleChange("apellido2")}
                                fullWidth
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">
                                <PeopleAltIcon className="form-icon" />Nombre de Usuario
                            </label>
                            <TextField
                                variant="outlined"
                                className="form-control"
                                name="nombreUsuario"
                                value={values.nombreUsuario}
                                onChange={handleChange("nombreUsuario")}
                                fullWidth
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">
                                <MailIcon className="form-icon" />Correo
                            </label>
                            <TextField
                                variant="outlined"
                                className="form-control"
                                name="correo"
                                value={values.correo}
                                onChange={handleChange("correo")}
                                fullWidth
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">
                                <LocalPhoneIcon className="form-icon" />Teléfono
                            </label>
                            <TextField
                                variant="outlined"
                                className="form-control"
                                name="telefono"
                                value={values.telefono}
                                onChange={handleChange("telefono")}
                                fullWidth
                            />
                        </div>
                        <div className="form-field">
                            <InputLabel className="form-label" htmlFor="outlined-adornment-password">
                                <KeyIcon className="form-icon" />Contraseña
                            </InputLabel>
                            <FormControl variant="outlined" className="form-control" fullWidth>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? "text" : "password"}
                                    value={values.password}
                                    onChange={handleChange("password")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                        </div>
                        <div className="form-field">
                            <InputLabel className="form-label" htmlFor="outlined-adornment-confirm-password">
                                <KeyIcon className="form-icon" />Confirmar Contraseña
                            </InputLabel>
                            <FormControl variant="outlined" className="form-control" fullWidth>
                                <OutlinedInput
                                    id="outlined-adornment-confirm-password"
                                    type={values.showConfirmPassword ? "text" : "password"}
                                    value={values.confirmPassword}
                                    onChange={handleChange("confirmPassword")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle confirm password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={140}
                                />
                            </FormControl>
                        </div>
                        <br />
                        <div className="button-container">
                            <button className="login-button" onClick={registrarUsuario}>Aceptar</button>
                            <button className="cancel-button" onClick={cancelarRegistro}>Cancelar</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistroUsuario;
