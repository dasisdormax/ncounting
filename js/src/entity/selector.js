import React from 'react';
import ReactDOM from 'react-dom';

export default class EntitySelector extends React.Component {
	componentDidMount() {
		setTimeout(() => this.props.setEntity({name:"myEntity"}), 2000);
	}
	render() {
		return null;
	}
}
