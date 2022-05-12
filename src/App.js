import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Shared/Header/Header';
import Authors from './Components/FrontEnd/Authors/Authors';
import Publications from './Components/FrontEnd/Publications/Publications';
import Subscribe from './Components/Shared/Subscribe/Subscribe';
import WhyChooseUs from './Components/Shared/WhyChooseUs/WhyChooseUs';
import ContactUs from './Components/FrontEnd/ContactUs/ContactUs';
import Footer from './Components/Shared/Footer/Footer';
import Login from './Components/Auth/Login/Login';
import ForgotPassword from './Components/Auth/ForgotPassword/ForgotPassword';
import Register from './Components/Auth/Register/Register';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        {/* <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route> */}
        <Route path="/authors">
          <Authors></Authors>
        </Route>
        <Route path="/publications">
          <Publications></Publications>
        </Route>
        {/* <Route path="/categories">
          <AddParcel></AddParcel>
        </Route> */}
        {/* <Route path="/manage-parcels">
          <Parcels></Parcels>
        </Route>
        <Route path="/my-parcels">
          <MyOrders></MyOrders>
        </Route> */}
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword></ForgotPassword>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        {/* <Route path="/privacy-policy">
          <PrivacyPolicy></PrivacyPolicy>
        </Route>
        <Route path="/faq">
          <Faq></Faq>
        </Route> */}
        {/* <Route path="/detail-price">
          <DetailPrice></DetailPrice>
        </Route> */}
      </Switch>
      <Subscribe></Subscribe>
      <WhyChooseUs></WhyChooseUs>
      <Footer></Footer>
    </Router>
  );
}

export default App;
