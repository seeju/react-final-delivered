import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import calculatorStore from "./redux/calculator/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {calculatorStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
