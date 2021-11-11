import React, { useState } from 'react';
import './Login.css';
import Navigation from '../../Shared/Navigation/Navigation';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CircularProgress, Alert } from '@mui/material';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const theme = createTheme();
const Login = () => {

    //we will set our input datas on this state as object
    const [loginData, setLoginData] = useState({});
    const { signInUsingGoogle, loginUser, isLoading, success, passError } = useAuth();

    //redirect hooks
    const location = useLocation();
    const history = useHistory();

    //to capture the input value from the input field
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();

    };

    //signin with google
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }


    //circular progress
    function CircularProgressWithLabel(props) {
        return (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress style={{ color: '#f18d4d' }} variant="determinate" {...props} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary">
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        );
    }

    CircularProgressWithLabel.propTypes = {
        /**
         * The value of the progress indicator for the determinate variant.
         * Value between 0 and 100.
         * @default 0
         */
        value: PropTypes.number.isRequired,
    };
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <div className="login-section">
                <Navigation ></Navigation>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs" style={{ backgroundColor: '#F9E4C8', border: '10px solid #f18d4d', borderRadius: "10px", marginTop: "40px", padding: "5px" }} className="login-form">
                        <CssBaseline />
                        <Box
                            sx={{
                                margin: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',

                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: '#f18d4d' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h3" sx={{ color: 'black' }} style={{ textShadow: '2px 2px white' }}>
                                Log in
                            </Typography>
                            {!isLoading && <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }} >
                                <TextField
                                    onBlur={handleOnBlur}
                                    color="warning"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    onBlur={handleOnBlur}
                                    color="warning"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                {success && <Grid item xs={12}><Alert severity="success" style={{ marginTop: '6px' }}>{success}</Alert></Grid>}
                                {passError && <Grid item xs={12}><Alert severity="error" style={{ marginTop: '6px' }}>{passError}</Alert></Grid>}
                                <Button
                                    style={{ backgroundColor: '#f18d4d' }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Log In
                                </Button>
                                <Button
                                    onClick={handleGoogleSignIn}
                                    style={{ backgroundColor: '#f18d4d' }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    <i className="fab fa-google me-2 border border-1 border-black p-2"></i> Google Login
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link style={{ color: 'black' }} to='' variant="body1">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link style={{ color: 'black' }} to='/register' variant="body2">
                                            {"Don't have an account? Register"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>  
                            }
                            {isLoading && <CircularProgressWithLabel value={progress} />}
                        </Box>

                    </Container>
                </ThemeProvider>
            </div>
        </>
    );
};

export default Login;