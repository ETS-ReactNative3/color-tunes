import React from 'react';
import { render } from "react-dom";
import './index.css';
import { Provider } from "react-redux";
import { initRouter } from "./router";
import store from "./store";
import App from "./App";
// ========================================

import 'tone';
import '@webcomponents/webcomponentsjs';
import '@tonejs/ui';


initRouter(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
