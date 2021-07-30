import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import React,{ useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe, loadstripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js"; 
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51JAKvzSFXCpMsTHFD3kHmHEfqcuzM3Rn3kVBAHh1Mlp0vOUL29W7FkWQ1J2TqVYeJ0V1ACSaQvn9gL8kk0wU5HNF00jk7yeovq"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;