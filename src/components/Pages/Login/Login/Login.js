import React from 'react';
import './Login.css';
import Navigation from '../../Shared/Navigation/Navigation';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const theme = createTheme();
const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
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
                            <Typography component="h1" variant="h3"  sx={{ color: 'black' }} style={{ textShadow: '2px 2px white' }}>
                                Log in
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                                <TextField
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
                                <FormControlLabel
                                   
                                    control={<Checkbox value="remember" color="warning" />}
                                    label="Remember me"
                                />
                                <Button
                                    style={{ backgroundColor: '#f18d4d' }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Log In
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
                        </Box>

                    </Container>
                </ThemeProvider>
            </div>
        </>
    );
};

export default Login;