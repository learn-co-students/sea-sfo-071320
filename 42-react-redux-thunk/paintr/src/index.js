import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux' 
import "semantic-ui-css/semantic.min.css";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
