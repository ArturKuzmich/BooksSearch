import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import  {Provider} from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, {history} from './configureStore'
import routes from "./routes";


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
