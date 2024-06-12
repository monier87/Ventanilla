import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Login.css';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import configur from '../../../apis/env';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';

// Obtener la configuración del entorno
const env = configur.envDev ? configur.dev : configur.prod;
const baseUrl = env.api.base + env.api.ruta.login;

const Login = () => {
    const navigate = useNavigate();


    const { values, error, handleChange, handleClickShowPassword, handleMouseDownPassword, setError } = useForm({
        email: "",
        password: "",
        showPassword: true,
    });

    const iniciarSesion = () => {
        const { email, password } = values;
        axios.post(baseUrl, {
            email: email,
            password: password
        })
            .then(resp => {
                console.log(resp);
                if (resp.data.type === 'Success') {
                    setError('');
                    console.log(resp.data.msg);
                    localStorage.setItem('token', resp.data.token);
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
                                <PersonIcon  className="form-icon" />Usuario
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={values.email}
                                onChange={handleChange("email")}
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
