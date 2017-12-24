import React from 'react';
import ReactDOM from 'react-dom';

import Breadcrumb from './breadcrumb.js';

export default class Controls extends React.Component {
	render() {
		var breadcrumbs = Array.isArray(this.props.breadcrumbs) ? this.props.breadcrumbs.slice() : [];
		var lastBreadcrumb = breadcrumbs.pop();
		var firstBreadcrumb = breadcrumbs.shift();
		var breadcrumbMenu = null;
		if(breadcrumbs.length) {
			breadcrumbMenu = breadcrumbs.map((b) => <Breadcrumb data={b} />);
		}
		return <div id="controls">
			<div className="breadcrumb">
				<div className="crumb svg">
					<span className="icon-home"></span>
					<span>{this.props.entityInfo.name}</span>
				</div>
				<Breadcrumb data={firstBreadcrumb} />
				{breadcrumbMenu}
				<Breadcrumb data={lastBreadcrumb} />
			</div>
			{this.props.children}
		</div>;
	}
}
