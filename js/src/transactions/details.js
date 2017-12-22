import React from 'react';
import ReactDOM from 'react-dom';

export default class TransactionDetails extends React.Component {
	render() {
		const t = this.props.transaction;
		if(!t) return null;
		return <div id="app-sidebar">
			<p>{t.name}</p>
		</div>;
	}
}
