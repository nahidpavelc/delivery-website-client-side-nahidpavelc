import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Aboutus from './Pages/Aboutus/Aboutus';
import AddService from './Pages/AddService/AddService';
import Delete from './Pages/AddService/Delete/Delete';
import Home from './Pages/Home/Home/Home';
import Riders from './Pages/Home/Riders/Riders';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyCart from './Pages/MyCart/MyCart';
import Myorder from './Pages/Myorder/Myorder';
import NotFound from './Pages/NotFound/NotFound';
import Order from './Pages/Send/Booking/Booking';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/Riders">
              <Riders></Riders>
            </Route>
            <Route path="/Aboutus">
              <Aboutus></Aboutus>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/myorder">
              <Myorder></Myorder>
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Order></Order>
            </PrivateRoute>

            <Route path="/addservice">
              <AddService></AddService>
            </Route>
            <Route path="/MyCart">
              <MyCart></MyCart>
            </Route>

            <Route path="/Delete">
              <Delete></Delete>
            </Route>


            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
