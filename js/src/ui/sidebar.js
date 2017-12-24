import React from 'react';
import ReactDOM from 'react-dom';

export default class Sidebar extends React.Component {
	render() {
		if(this.props.children) {
			return <div id="app-sidebar">
				<div id="app-sidebar-content">{this.props.children}</div>
				<a className="close icon-close" onClick={() => this.props.setSidebar(null)}></a>
			</div>;
		}
		return null;
	}
}
