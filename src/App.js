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
            <Route path='/dashboard'>
             <Dashboard></Dashboard>
            </Route>
            <Route path='/dashboardhome'>
              <DashboardHome></DashboardHome>
            </Route>
            <Route path='/myorder'>
             <MyOrder></MyOrder>
            </Route>
            <Route path='/review'>
             <Review></Review>
            </Route>
            <Route path='/pay'>
            <Pay></Pay>
            </Route>
            <Route path='/addproducts'>
           <AddProducts></AddProducts>
            </Route>
            <Route path='/makeadmin'>
            <MakeAdmin></MakeAdmin>
            </Route>
            <Route path='/manageorders'>
            <ManageOrders></ManageOrders>
            </Route>
            <Route path='/manageproducts'>
            <ManageProducts></ManageProducts>
            </Route>
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
