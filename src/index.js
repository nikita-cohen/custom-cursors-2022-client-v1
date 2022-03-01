import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/lib/components/Provider";
import {applyMiddleware, createStore} from "redux";
import reducer from './redux/reducer';
import thunk from "redux-thunk";
import {AppConnected} from "./App";
import {composeWithDevTools} from "redux-devtools-extension";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={createStore(reducer,  composeWithDevTools(applyMiddleware(thunk)))}>
            <AppConnected/>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
