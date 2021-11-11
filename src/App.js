import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Page/Home/Home";
import RoomSingle from "./components/Page/RoomSingle/RoomSingle";
import MyBooking from "./components/Page/MyBooking/MyBooking";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/rooms/:roomId">
          <RoomSingle></RoomSingle>
        </Route>
        <Route exact path="/my-bookings">
          <MyBooking></MyBooking>
        </Route>
        <Route path="*">
          <h1 className="text-center">404 Not Found Page</h1>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
