import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './components/context/AuthProvider';
import Dashboard from './components/Pages/Dashboard/Dashboard/Dashboard';
import Explore from './components/Pages/Explore/Explore';
import NotFound from './components/Pages/notFound/NotFound';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login/Login';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';
import Register from './components/Pages/Login/Register/Register';
import DashboardHome from './components/Pages/Dashboard/Dashboard/DashboardHome/DashboardHome';
import MyOrder from './components/Pages/Dashboard/User/MyOrder/MyOrder';
import Review from './components/Pages/Dashboard/User/Review/Review';
import Pay from './components/Pages/Dashboard/User/Pay/Pay';
import AddProducts from './components/Pages/Dashboard/Admin/Add Products/AddProducts';
import MakeAdmin from './components/Pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import ManageOrders from './components/Pages/Dashboard/Admin/ManageOrders/ManageOrders';
import ManageProducts from './components/Pages/Dashboard/Admin/ManageProducts/ManageProducts';
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder';
import AdminRoute from './components/Pages/Login/AdminRoute/AdminRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/explore'>
              <Explore></Explore>
            </PrivateRoute>
            <PrivateRoute path='/selectedproduct/:productId'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
             <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/dashboardhome'>
              <DashboardHome></DashboardHome>
            </PrivateRoute>
            <PrivateRoute path='/myorder'>
             <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/review'>
             <Review></Review>
            </PrivateRoute>
            <PrivateRoute path='/pay'>
            <Pay></Pay>
            </PrivateRoute>
            <AdminRoute path='/addproducts'>
           <AddProducts></AddProducts>
            </AdminRoute>
            <AdminRoute path='/makeadmin'>
            <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path='/manageorders'>
            <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute path='/manageproducts'>
            <ManageProducts></ManageProducts>
            </AdminRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
