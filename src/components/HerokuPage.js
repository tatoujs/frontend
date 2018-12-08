import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {withStyles} from "@material-ui/core";

import Config from '../config/config';
import {fetchPublicTransport, fetchRouting, resetCsvProcessing, saveCsvRow, saveNbCsvRows} from '../actions/actions';
import styles from '../styles/HerokuPage.scss';

const muiStyles = {
	rootTypography: {
		marginBottom: '20px'
	},
	rootTypographyError: {
		color: '#e91e63'
	},
	rootLinearProgress: {
		width: '400px'
	},
	rootButton: {
		marginBottom: '20px'
	},
	rootButtonIcon: {
		marginLeft: '20px'
	},
	rootIcon: {
		fontSize: '25px'
	}
};

class HerokuPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const {classes} = this.props;
		return <div>
			hello
		</div>;
	}
}

HerokuPage.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {
})(withStyles(muiStyles)(HerokuPage));
