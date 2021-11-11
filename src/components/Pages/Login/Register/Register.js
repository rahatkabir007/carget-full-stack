import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navigation from '../../Shared/Navigation/Navigation';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';
import useAuth from '../../../hooks/useAuth';
import { Alert, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

const theme = createTheme();

export default function SignUp() {

    //accessing useAuth which represents useFirebase;
    const { registerUser, isLoading, success, authError, setAuthError } = useAuth();

    //we will set our input datas on this state as object
    const [registerData, setRegisterData] = useState({});

    const [match, setMatch] = useState('');

    const history = useHistory();


    //to capture the input value from the input field
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegisterSubmit = (e) => {
        if (registerData.password === registerData.password2) {
            setMatch('');
            setAuthError('');
            registerUser(registerData.email, registerData.password, registerData.name, history, setMatch);

        }
        else {
            setMatch("Password Didn't Match");
            setAuthError('');
        }

        e.preventDefault();
    };


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
            <div className="register-section">
                <Navigation></Navigation>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs" style={{ backgroundColor: '#F9E4C8', border: '10px solid #f18d4d', borderRadius: "10px", marginTop: "40px", padding: "5px" }} className="register-form">
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
                                Register
                            </Typography>
                            {!isLoading && <Box component="form" onSubmit={handleRegisterSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            onBlur={handleOnBlur}
                                            color="warning"
                                            name="name"
                                            type="text"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onBlur={handleOnBlur}
                                            color="warning"
                                            required
                                            fullWidth
                                            type='email'
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onBlur={handleOnBlur}
                                            color="warning"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onBlur={handleOnBlur}
                                            color="warning"
                                            required
                                            fullWidth
                                            name="password2"
                                            label="Re-type your password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        />
                                    </Grid>
                                </Grid>
                                {match && <Grid item xs={12}><Alert severity="error" style={{ marginTop: '6px' }}>{match}</Alert></Grid>}
                                {success && <Grid item xs={12}><Alert severity="success" style={{ marginTop: '6px' }}>{success}</Alert></Grid>}
                                {authError && <Grid item xs={12}> <Alert severity="error" style={{ marginTop: '6px' }}>{authError}</Alert></Grid>}
                                <Button
                                    style={{ backgroundColor: '#f18d4d' }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Register
                                </Button>
                                <Grid container justifyContent="flex-start">
                                    <Grid item>
                                        <Link to='/login' style={{ color: 'black' }} variant="body2">
                                            Already have an account? Log in
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
}