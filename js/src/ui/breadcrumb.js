import React from 'react';
import ReactDOM from 'react-dom';

export default class Breadcrumb extends React.Component {
	render() {
		if(this.props.data) {
			var data = this.props.data;
			return <div className="crumb svg">
				<a onClick={data.onClick}>{data.name}</a>
			</div>;
		}
		return null;
	}
}
