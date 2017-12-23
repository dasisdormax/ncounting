import React from 'react';
import ReactDOM from 'react-dom';

export default class Sidebar extends React.Component {
	render() {
		return this.props.children ? <div id="app-sidebar">{this.props.children}</div> : null;
	}
}
