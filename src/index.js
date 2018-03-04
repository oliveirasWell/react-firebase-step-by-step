import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {urls} from "./utils/urlUtils";

ReactDOM.render(
    <Router>
        <Route path={urls.home.path} component={App}/>
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
