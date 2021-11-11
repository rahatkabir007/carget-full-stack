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
import { Button } from '@mui/material';
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


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, logOut } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <h1>Home</h1>
            <Toolbar />
            {/* <Divider /> */}
           
            <div className="d-flex flex-column ">
                <Link to={`${url}/addproducts`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Add Products</Button></Link>
                <Link to={`${url}/manageproducts`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Manage All Products</Button></Link>
                <Link to={`${url}/manageorders`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Manage All Orders</Button></Link>
                <Link to={`${url}/makeadmin`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/myorder`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">My Order</Button></Link>
                <Link to={`${url}/review`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Review</Button></Link>
                <Link to={`${url}/pay`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit" >Pay Now</Button></Link>
                <Link to='/home' onClick={logOut} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit" >Logout</Button></Link>
            </div>
            {/* {admin && <Box>
                <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/addDoctor`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit">Add Doctor</Button></Link>
            </Box>} */}


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
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
                    <Typography variant="h6" noWrap component="div">
                        {user?.displayName}'s Dashboard
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
                    <Route path={`${path}/addproducts`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageorders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
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
