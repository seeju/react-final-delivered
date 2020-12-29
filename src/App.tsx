import React from 'react';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Movies from './pages/Movies';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Header from './components/Header';
import calculatorStore from "./redux/calculator/store/store";
import { Provider } from "react-redux"

function App(store: any) {
  return (
    <>
    <Router>
    <div>
      <Header />
      <hr/>
        <Switch>
        <Route
            exact
            path="/"
            render={() => {
                return (
                  <Redirect to="/home" />
                )
            }}
          />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/calculator">
            <Provider store = {calculatorStore}>
              {
                // @ts-ignore
                <Calculator />
              }
            </Provider>
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
    </div>
    </Router>
  </>
  );
}

export default App;
