import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';

import HerokuPage from "./HerokuPage";

class Router extends Component {

	render() {
		return <main>
			<Switch>
				<Route exact path='/' component={HerokuPage}/>
			</Switch>
		</main>;
	}
}

export default Router;
