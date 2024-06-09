import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/RegistroUsuario.css';
import axios from 'axios';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputLabel from '@mui/material/InputLabel';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyIcon from '@mui/icons-material/Key';
import Input from '@mui/material/Input';
import configur from '../../../env';
import Alert from '@mui/material/Alert';

// Obtener la configuración del entorno
const env = configur.envDev ? configur.dev : configur.prod;
const baseUrl = env.api.base + env.api.ruta.registro;

const RegistroUsuario = () => {
    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        nombres: "",
        apellido1: "",
        apellido2: "",
        nombreUsuario: "",
        correo: "",
        telefono: "",
        password: "",
        confirmPassword: "",
        showPassword: true,
        showConfirmPassword: true,
    });

    const [error, setError] = React.useState('');

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

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
                    navigate('/dashboard');
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
                        {/*<LogoMinisterio size={100} />
                        <Siglas width={70} height={30} />*/}
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
                            <input
                                type="text"
                                className="form-control"
                                name="nombres"
                                value={values.nombres}
                                onChange={handleChange("nombres")}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">
                                <PeopleAltIcon className="form-icon" />Primer Apellido
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="apellido1"
                                value={values.apellido1}
                                onChange={handleChange("apellido1")}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">
                                <PeopleAltIcon className="form-icon" />Segundo Apellido
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="apellido2"
                                value={values.apellido2}
                                onChange={handleChange("apellido2")}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">
                                <PeopleAltIcon className="form-icon" />Nombre de Usuario
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="nombreUsuario"
                                value={values.nombreUsuario}
                                onChange={handleChange("nombreUsuario")}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">
                                <ContactMailIcon className="form-icon" />Correo
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name="correo"
                                value={values.correo}
                                onChange={handleChange("correo")}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">
                                <LocalPhoneIcon className="form-icon" />Teléfono
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="telefono"
                                value={values.telefono}
                                onChange={handleChange("telefono")}
                            />
                        </div>
                        <div className="form-field">
                            <InputLabel className="form-label" htmlFor="standard-adornment-password">
                                <KeyIcon className="form-icon" />Contraseña
                            </InputLabel>
                            <Input
                                type={values.showPassword ? "password" : "text"}
                                onChange={handleChange("password")}
                                value={values.password}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>
                        <div className="form-field">
                            <InputLabel className="form-label" htmlFor="standard-adornment-confirm-password">
                                <KeyIcon className="form-icon" />Confirmar Contraseña
                            </InputLabel>
                            <Input
                                type={values.showConfirmPassword ? "password" : "text"}
                                onChange={handleChange("confirmPassword")}
                                value={values.confirmPassword}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>
                        <br />
                        <button className="login-button" onClick={registrarUsuario}>Registrarse</button>
                        <button className="cancel-button" onClick={cancelarRegistro}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistroUsuario;
