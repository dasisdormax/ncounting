import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './sidebar.js';
import Navigation from './navigation.js';

import TransactionList from '../transaction/list.js';

export default class UI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarContent: null
		};
		this.setSidebarContent = this.setSidebarContent.bind(this);
	}

	setSidebarContent(component) {
		this.setState({sidebarContent: component});
	}

	render() {
		let has_sidebar = this.state.sidebarContent != null;
		return <React.Fragment>
			<Navigation entityInfo={this.props.entityInfo} />
			<div id="app-content" className={has_sidebar ? "with-app-sidebar" : ''}>
				<TransactionList setSidebarContent={this.setSidebarContent}/>
				<Sidebar>{this.state.sidebarContent}</Sidebar>
			</div>
		</React.Fragment>;
	}
}
