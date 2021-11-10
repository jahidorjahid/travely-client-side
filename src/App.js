import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Page/Home";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/single">
          <h1
            style={{ border: "3px solid red", marginTop: "20px" }}
            className="p-5"
          >
            Booking details page
          </h1>
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
