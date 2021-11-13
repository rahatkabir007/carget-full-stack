import * as React from 'react';
import useAuth from '../../../hooks/useAuth';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import Review from '../User/Review/Review';
import AddProducts from '../Admin/Add Products/AddProducts';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import Pay from '../User/Pay/Pay';
import MyOrder from '../User/MyOrder/MyOrder';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import logo from '../../../images/logo.png';
import './Dashboard.css';

const drawerWidth = 200;

function Dashboard(props) {
   
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, logOut, admin } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="text-center" >
            <img src={logo} className='logo' id="logo" alt="Carget"/>
            <Toolbar />
            {/* <Divider /> */}
           
            {admin ? <Box className="d-flex flex-column" id="dash-links">
                <Link to='/home' >Home</Link>
                <Link to={`${url}/addproducts`} >Add Products</Link>
                <Link to={`${url}/manageproducts`} >Manage All Products</Link>
                <Link to={`${url}/manageorders`} >Manage All Orders</Link>
                <Link to={`${url}/makeadmin`} >Make Admin</Link>
                <Link to='/home' onClick={logOut} >Logout</Link>
            </Box>:
                <div className="d-flex flex-column" id="dash-links">
                    <Link to='/home' >Home</Link>
                    <Link to={`${url}/myorder`} >My Orders</Link>
                    <Link to={`${url}/review`} >Review</Link>
                    <Link to={`${url}/pay`}>Pay Now</Link>
                    <Link to='/home' onClick={logOut}>Logout</Link>
                </div>
        }


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' , textAlign: 'center'}}>
            <CssBaseline />
            <AppBar
                className="appbar"
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                   
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" className="py-4" noWrap component="div">
                        {user?.displayName}'s DASHBOARD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
               
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
        
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box', width: drawerWidth,
                            background: 'linear-gradient(to right, #4ca2cd, #67B26F)'
                           },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    style={{backgroundColor: 'red'}}
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'linear-gradient(to right, #4ca2cd, #67B26F)' }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/addproducts`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageorders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
