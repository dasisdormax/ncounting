import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './sidebar.js';
import Controls from './controls.js';
import Navigation from './navigation.js';

import TransactionList from '../transaction/list.js';

export default class UI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebar: null,
			breadcrumbs: null,
			controls: null,
		};
		this.setSidebar = this.setSidebar.bind(this);
		this.setControls = this.setControls.bind(this);
		this.setBreadcrumbs = this.setBreadcrumbs.bind(this);
	}

	setSidebar(children) {
		this.setState({sidebar: children});
	}

	setControls(children) {
		this.setState({controls: children});
	}

	setBreadcrumbs(breadcrumbs) {
		this.setState({breadcrumbs});
	}

	render() {
		let has_sidebar = this.state.sidebarContent != null;
		return <React.Fragment>
			<Navigation entityInfo={this.props.entityInfo} />
			<div id="app-content" className={has_sidebar ? "with-app-sidebar" : ''}>
				<div id="app-navigation-toggle" className="icon-menu" style={{display:"none"}}></div>
				<Controls entityInfo={this.props.entityInfo} breadcrumbs={this.state.breadcrumbs}>{this.state.controls}</Controls>
				<TransactionList setSidebar={this.setSidebar} setControls={this.setControls} setBreadcrumbs={this.setBreadcrumbs}/>
				<Sidebar setSidebar={this.setSidebar}>{this.state.sidebar}</Sidebar>
			</div>
		</React.Fragment>;
	}
}
