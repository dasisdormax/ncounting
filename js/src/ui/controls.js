import React from 'react';
import ReactDOM from 'react-dom';

export default class Controls extends React.Component {
	render() {
		var breadcrumbs = [];
		return <div id="controls">
			<div className="breadcrumb">
				<div className="crumb svg ui-droppable">
					<span className="icon-home"></span>
					<span>{this.props.entityInfo.name}</span>
				</div>
				{breadcrumbs}
			</div>
			{this.props.children}
		</div>;
	}
}
