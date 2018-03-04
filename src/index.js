import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {urls} from "./utils/urlUtils";
import {Provider} from 'react-redux';
import configureStore from './utils/configureStore';
import {PersistGate} from 'redux-persist/integration/react'

const {store, persistor} = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Route path={urls.home.path} component={App}/>
            </Router>
        </PersistGate>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();