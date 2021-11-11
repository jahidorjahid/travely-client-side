import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Page/Home/Home";
import RoomSingle from "./components/Page/RoomSingle/RoomSingle";
import MyBooking from "./components/Page/MyBooking/MyBooking";
import About from "./components/Page/About/About";
import Contact from "./components/Page/Contact/Contact";
import Login from "./components/Page/Login/Login";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Redirect to="/"></Redirect>
          </Route>
          <Route exact path="/rooms/:roomId">
            <RoomSingle></RoomSingle>
          </Route>
          <Route exact path="/my-bookings">
            <MyBooking></MyBooking>
          </Route>
          <Route exact path="/manage-bookings">
            <MyBooking></MyBooking>
          </Route>
          <Route exact path="/contact-us">
            <Contact></Contact>
          </Route>
          <Route exact path="/about-us">
            <About></About>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <h1 className="text-center">404 Not Found Page</h1>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
