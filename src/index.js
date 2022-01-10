import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/lib/components/Provider";
import {applyMiddleware, createStore} from "redux";
import reducer from './redux/reducer';
import thunk from "redux-thunk";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter forceRefresh={true}>
          <Provider store={createStore(reducer, applyMiddleware(thunk))}>
           <App/>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
