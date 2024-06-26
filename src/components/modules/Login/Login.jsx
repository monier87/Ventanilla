import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
  Alert,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  TextField
} from '@mui/material';
import {
  Key as KeyIcon,
  Person as PersonIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Login.css';

import useForm from '../../../hooks/useForm';
import configur from '../../../apis/env';

// Obtener la configuración del entorno
const env = configur.envDev ? configur.dev : configur.prod;
const baseUrl = env.api.base + env.api.ruta.login;

const Login = () => {
    const navigate = useNavigate();

    const {
        values,
        error,
        handleChange,
        handleClickShowPassword,
        handleMouseDownPassword,
        setError
    } = useForm({
        email: "",
        password: "",
        showPassword: false, // Cambiar a false para mostrar la contraseña por defecto
    });

    const iniciarSesion = () => {
        // const { email, password } = values;
        // axios.post(baseUrl, { email, password })
        //     .then(resp => {
        //         if (resp.data.type === 'Success') {
        //             setError('');
        //             localStorage.setItem('token', resp.data.token);
        //             navigate('/dashboard'); // Redirige a la página dashboard al iniciar sesión con éxito
        //         } else {
        //             setError(resp.data.msg);
        //         }
        //     })
        //     .catch(error => {
        //         alert(error);
        //     });

        navigate('/dashboard'); 
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
                            <h6>VENTANILLA DE ATENCION VIRTUAL</h6>
                        </div>
                    </div>
                    {error && <Alert severity="error">{error}</Alert>}
                    <div className="form-group">
                        <div className="form-field">
                            <label className="form-label">
                                <PersonIcon className="form-icon" />Usuario
                            </label>
                            <TextField
                                variant="outlined"
                                className="form-control"
                                name="email"
                                value={values.email}
                                onChange={handleChange("email")}
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
                        <br />
                        <button className="login-button" onClick={iniciarSesion}>Aceptar</button>
                        <div className="login-info">
                            <span>No tiene usuario? </span>
                            <Link to="/registro">Registrarse en sistema</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
