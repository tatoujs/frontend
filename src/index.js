import React from "react";
import {Provider} from 'react-redux';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';

import store from "./store/configureStore";
import App from "./components/App.js";
import 'normalize.css';
import './styles/Index.scss';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
