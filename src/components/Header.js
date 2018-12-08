import React, {Component} from "react";
import {Link} from "react-router-dom";

import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

class Header extends Component {

	render() {
		return <AppBar position="static">
			<Toolbar>
				<Typography variant="h6" color="inherit">
					<Link to="/">Tatoujs</Link>
				</Typography>
				<Button color="inherit">
					<Link to="/">Heroku</Link>
				</Button>
			</Toolbar>
		</AppBar>;
	}
}

export default Header;
