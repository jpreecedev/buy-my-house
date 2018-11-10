import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { hydrate } from 'react-dom';
import App from '../shared/App';

const browserHistory = window.browserHistory || createHistory();

hydrate(<App />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }

    if (!window.browserHistory) {
        window.browserHistory = browserHistory;
    }
}
