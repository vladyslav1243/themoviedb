import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import ErrorBoundry from "./component/error-boundry";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./component/app";
import store from "./store";
import {authApi} from "./services/services";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <Router>
                    <App/>
                </Router>
            </ErrorBoundry>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

window.state = store;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
